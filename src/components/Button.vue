<template lang="pug">
.button(:class='{ disabled: disabled, yellow: yellow, blue: blue, primary: primary }') {{ label }}
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    label: String,
    yellow: Boolean,
    blue: Boolean,
    primary: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.button {
  display: table;
  background: white;
  padding: 20px;
  font-weight: bold;
  font-family: Bitter;
  font-size: 20px;
  margin: 30px $gutter;
  border-radius: $border-radius;
  box-shadow: $shadow;
  transition: all 0.3s ease-in-out, opacity 0.2s ease-in-out;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.3px;

  &.disabled {
    color: $gray1;
    background: $gray0;
    cursor: not-allowed;
  }

  &.yellow {
    background: white;
    color: $inno-yellow;
    text-transform: none;
  }

  &.blue {
    background: white;
    color: $inno-blue;
    text-transform: none;
  }

  &.primary {
    padding: 28px 40px;
    background: $inno-yellow;

    &:hover {
      box-shadow: $shadow-large;
    }
  }

  &:hover {
    background: $inno-yellow-light;
    color: $gray3;
    box-shadow: 4px 2px 10px 0 rgba(0, 0, 0, 0.15);
  }
}
</style>
