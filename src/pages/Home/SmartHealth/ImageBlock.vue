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

  &:before {
    content: '';
    height: 300px;
    width: 100%;
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5));
    position: absolute;
    bottom: 0;
    left: 0;
  }

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
