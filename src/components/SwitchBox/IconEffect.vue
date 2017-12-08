<template lang="pug">
.icon-effect-container
  .icon-effect
    img(:src='iconUrl', :ref='"icon" + (n - 1)', v-for='n in amount')
</template>

<script>
import Anime from 'animejs'

function timeout (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default {
  props: {
    iconUrl: String
  },

  data () {
    return {
      amount: 10
    }
  },

  methods: {
    async animate () {
      await timeout(400)

      for (let i = 0; i < this.amount; i++) {
        const ref = this.$refs['icon' + i][0]
        ref.style.left = 0
        ref.style.top = 0
        ref.style.opacity = 1

        const ANGLE_MINMAX = 30

        const r = Math.random() * ANGLE_MINMAX * 4
        const angle = r > ANGLE_MINMAX * 2 ? r + 180 - ANGLE_MINMAX * 3 : r - ANGLE_MINMAX
        const distance = Math.random() * 400 + 400

        const x = Math.cos(angle * Math.PI / 180) * distance
        const y = Math.sin(angle * Math.PI / 180) * distance

        Anime.timeline()
          .add({
            targets: ref,
            left: x,
            top: y,
            opacity: 0.5,
            duration: 3000,
            rotate: Math.random() * 720,
            easing: 'easeOutSine'
          })
      }
    },

    reset () {
      for (let i = 0; i < this.amount; i++) {
        const ref = this.$refs['icon' + i][0]

        Anime({
          targets: ref,
          opacity: 0,
          duration: 2000
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.icon-effect-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @include phone {
    display: none;
  }

  .icon-effect {
    position: absolute;

    img {
      position: absolute;
      height: 100px;
      opacity: 0;
      left: 0;
      top: 0;
    }
  }
}
</style>
