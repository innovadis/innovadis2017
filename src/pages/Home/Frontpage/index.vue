<template lang="pug">
.page-front
  hero

  simple-feed(dark, title='Innovadis in de wereld', feedGetter='contentFrontpage')

  solutions

  send-box-with-slot(background)
    h2 Persoonlijk contact?

</template>

<script>
export default {
  components: {
    Hero: require('./Hero'),
    SimpleFeed: require('src/components/Feed/Simple'),
    Solutions: require('./Solutions'),
    SendBoxWithSlot: require('src/components/SendBox/SendBoxWithSlot')

    // LetsTalk: require('./LetsTalk')
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

</style>
