<template lang="pug">
.image-block
  .container
    .text
      p {{ text }}
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.image-block {
  height: 750px;
  width: 100vw;
  background: url('https://placehold.it/750x1440') no-repeat center;
  background-size: cover;
  position: relative;

  .text {
    max-width: 400px;
    position: absolute;
    bottom: $gutter;

    p {
      color: white;
    }
  }
}
</style>
