<template lang="pug">
.inno-lab.flex.flex-column.flex-align-center
  .image
    img(src='/static/images/cover/innolab.jpg')

  .container.text-center.pt
    h2.dot InnoLab
    p Het begint al op jonge leeftijd. Wanneer je je bewuster wordt van je omgeving en je opeens allerlei vragen begint te stellen. Alles in de wereld om je heen is een ontdekking en je nieuwsgierigheid is niet te stillen. Elk detail wordt ter discussie gesteld, ieder voorwerp behoeft een reden. Het durven bevragen van de waarheden die je zijn opgelegd, maakt dat je een sterker bewustzijn creëert en zo ontdek je de verbanden.
    p Als een vooruitstrevende technische organisatie geloven wij, naast de kracht van de techniek vooral in de kracht van de mens. Met een nieuwsgierigheid om de juiste vragen te stellen creëren wij systemen en leggen we verbindingen die het leven gemakkelijker maken. Wij vinden dat techniek en internet op die manier bijdragen aan een betere wereld. In het InnoLab begint met onze nieuwsgierigheid de ontwikkeling.

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.inno-lab {
  padding-bottom: 100px;

  img {
    border-radius: $border-radius;
    width: $container-width;

    @include phone {
      width: 100vw;
      border-radius: 0;
    }
  }
}
</style>
