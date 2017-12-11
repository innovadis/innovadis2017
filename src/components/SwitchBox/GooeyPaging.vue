<template lang="pug">
.goo-dots(:class='{ disabled, invisible }')
  .goo-dot(
    v-for='n in amount',
    @click='changeDot(n)'
    )
  .active-dot(ref='activeDot')
</template>

<script>
const DOT_OFFSET = 31 // based on dot size and margins

import Anime from 'animejs'

export default {
  props: {
    amount: Number,
    value: Number,
    disabled: Boolean
  },

  data () {
    return {
      model: this.value,
      invisible: false
    }
  },

  methods: {
    changeDot (n) {
      if (this.disabled) return

      this.model = n - 1
    }
  },

  watch: {
    model (index) {
      this.$emit('input', index)

      Anime({
        targets: this.$refs.activeDot,
        left: DOT_OFFSET * index,
        duration: 150,
        easing: 'easeOutElastic'
      })

      this.invisible = true

      setTimeout(() => {
        this.invisible = false
      }, 500)
    },

    value (v) {
      this.model = v
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";
$size: 15px;

.goo-dots {
  position: absolute;
  bottom: 80px;
  z-index: 1;
  display: flex;
  align-items: center;
  background: white;
  filter: contrast(10);
  overflow: hidden;
  padding: 10px;
  transition: $transition, opacity 150ms;

  .active-dot,
  .goo-dot {
    height: $size;
    width: $size;
    overflow: hidden;
    background: $gray3;
    border-radius: 50%;
    margin: 0 8px;
    transition: all 0.15s ease-in-out;
    filter: blur(3px);
    cursor: pointer;
  }

  .active-dot {
    position: absolute;
    left: 0;
    margin-left: $size;
    transform: scale(1.3);
  }

  &.disabled {
    opacity: 0.6;

    .goo-dot,
    .active-dot {
      cursor: initial;
    }
  }

  &.invisible {
    // opacity: 0;
  }
}
</style>
