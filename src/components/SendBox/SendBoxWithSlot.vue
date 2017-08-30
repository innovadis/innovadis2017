<template lang="pug">
.sendboxwithslot(:class='{ flip: flip, background: background }')
  .container
    .flex.flex-column
      slot
    send-box

</template>

<script>
export default {
  components: {
    SendBox: require('src/components/SendBox')
  },

  props: {
    flip: Boolean,
    background: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';
@import 'src/styles/layout';

.sendboxwithslot {
  padding: 20px 0 100px 0;

  @include phablet {
    // padding: 60px 20px;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;

    @include phablet {
      flex-direction: column;
      max-width: 450px;
    }

    .sendbox {
      margin-left: $gutter;
      box-shadow: 0 10px 22px 0 rgba(0, 0, 0, 0.1);

      @include phablet {
        margin-left: 0;
        margin-top: 40px;
      }
    }
  }

  &.flip {
    .container {
      flex-direction: row-reverse;

      @include phone {
        flex-direction: column;
      }

      .sendbox {
        margin-left: 0;
        margin-right: $gutter;

        @include phone {
          margin-right: 0;
        }
      }
    }
  }

  &.background {
    background: url('/static/images/frontpage_corner.png') no-repeat bottom right;
    background-size: contain;
  }
}
</style>
