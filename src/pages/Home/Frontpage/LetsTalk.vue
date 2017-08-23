<template lang="pug">
.letstalk
  .wrapper
    h2.dot Gewoon even praten of heb je vragen
    send-box

</template>

<script>
export default {
  components: {
    SendBox: require('src/components/SendBox')
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.letstalk {
  padding: 20px 0 100px 0;

  background: url('/static/images/frontpage_corner.png') no-repeat bottom right;
  background-size: contain;

  .wrapper {
    max-width: 850px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    .sendbox {
      margin-left: $gutter;
      box-shadow: 0 10px 22px 0 rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
