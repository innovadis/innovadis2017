<template lang="pug">
div
  inno-header
  .page-wrapper(:class='{ "open": $store.state.phoneMenuOpen }', @click='closePhoneMenu')
    router-view
</template>

<script>
export default {
  components: {
    InnoHeader: require('src/components/Header')
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
  position: absolute;
  left: 0;
  top: 0;
  height: calc(100% - #{$headerOffset});

  &.open {
    top: 120px;
    border-radius: 5px;
    overflow: hidden;
    height: 95%;
    left: calc(100vw - 150px);
    transform: scale(0.8);
  }
}
</style>
