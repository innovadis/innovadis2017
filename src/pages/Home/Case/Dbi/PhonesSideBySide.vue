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
  background-image: url('/static/cases/DBI/DBI_Small.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  min-width: 80%;
  min-height: 450px;
  margin-bottom: 100px;
  margin-right: $gutter;
}
</style>
