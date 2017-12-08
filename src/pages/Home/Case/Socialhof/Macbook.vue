<template lang="pug">
.image
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.image {
  background-image: url('/static/cases/socialhof/macbook.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 600px;
  max-width: 40vw;
  min-height: 600px;
  position: absolute;
  right: 0;
}
</style>
