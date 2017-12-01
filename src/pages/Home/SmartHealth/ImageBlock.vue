<template lang="pug">
.image-block(:style='{ background: "url(" + imageUrl + ")" }')
  .container
    .text
      p {{ text }}
</template>

<script>
export default {
  props: {
    text: String,
    imageUrl: String
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.image-block {
  height: 750px;
  width: 100vw;
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-size: cover !important;
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
