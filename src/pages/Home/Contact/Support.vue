<template lang="pug">
.support
  .container
    h2.dot Support en ondersteuning
    .flex.flex-justify-between
      .box.flex.flex-column
        p Telefonische ondersteuning tijdens kantoortijden (8.30 - 17.00 uur).
        a.yellow(href='tel:+31538507503') +31 (0)53 850 7503
      .box.flex.flex-column
        p Meld 24 uur per dag online problemen of storingen en blijf op de hoogte van de status van uw meldingen.
        button-alternate(yellow, label='Conmtact via ons supportportaal', href='https://innovadissupport.zendesk.com')
</template>

<script>
export default {
  components: {
    ButtonAlternate: require('src/components/ButtonAlternate')
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.support {
  padding: 100px 0;

  .box {
    width: 45%;
  }

  .yellow {
    color: $inno-yellow;
  }
}

</style>
