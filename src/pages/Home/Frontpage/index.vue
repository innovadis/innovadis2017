<template lang="pug">
.page-front
  hero

  simple-feed(dark, title='Innovadis in de wereld', feedGetter='contentFrontpage')

  solutions

  send-box-with-slot(
    backgroundUrl='/static/images/frontpage_corner.png'
    )
    h2.dot Laat een bericht achter

</template>

<script>
export default {
  components: {
    Hero: require('./Hero'),
    SimpleFeed: require('src/components/Feed/Simple'),
    Solutions: require('./Solutions'),
    SendBoxWithSlot: require('src/components/SendBox/SendBoxWithSlot')

    // LetsTalk: require('./LetsTalk')
  },

  data() {
    return {
      title: 'Innovadis',
      description: 'Onze oplossingen zijn niet vanzelfsprekend. Ze ontstaan door onze passie om de wereld te verbeteren met creativiteit en techniek.'
    }
  },

  head: {
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
</style>
