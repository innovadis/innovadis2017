<template lang="pug">
.page-contact
  hero

  support

  send-box-with-slot(
    backgroundUrl='/static/images/contact_corner.png',
    text='Laat hieronder uw gegevens achter en we berichten of bellen u terug.',
    to='support@innovadis.com'
    )
    h2.dot Stuur ons een bericht
    p Laat hiernaast je gegevens achter en we berichten of bellen je terug.
</template>

<script>
export default {
  components: {
    Hero: require('./Hero'),
    Support: require('./Support'),
    SendBoxWithSlot: require('src/components/SendBox/SendBoxWithSlot')
  },

  data() {
    return {
      title: 'Contact',
      description: 'Als echte IT-professionals kunnen we alles automatiseren, maar uiteindelijk vinden ook wij persoonlijk contact leuker. ✓ 053-8507500 ✓ info@innovadis.com'
    }
  },

  head: {
    title: {
      inner: 'Contact' // TODO dynamic from data
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
@import 'src/styles/variables';

</style>
