<template lang="pug">
.support
  .container
    h2.dot Support en ondersteuning
    .flex.flex-justify-between.flex-column-phone.flex-align-center-phone
      .box.flex.flex-column
        p Telefonische ondersteuning tijdens kantoortijden (8.30 - 17.00 uur).
        a.flex.flex-align-center.yellow(href='tel:+31538507503')
          i.icons8-phone
          | +31 (0)53 850 7503
      .box.flex.flex-column
        p Meld 24 uur per dag online problemen of storingen en blijf op de hoogte van de status van uw meldingen.
        inno-button(blue, small, label='Contact via ons supportportaal', href='https://innovadissupport.zendesk.com')
</template>

<script>
export default {
  components: {
    InnoButton: require('src/components/Button')
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.support {
  padding: 100px 0;

  @include phone {
    padding: $gutter 0;
  }

  .box {
    width: 45%;

    @include phone {
      width: auto;
    }
  }

  .yellow {
    &,
    i {
      color: $inno-yellow;
    }

    i {
      font-size: 28px;
      margin-right: 8px;
    }
  }
}
</style>
