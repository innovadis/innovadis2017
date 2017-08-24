<template lang="pug">
.sendbox
  transition(name='easeout-top', mode='out-in')
    .after(v-if='isSent', key='divSent')
      .lines
        .line
        .line
        .line
      .check
        .short(ref='checkShort')
        .long(ref='checkLong')
        .text(ref='checkText') Bericht verzonden
    .before(v-else, key='divInputs')
      .top
        .inputs
          custom-input(
            placeholder='Naam',
            v-model='name',
            type='text',
            required
            )

          custom-input(
            placeholder='Email adres',
            v-model='email',
            type='email',
            :valid='!$v.email.$invalid && !!email'
            )

          custom-input(
            placeholder='Telefoonnummer',
            v-model='phoneNumber',
            type='text',
            required
            )

          custom-input(
            placeholder='Opmerking',
            v-model='remarks',
            type='textarea',
            :rows='4'
            )
      .bottom
        inno-button(@click='send', :disabled='$v.$invalid', label='Verstuur')
</template>

<script>
import Anime from 'animejs'
import { required, email } from 'vuelidate/lib/validators'

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default {
  components: {
    CustomInput: require('./CustomInput')
  },

  data() {
    return {
      isSent: false,

      name: null,
      email: null,
      phoneNumber: null,
      remarks: null
    }
  },

  methods: {
    send() {
      this.isSent = true
    },

    async animateLoading() {
      await timeout(1100)

      const a = Anime({
        targets: '.line',
        translateX: 1200,
        duration: (el, i) => 800 + 200 * i,
        easing: 'easeInOutQuart',
        loop: true
      })

      await timeout(2000) // this should be the ajax delay

      a.pause()

      this.animateDone()
    },

    animateDone() {
      Anime({
        targets: this.$refs.checkShort,
        duration: 800,
        easing: 'easeInOutQuart',
        left: 194,
        top: 203,
        opacity: 1
      })

      Anime({
        targets: this.$refs.checkLong,
        duration: 800,
        easing: 'easeInOutQuart',
        right: 189,
        top: 160,
        opacity: 1
      })

      Anime({
        targets: this.$refs.checkText,
        delay: 800,
        duration: 800,
        easing: 'easeInOutQuart',
        opacity: 1
      })
    }
  },

  watch: {
    isSent(v) {
      if (v) this.animateLoading()
    }
  },

  validations: {
    name: {
      required
    },
    email: {
      email
    },
    phoneNumber: {
      required
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';
@import 'src/styles/layout';

.sendbox {
  width: 440px;
  min-width: 440px;
  border-radius: 5px;
  overflow: hidden;
  background: $inno-yellow;
  box-shadow: $shadow;

  @include phone {
    width: calc(100vw - #{$gutter});
    min-width: auto;
  }

  .before {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .top {
      flex-grow: 1;
      background: white;

      .inputs {
        padding: $gutter;
      }
    }

    .bottom {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
  }

  .after {
    height: 100%;
    background: $inno-yellow;

    .lines {
      position: relative;
      top: 80px;

      .line {
        $width: 100px;

        background: white;
        height: 5px;
        width: $width;
        border-radius: 5px;
        position: absolute;

        &:nth-child(1) {
          top: 120px;
          left: -$width;
        }

        &:nth-child(2) {
          top: 240px;
          left: -$width - 200px;
        }

        &:nth-child(3) {
          top: 200px;
          left: -$width - 100px;
        }
      }
    }

    .check {
      position: relative;

      $checkWidth: 10px;

      .short,
      .long {
        position: absolute;
        width: $checkWidth;
        background: white;
        border-radius: 5px;
        opacity: 0;
      }

      .short {
        height: 50px;
        transform: rotateZ(-45deg);
        left: 0;
        // left: 194px; // end values
        // top: 203px;
      }

      .long {
        height: 100px;
        transform: rotateZ(45deg);
        right: 0;
        // right: 189px;
        // top: 160px;
      }

      .text {
        font-family: Bitter;
        font-size: 22px;
        color: white;
        position: relative;
        top: 260px;
        left: 10px;
        opacity: 0;
      }
    }
  }
}

.easeout-top-enter-active,
.easeout-top-leave-active {
  transition: all 0.6s ease-in-out;

  .button {
    transition: opacity 0.3s ease-in-out;
  }
}

.easeout-top-enter,
.easeout-top-leave-to {
  transform: translateY(calc(-100% - 50px));

  .button {
    opacity: 0;
  }
}
</style>
