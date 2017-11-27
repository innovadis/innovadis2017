<template lang="pug">
.intro.pt.flex.flex-justify-center.flex-align-center.flex-column
  .container
    h1.dot Industrie en de mogelijkheden van technologie
    p.intro De ontwikkelingen binnen de industrie gaan snel, zeker op het gebied van technologie en IT. Wat begon met een webshop of portaal, is nu een slimme online omgevingen waar bedrijven communiceren met afnemers, eindklanten, toeleveranciers en partners.
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

div.intro {
  @include phablet {
    padding-top: 100px;
  }

  @include phone {
    padding-top: 40px;
  }

  p {
    margin-right: 100px;
  }
}
</style>
