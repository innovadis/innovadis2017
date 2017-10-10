<template lang="pug">
.page-contact
  hero

  support

  .flex.flex-justify-center.container
    send-box-with-slot(
      flip,
      text='Laat hieronder uw gegevens achter en we berichten of bellen u terug.',
      to='support@innovadis.com'
      )
      h2.dot Stuur ons een bericht
</template>

<script>
export default {
  components: {
    Hero: require('./Hero'),
    Support: require('./Support'),
    SendBoxWithSlot: require('src/components/SendBox/SendBoxWithSlot')
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
