<template lang="pug">
#app
  router-view
</template>

<script>
export default {
  name: 'app',

  head: {
    meta() {
      return [
        { property: 'og:url', content: window.location.href }
      ]
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/icons/scss/styles';
@import 'src/styles/layout';
@import 'src/styles/transition';
@import 'src/styles/fonts';
@import 'src/styles/multiselect';
@import 'src/styles/hero-image';
@import 'src/styles/scrollbar';
@import 'src/styles/content-body';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body,
html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>
