<template lang="pug">
.phone-container
  .phone
</template>

<script>

</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.phone-container {
  position: relative;
  min-width: 50%;
  left: 20%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @include phablet {
    left: 0;
    top: 120px;
    width: 25%;
  }

  @include phone {
    width: 100%;
  }

  .phone {
    background: url('/static/cases/Vredestein/Apollo_Tablet_Small.png') no-repeat center;
    background-size: contain;
    height: 364px; 
    width: 100%;
    position: relative;
    z-index: 1;
    left: -40px;

    @include tablet {
      top: -60px;
    }
  }
}
</style>
