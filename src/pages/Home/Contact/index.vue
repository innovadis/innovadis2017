<template lang="pug">
.page-contact
  hero

  support

  .flex.flex-justify-center.container
    send-box(
      grow,
      title='Stuur ons een bericht',
      text='Laat hieronder je gegevens achter en we berichten of bellen je terug.'
      )
</template>

<script>
export default {
  components: {
    Hero: require('./Hero'),
    Support: require('./Support'),
    SendBox: require('src/components/SendBox')
  },

  head: {
    title: {
      inner: 'Contact'
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.page-contact {
  padding-bottom: 100px;
}
</style>
