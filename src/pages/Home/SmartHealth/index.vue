<template lang="pug">
.page-smarthealth
  intro

  image-block

  vision

  inno-case
</template>

<script>
export default {
  components: {
    Intro: require('./Intro'),
    ImageBlock: require('./ImageBlock'),
    Vision: require('./Vision'),
    InnoCase: require('./Case')
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

</style>
