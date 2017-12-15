<template lang="pug">
.page-world
  complex-feed
</template>

<script>
export default {
  components: {
    ComplexFeed: require('src/components/Feed/Complex')
  },

  data() {
    return {
      title: 'Onze Wereld',
      description: 'Innovadis combineert kennis van techniek met kennis van de wereld van haar opdrachtgevers en legt verbindingen tussen techniek en bedrijfsprocessen.'
    }
  },

  head: {
    title: {
      inner: 'Onze Wereld' // TODO dynamic from data
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
