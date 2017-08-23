<template lang="pug">
div
  inno-header

  .page-wrapper(:class='{ "open": $store.state.phoneMenuOpen }', @click='closePhoneMenu')
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

$headerOffset: 100px;

.page-wrapper {
  transform-origin: top;
  transition: all 0.3s ease-in-out, height 1s ease-in-out;
  // background: linear-gradient(180deg, #FFFFFF 0%, #E7E7E7 68.71%, #D0D0D0 100%);
  width: 100%;
  overflow-x: hidden;

  &.open {
    top: 120px;
    border-radius: 5px;
    overflow: hidden;
    height: 95%;
    // left: calc(100vw - 150px);
    transform: scale(0.8) translateX(calc(100vw - 150px));
  }
}
</style>
