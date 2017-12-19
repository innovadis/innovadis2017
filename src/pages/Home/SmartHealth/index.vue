<template lang="pug">
.page-smarthealth
  intro

  image-block(
    text='Met onze kennis en ervaring van de afgelopen twintig jaar en de huidige technologische ontwikkelingen, hebben wij alles in handen om hier een bijdrage aan te leveren. Dat noemen wij Smart Health.'
    imageUrl='/static/images/smarthealth_hero.jpg'
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

  data() {
    return {
      title: 'Smart Health',
      description: 'Wij geloven dat we door slim toepassen van moderne technologie de zorg kunnen verbeteren.  Wij helpen de zorg graag vooruit.'
    }
  },

  head: {
    title () {
      return {
        inner: this.title
      }
    },
    meta () {
      return [
        { name: 'description', content: this.description },

        // Google+
        { itemprop: 'name', content: this.title },
        { itemprop: 'description', content: this.description },

        // Twitter
        { name: 'twitter:title', content: this.title },
        { name: 'twitter:description', content: this.description },

        // Facebook
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.margin-top {
  margin-top: 160px;
}
</style>
