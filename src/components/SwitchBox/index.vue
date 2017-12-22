<template lang="pug">
.switchbox-container.flex.flex-align-center.flex-column(:style='{ height: height + "px" }')
  paging(:amount='content.length', v-model='selectedIndex', :disabled='buttonDisabled')

  .switchbox(ref='switchbox')
    .icon-effect-container(:style='{ height: height + "px" }')
      icon-effect(v-for='(c, i) in content', :iconUrl='c.backgroundIconUrl', :ref='"iconEffect" + i', :key='"iconEffect" + i')

    v-touch(v-on:swiperight='previous', v-on:swipeleft='next')
      transition-group.flex.flex-justify-center(:name='lastSwipeDirection === "left" ? "flyleft" : "flyright"', mode='out-in')
        box(
          v-for='(c, i) in content',
          v-if='selectedIndex === i',
          :key='"box" + i',
          :title='c.title',
          :text='c.text',
          :imageUrl='c.imageUrl',
          :iconUrl='c.iconUrl'
          )

    .icons.hidden-phone
      i.icons8-advance(@click='next', :class='{ disabled: buttonDisabled }')
</template>

<script>
export default {
  components: {
    Box: require('./Box'),
    IconEffect: require('./IconEffect'),
    Paging: require('./Paging')
  },

  props: {
    content: Array,
    height: Number
  },

  data () {
    return {
      selectedIndex: 0,
      buttonDisabled: false,
      lastSwipeDirection: null
    }
  },

  methods: {
    setSelectedIndex (index) {
      this.selectedIndex = index
    },

    next () {
      this.lastSwipeDirection = 'right'

      if (this.selectedIndex === this.content.length - 1) {
        this.setSelectedIndex(0)
        return
      }

      this.setSelectedIndex(this.selectedIndex + 1)
    },

    previous () {
      this.lastSwipeDirection = 'left'

      if (this.selectedIndex === 0) {
        this.setSelectedIndex(this.content.length - 1)
        return
      }

      this.setSelectedIndex(this.selectedIndex - 1)
    }
  },

  watch: {
    selectedIndex (index) {
      this.$refs['iconEffect' + index][0].animate()
      this.$refs['iconEffect' + 0][0].reset()
      this.$refs['iconEffect' + 1][0].reset()
      this.$refs['iconEffect' + 2][0].reset()

      this.buttonDisabled = true

      const timeout = this.content.some(x => x.backgroundIconUrl) ? 2000 : 0

      setTimeout(() => {
        this.buttonDisabled = false
      }, timeout)
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
    position: relative;
    justify-content: space-between;

    .icon-effect-container {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;

      @include phone {
        display: none;
      }
    }

    .icons {
      z-index: 1;
      position: relative;
      top: -70px;

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

.flyright-enter-active,
.flyright-leave-active,
.flyleft-enter-active,
.flyleft-leave-active {
  transition: all 0.5s ease;
}

.flyright-enter,
.flyright-leave-to,
.flyleft-enter,
.flyleft-leave-to {
  opacity: 0.5;
}

.flyleft-enter {
  transform: translateX(-100vw) rotate(15deg);
}

.flyleft-leave-to {
  transform: translateX(100vw) rotate(5deg);
}

.flyright-enter {
  transform: translateX(100vw) rotate(15deg);
}

.flyright-leave-to {
  transform: translateX(-100vw) rotate(15deg);
}
</style>
