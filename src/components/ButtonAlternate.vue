<template lang="pug">
.button(@click='click', :class='{ yellow: yellow }')
  .arrow(v-if='left') <--
  | {{ label }}
  .arrow(v-if='!left') -->
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
  display: flex;

  &.yellow {
    color: $inno-yellow;

    &:hover {
      color: $inno-yellow-dark;
      transform: scale(1.1);
    }
  }

  .arrow {
    margin: 0 10px;
    color: $inno-yellow;
  }
}
</style>
