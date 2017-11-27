<template lang="pug">
.sendbox(:class='{ grow: grow }', ref='sendbox')
  transition(name='easeout-top', mode='out-in')
    .after(v-if='loading', key='divSent')
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
          h2.dot(v-if='title') {{ title }}
          p(v-if='text') {{ text }}

          custom-input(
            placeholder='Naam',
            v-model='name',
            type='text',
            required,
            @enter='send'
            )

          custom-input(
            placeholder='Email adres',
            v-model='email',
            required,
            type='email',
            :valid='!$v.email.$invalid && email',
            @enter='send'
            )

          custom-input(
            placeholder='Telefoonnummer',
            v-model='phoneNumber',
            type='text',
            @enter='send'
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

  props: {
    grow: Boolean,
    title: String,
    text: String,
    subject: String,
    to: String
  },

  data() {
    return {
      isSent: false,

      name: null,
      email: null,
      phoneNumber: null,
      remarks: null,

      loading: false,
      animationLoading: null
    }
  },

  methods: {
    async send() {
      if (this.$v.$invalid) return

      this.animateLoading()

      const startTimeMs = (new Date()).getTime()

      await this.$store.dispatch('message/send', {
        to: this.to,
        subject: this.subject,
        from: this.email,
        name: this.name,
        phone: this.phoneNumber,
        message: this.remarks
      })

      const endTimeMs = (new Date()).getTime()

      const elapsed = endTimeMs - startTimeMs

      let padTimeMs = (1200 - elapsed % 1200) - 100

      if (elapsed < 1200) padTimeMs += 1200

      await timeout(padTimeMs)

      this.isSent = true
    },

    async animateLoading() {
      this.loading = true

      await timeout(1100)

      this.animationLoading = Anime({
        targets: '.line',
        translateX: 1200,
        duration: (el, i) => 800 + 200 * i,
        easing: 'easeInOutQuart',
        loop: true
      })
    },

    animateDone() {
      Anime({
        targets: this.$refs.checkShort,
        duration: 800,
        easing: 'easeInOutQuart',
        left: this.$refs.sendbox.clientWidth / 2 - 26 + 'px',
        top: '243px',
        opacity: 1
      })

      Anime({
        targets: this.$refs.checkLong,
        duration: 800,
        easing: 'easeInOutQuart',
        right: this.$refs.sendbox.clientWidth / 2 - 31 + 'px',
        top: '200px',
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
      if (v) {
        this.animationLoading.pause()

        // Anime({
        //   targets: '.line',
        //   opacity: 0,
        //   duration: 500,
        //   easing: 'easeInOutQuart',
        //   loop: false
        // })

        this.animateDone()
      }
    }
  },

  validations: {
    name: {
      required
    },

    email: {
      email
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

    .top {
      flex-grow: 1;
      background: white;

      .inputs {
        padding: $gutter;

        p {
          margin-bottom: 30px;
        }
      }
    }

    .bottom {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
  }

  .after {
    background: $inno-yellow;
    height: 570px;

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
      }

      .long {
        height: 100px;
        transform: rotateZ(45deg);
        right: 0;
      }

      .text {
        font-family: Bitter;
        font-size: 22px;
        color: white;
        position: relative;
        top: 300px;
        left: 0px;
        opacity: 0;
        text-align: center;
      }
    }
  }

  &.grow {
    width: auto;
    flex-grow: 1;
    box-shadow: 0px 5px 20px rgba(8, 45, 60, 0.1);

    @include phablet {
      flex-grow: 0;
      margin: 0 $gutter/2;
    }

    .before {
      .top {
        .inputs {
          padding: $gutter*2;

          @include phone {
            padding: $gutter/2;
          }
        }
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
