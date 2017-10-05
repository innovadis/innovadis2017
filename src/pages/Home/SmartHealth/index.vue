<template lang="pug">
.page-smarthealth
  intro

  image-block

  vision

  inno-case

  send-box-with-slot.margin-top(flip, subject='Reactie op Smart Health pagina')
    h3 Wij helpen de zorg graag vooruit.
    p TODO Have seen an explosion in the popularity of herbs and alternative medicine in general, as people increasingly seek miracle cures that can help them when their doctor or regular pharmacy cannot. The connection to traditional communities also appeals to those who want to go back to a more spiritual

  simple-feed(title='Laatste nieuws in de zorg', feedGetter='contentAll')
</template>

<script>
export default {
  components: {
    Intro: require('./Intro'),
    ImageBlock: require('./ImageBlock'),
    Vision: require('./Vision'),
    InnoCase: require('./Case'),
    SendBoxWithSlot: require('src/components/SendBox/SendBoxWithSlot'),
    SimpleFeed: require('src/components/Feed/Simple')
  },

  head: {
    title: {
      inner: 'Smart Health'
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.margin-top {
  margin-top: 160px;
}

</style>
