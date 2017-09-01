<template lang="pug">
.button(@click='click', :class='{ yellow: yellow }')
  .arrow(v-if='left'): i.icons8-advance.flip
  | {{ label }}
  .arrow(v-if='!left'): i.icons8-advance
</template>

<script>
export default {
  props: {
    label: String,
    to: Object,
    yellow: Boolean,
    left: Boolean
  },

  methods: {
    click() {
      if (this.to) {
        this.$router.push(this.to)
      } else {
        this.$emit('click')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.button {
  cursor: pointer;
  color: white;
  padding: 15px 0;
  display: flex;
  align-items: center;

  &.yellow {
    color: $inno-yellow;

    &:hover {
      color: $inno-yellow-dark;
    }
  }

  .arrow {
    display: flex;

    i {
      font-size: 28px;
      margin: 0 10px;
      color: $inno-yellow;

      &.flip {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
