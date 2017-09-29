<template lang="pug">
.page-world
  complex-feed
</template>

<script>
export default {
  components: {
    ComplexFeed: require('src/components/Feed/Complex')
  },

  head: {
    title: {
      inner: 'Onze wereld'
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';
</style>
