<template lang="pug">
.main(:class='{ "open": $store.state.phoneMenuOpen }')
  inno-header

  .page-wrapper
    transition(name='slidetop', mode='out-in')
      router-view

  inno-footer
</template>

<script>
export default {
  components: {
    InnoHeader: require('src/components/Header'),
    InnoFooter: require('src/components/Footer')
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";
@import "src/styles/layout";

.main {
  .page-wrapper {
    padding-top: $headerHeight;
    transform-origin: top;
    transition: all 0.3s ease-in-out, height 1s ease-in-out;

    @include phablet {
      padding-top: $headerHeight - 25px;
    }
  }

  &.open {
    .page-wrapper {
      display: none;
    }

    footer {
      display: none;
    }
  }
}
</style>
