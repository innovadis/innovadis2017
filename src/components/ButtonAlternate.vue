<template lang="pug">
.button(@click='click', :class='{ yellow: yellow }') {{ label }} -->
</template>

<script>
export default {
  props: {
    label: String,
    to: Object,
    yellow: Boolean
  },

  methods: {
    click() {
      this.$router.push(this.to)
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
  transition: all 0.2s ease-in-out;
  transform-origin: left center;

  &.yellow {
    color: $inno-yellow;

    &:hover {
      color: $inno-yellow-dark;
      transform: scale(1.1);
    }
  }
}
</style>
