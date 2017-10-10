<template lang="pug">
.page-smarthealth
  intro

  image-block

  vision

  inno-case

  send-box-with-slot.margin-top(flip, subject='Reactie op Smart Health pagina')
    h2.dot Wij helpen de zorg graag vooruit
    //- p Wij vinden het onze plicht hier een bijdrage aan te leveren. Heeft uw organisatie vragen of plannen op dit gebied, neem dan contact op. Wij denken graag mee over mogelijkheden en haalbaarheid en zijn bereid mee te investeren in pilotprojecten.

  simple-feed(
    title='Onze wereld in de Health',
    feedGetter='contentTagSmartHealth',
    dark
    )
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
