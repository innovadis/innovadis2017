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
@import 'src/styles/layout';

.letstalk {
  padding: 20px 0 100px 0;

  background: url('/static/images/frontpage_corner.png') no-repeat bottom right;
  background-size: contain;

  @include phone {
    padding: 60px 20px;
  }

  .wrapper {
    max-width: 850px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    @include phone {
      flex-direction: column;
    }

    .sendbox {
      margin-left: $gutter;
      box-shadow: 0 10px 22px 0 rgba(0, 0, 0, 0.1);

      @include phone {
        margin-left: 0;
        margin-top: 40px;
      }
    }
  }
}
</style>
