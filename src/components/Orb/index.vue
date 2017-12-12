<template lang="pug">
.orb-wrapper(v-inview:once.enter='showOrb')
  transition(name='showorb')
    .fade-in(v-show='show', :style='{ "transition-delay": transitionDelay + "s" }')
      //- .orb(l
        ref='orb',
        :style='style'
        )
        i(:class='[iconClass]')

      i(:class='[iconClass]', :style='{ left: initialX + size/2 + 6 + "px", top: initialY + size/2 + 6 + "px" }')

      svg.orb(xmlns='http://www.w3.org/2000/svg', filter='url(#goo)', fill='#0029a8', :style='style', ref='orb')
        defs
          filter#goo
            // tympanus.net/codrops/creative-gooey-effects
            feGaussianBlur(in='SourceGraphic', stdDeviation='0', result='blur')
              feColorMatrix(in='blur', mode='matrix', values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9', result='goo')
                feComposite(in='SourceGraphic', in2='goo', operator='atop')
        g
          template(v-if='single')
            circle(:r='size/2', :cy='size/2', :cx='size/2')

          template(v-else)
            circle(:r='size/2', :cy='size/2-ORB_WOBBLE', :cx='size/2')
              animateTransform(attributeType='xml', attributeName='transform', type='rotate', :from='"0 "+ (size/2-ORB_WOBBLE).toString() +" "+ (size/2).toString()', :to='"360 "+ (size/2-ORB_WOBBLE).toString() +" "+ (size/2).toString()', dur='10s', repeatCount='indefinite')
            circle(:r='size/2', :cy='size/2+ORB_WOBBLE', :cx='size/2')
              animateTransform(attributeType='xml', attributeName='transform', type='rotate', :from='"360 "+ (size/2+ORB_WOBBLE).toString() +" "+ (size/2).toString()', :to='"0 "+ (size/2+ORB_WOBBLE).toString() +" "+ (size/2).toString()', dur='20s', repeatCount='indefinite')
            circle(:r='size/2', :cy='size/2', :cx='size/2-ORB_WOBBLE')
              animateTransform(attributeType='xml', attributeName='transform', type='rotate', :from='"0 "+ (size/2).toString() +" "+ (size/2-ORB_WOBBLE).toString()', :to='"360 "+ (size/2).toString() +" "+ (size/2-ORB_WOBBLE).toString()', dur='30s', repeatCount='indefinite')
            circle(:r='size/2', :cy='size/2', :cx='size/2+ORB_WOBBLE')
              animateTransform(attributeType='xml', attributeName='transform', type='rotate', :from='"360 "+ (size/2).toString() +" "+ (size/2+ORB_WOBBLE).toString()', :to='"0 "+ (size/2).toString() +" "+ (size/2+ORB_WOBBLE).toString()', dur='25s', repeatCount='indefinite')
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
    single: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: true
    },
    size: {
      type: Number,
      default: 50
    },
    z: {
      type: Number,
      default: 0
    },
    transitionDelay: {
      type: Number,
      default: 0.5
    }
  },

  data () {
    return {
      show: false
    }
  },

  computed: {
    iconClass () {
      return 'icons8-' + this.icon
    },

    style () {
      const style = {
        left: this.initialX + 'px',
        top: this.initialY + 'px',
        height: this.size + 'px',
        width: this.size + 'px',
        filter: 'blur(' + this.blur + 'px)',
        'z-index': this.z
      }

      if (this.shadow === false) {
        style['filter'] = 'none'
      }

      return style
    },

    ORB_WOBBLE () {
      return 3
    }
  },

  methods: {
    showOrb () {
      this.show = true
    },

    animate () {
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
    show (v) {
      if (v) this.animate()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.orb-wrapper {
  position: relative;

  .orb {
    position: absolute;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
    filter: drop-shadow(10px 50px 15px rgba(0, 0, 0, 0.2));
  }

  i {
    color: white;
    font-size: 28px;
    position: absolute;
    left: 0;
    z-index: 1;
  }
}

.showorb-enter-active,
.showorb-leave-active {
  transition: all 1s ease-in-out;
}

.showorb-enter,
.showorb-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
