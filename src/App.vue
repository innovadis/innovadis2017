<template lang="pug">
#app
  router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import 'src/styles/layout';
@import 'src/styles/transition';
@import 'src/styles/fonts';

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
