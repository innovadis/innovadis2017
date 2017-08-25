<template lang="pug">
.image-block
  .container
    .text
      p There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.
</template>

<script>
export default {

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
