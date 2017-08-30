<template lang="pug">
.phone-container(v-inview:once.enter='animateOrbs')
  .phone
  orb.orb(ref='orb0', icon='beer')
  orb.orb(ref='orb1', icon='camera')
  orb.orb(ref='orb2', icon='user')
  orb.orb(ref='orb3', icon='film')
  orb.orb(ref='orb4', icon='comments')
  orb-path.path(ref='path0')
  orb-path.path(ref='path1')
  orb-path.path(ref='path2')
  orb-path.path(ref='path3')
  orb-path.path(ref='path4')
</template>

<script>
import Anime from 'animejs'

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const pauseMoment = [
  100,
  73,
  60,
  51,
  43
]

export default {
  components: {
    Orb: require('src/components/Orb'),
    OrbPath: require('./OrbPath')
  },

  methods: {
    async animateOrbs() {
      await timeout(500)

      for (let i = 0; i < 5; i++) {
        var path = Anime.path(this.$refs['path' + i].$el.querySelector('path'))

        Anime({
          targets: this.$refs['orb' + i].$el,
          translateX: path('x'),
          translateY: path('y'),
          easing: 'easeInOutQuad',
          duration: 2000,
          loop: false,
          update: (anim) => {
            if (anim.progress >= pauseMoment[i]) anim.pause()
          }
        })

        this.$refs['orb' + i].$el.style.visibility = 'visible'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.phone-container {
  position: relative;
  width: 50%;
  left: 20%;
  top: 50px;

  .phone {
    background: url('/static/cases/socialhof/phone.png') no-repeat center;
    background-size: contain;
    height: 500px;
    position: relative;
    left: -55px;
    z-index: 1;
  }

  .orb {
    $size: 60px;
    position: absolute;
    left: -100px - $size/2;
    top: -100px - $size/2;
    transform: translate(300px, 200px);
    visibility: hidden;
  }

  .path {
    position: absolute;
    left: -100px;
    top: -100px;
  }
}
</style>
