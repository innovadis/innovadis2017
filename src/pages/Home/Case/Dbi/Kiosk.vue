<template lang="pug">
  .image-wrapper
    .image
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

$imageHeight: 1200px;
$offsetTop: -250px;

.image-wrapper {
  display: flex;
  justify-content: center;
  width: 100vw;
  position: relative;
  height: $imageHeight  + $offsetTop;
  position: relative;
  top: $offsetTop + 100px;

  .image {
    background-image: url('/static/cases/socialhof/kiosk.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 90%;
  }
}
</style>
