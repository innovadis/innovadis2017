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

  head: {
    title: {
      inner: 'Werken bij'
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';
</style>
