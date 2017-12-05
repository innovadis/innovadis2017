<template lang="pug">
.page-smarthealth
  intro

  image-block(
    text='Met onze kennis en ervaring van de afgelopen twintig jaar en de huidige technologische ontwikkelingen, hebben wij alles in handen om hier een bijdrage aan te leveren. Dat noemen wij Smart Health.'
    imageUrl='https://placehold.it/300/300?text=image'
    )

  vision

  inno-case

  send-box-with-slot.margin-top(flip, subject='Reactie op Smart Health pagina')
    h2.dot Wij helpen de zorg graag vooruit

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
