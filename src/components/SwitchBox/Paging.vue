<template lang="pug">
.paging-dots(:class='{ disabled, invisible }')
  .paging-dot(
    v-for='n in amount',
    :class='{ active: model === n - 1}',
    @click='changeDot(n)'
    )
</template>

<script>
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

      this.invisible = true

      setTimeout(() => {
        this.invisible = false
      }, 600)
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

.paging-dots {
  position: absolute;
  bottom: 80px;
  z-index: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 10px;
  transition: $transition, opacity 300ms;

  .active-dot,
  .paging-dot {
    height: $size;
    width: $size;
    overflow: hidden;
    background: $gray3;
    border-radius: 50%;
    margin: 0 8px;
    transition: all 0.15s ease-in-out;
    cursor: pointer;

    &.active {
      transform: scale(1.3);
    }
  }

  &.disabled {
    opacity: 0.6;

    .paging-dot,
    .active-dot {
      cursor: initial;
    }
  }

  &.invisible {
    opacity: 0;
  }
}
</style>
