<template lang="pug">
.main(:class='{ "open": $store.state.phoneMenuOpen }')
  inno-header

  .page-wrapper(@click='closePhoneMenu')
    transition(name='slidetop', mode='out-in')
      router-view

  inno-footer
</template>

<script>
export default {
  components: {
    InnoHeader: require('src/components/Header'),
    InnoFooter: require('src/components/Footer')
  },

  data() {
    return {
      phoneMenuOpen: false
    }
  },

  methods: {
    closePhoneMenu() {
      this.$store.commit('setPhoneMenuState', false)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';
@import 'src/styles/layout';

.main {
  .page-wrapper {
    padding-top: $headerHeight;
    transform-origin: top;
    transition: all 0.3s ease-in-out, height 1s ease-in-out; // background: linear-gradient(180deg, #FFFFFF 0%, #E7E7E7 68.71%, #D0D0D0 100%);

    @include phablet {
      padding-top: $headerHeight - 25px;
    }
  }

  &.open {
    overflow: hidden;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);

    .page-wrapper {
      overflow: hidden;
      border-radius: $border-radius;
      // box-shadow: -8px 0px 10px $gray1;
      // filter: blur(2px);

      @include phone {
        transform: translateX(100vw);
      }

      @include tablet {
        transform: translateX(calc(500px));
      }
    }
  }
}
</style>
