<template lang="pug">
.page-jobs
  hero

  job-list

  inno-lab

  simple-feed(
    title='Een kijkje in de keuken',
    feedGetter='contentInstagram',
    dark
    )

  send-box-with-slot.pt(flip, subject='Reactie op vacture overzicht pagina', to='sollicitatie@innovadis.com')
    h2 Staat je baan er niet tussen?

</template>

<script>
export default {
  components: {
    Hero: require('./Hero'),
    JobList: require('./List'),
    InnoLab: require('./InnoLab'),
    SimpleFeed: require('src/components/Feed/Simple'),
    SendBoxWithSlot: require('src/components/SendBox/SendBoxWithSlot')
  },

  data() {
    return {
      title: 'Werken Bij',
      description: 'Innovadiër worden? Bekijk onze vacatures en wie weet maak jij binnenkort deel uit van ons gepassioneerde team.'
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
@import 'src/styles/variables';
</style>
