<template lang="pug">
.page-front
  hero

  simple-feed

  solutions

  lets-talk
</template>

<script>
export default {
  components: {
    Hero: require('./Hero'),
    SimpleFeed: require('src/components/Feed/Simple'),
    Solutions: require('./Solutions'),
    LetsTalk: require('./LetsTalk')
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

</style>
