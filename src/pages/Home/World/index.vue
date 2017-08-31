<template lang="pug">
.page-world
  complex-feed
</template>

<script>
export default {
  components: {
    ComplexFeed: require('src/components/Feed/Complex')
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

</style>
