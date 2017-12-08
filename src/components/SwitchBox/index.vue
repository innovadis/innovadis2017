<template lang="pug">
.switchbox-container.flex.flex-justify-center(:style='{ height: height + "px" }')
  .switchbox(ref='switchbox')
    icon-effect(v-for='(c, i) in content', :iconUrl='c.backgroundIconUrl', :ref='"iconEffect" + i', :key='"iconEffect" + i')

    transition-group.flex.flex-justify-center(name='flyleft', mode='out-in')
      box(
        v-for='(c, i) in content',
        v-if='selectedIndex === i',
        :key='"box" + i',
        :title='c.title',
        :text='c.text',
        :imageUrl='c.imageUrl',
        :iconUrl='c.iconUrl'
        )

    .icons
      i.icons8-advance.flip(@click='next', :class='{ disabled: buttonDisabled }')
</template>

<script>
import SmoothScroll from 'smooth-scroll'

const scroll = new SmoothScroll()
scroll.init({
  speed: 1000
})

export default {
  components: {
    Box: require('./Box'),
    IconEffect: require('./IconEffect')
  },

  props: {
    content: Array,
    height: Number
  },

  data () {
    return {
      selectedIndex: 0,
      buttonDisabled: false
    }
  },

  methods: {
    setSelectedIndex (index) {
      this.selectedIndex = index

      this.$refs['iconEffect' + index][0].animate()
      this.$refs['iconEffect' + 0][0].reset()
      this.$refs['iconEffect' + 1][0].reset()
      this.$refs['iconEffect' + 2][0].reset()

      this.buttonDisabled = true

      const timeout = this.content.some(x => x.backgroundIconUrl) ? 2000 : 0

      setTimeout(() => {
        this.buttonDisabled = false
      }, timeout)
    },

    next () {
      if (this.selectedIndex === 2) {
        this.setSelectedIndex(0)
        return
      }

      this.setSelectedIndex(this.selectedIndex + 1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.switchbox-container {

  .switchbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    // position: absolute;
    justify-content: space-between;
    // height: 750px;

    .icons {
      margin: 20px;
      z-index: 1;

      i {
        font-size: 40px;
        margin: 0 15px;
        border-radius: 50%;
        padding: 5px 6px;
        cursor: pointer;
        transition: $transition;
        display: inline-block;
        background: white;
        box-shadow: 0 4px 5px 0 $gray1;

        &:hover {
          color: $inno-blue;
          box-shadow: 0 4px 10px 4px $gray1;
        }

        &.flip {
          transform: rotate(180deg);
          box-shadow: 0 -4px 5px 0 $gray1;

          &:hover {
            box-shadow: 0 -4px 10px 4px $gray1;
          }
        }

        &.hidden {
          visibility: hidden;
        }

        &.disabled {
          pointer-events: none;
          color: $gray1;
        }
      }
    }
  }
}

.flyleft-enter-active,
.flyleft-leave-active {
  transition: all 0.5s ease;
}

.flyleft-enter,
.flyleft-leave-to {
  opacity: 0.5;
}

.flyleft-enter {
  transform: translateX(100vw) rotate(15deg);
}

.flyleft-leave-to {
  transform: translateX(-100vw) rotate(5deg);
}
</style>
