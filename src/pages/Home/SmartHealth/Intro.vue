<template lang="pug">
.intro.pt.flex.flex-justify-center.flex-align-center.flex-column
  .container
    h1 Wij verbinden,
    h1.dot in de Smart Health
    p.intro De zorg staat voor grote uitdagingen. De vergrijzing en daarmee toenemende druk op de zorg maakt veranderingen noodzakelijk. Wij geloven dat we door slim toepassen van moderne technologie de zorg kunnen verbeteren. En dan gaat het niet alleen om kostenbesparing maar zeker ook om het verbeteren van de kwaliteit van leven.
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
