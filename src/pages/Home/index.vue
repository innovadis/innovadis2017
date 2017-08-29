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
    transition: all 0.3s ease-in-out, height 1s ease-in-out;
    // background: linear-gradient(180deg, #FFFFFF 0%, #E7E7E7 68.71%, #D0D0D0 100%);
  }

  &.open {
    overflow: hidden;

    .page-wrapper {
      margin-top: 50px;
      transform: translateX(calc(100vw + 50px));
      filter: blur(5px);
    }
  }
}
</style>
