<template lang="pug">
.orb-wrapper(v-inview:once.enter='showOrb')
  transition(name='showorb')
    .fade-in(v-show='show')
      .orb(l
        ref='orb',
        :style='style'
        )
        i(:class='[iconClass]')
</template>

<script>
import Anime from 'animejs'

export default {
  props: {
    icon: String,
    initialX: Number,
    initialY: Number,
    targetX: Number,
    targetY: Number,
    blur: Number,
    size: {
      type: Number,
      default: 50
    },
    z: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      show: false
    }
  },

  computed: {
    iconClass() {
      return 'icons8-' + this.icon
    },

    style() {
      return {
        left: this.initialX + 'px',
        top: this.initialY + 'px',
        height: this.size + 'px',
        width: this.size + 'px',
        filter: 'blur(' + this.blur + 'px)',
        'z-index': this.z
      }
    }
  },

  methods: {
    showOrb() {
      this.show = true
    },

    animate() {
      Anime({
        targets: this.$refs.orb,
        translateX: () => {
          return this.targetX
        },
        translateY: () => {
          return this.targetY
        },
        skewX: ['-9deg', '-9deg'],
        rotate: ['-10deg', '-10deg'],
        duration: 1000 * 60 * 3,
        loop: true,
        direction: 'alternate',
        easing: 'linear'
      })
    }
  },

  watch: {
    show(v) {
      if (v) this.animate()
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.orb-wrapper {
  position: relative;

  .orb {
    $size: 60px;
    $skewX: -9deg; // same as above
    $rotate: -10deg;

    position: absolute;
    height: $size;
    width: $size; // background: $inno-blue;
    background: radial-gradient(circle at center, $inno-blue-light 20%, $inno-blue-dark 100%);
    border-radius: 47%;
    transform: skewX($skewX) rotate($rotate);

    display: flex;
    justify-content: center;
    align-items: center;

    i {
      color: white;
      font-size: 28px;
      transform: skewX(-$skewX) rotate(-$rotate);
    }
  }
}

.showorb-enter-active,
.showorb-leave-active {
  transition: all 1s ease-in-out 0.5s;
}
.showorb-enter,
.showorb-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

</style>
