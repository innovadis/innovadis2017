<template lang="pug">
.image-block
  .container
    .text
      p Met onze kennis en ervaring van de afgelopen twintig jaar en de huidige technologische ontwikkelingen, hebben wij alles in handen om hier een bijdrage aan te leveren. Dat noemen wij Smart Health.
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.image-block {
  height: 750px;
  width: 100vw;
  background: url('https://placehold.it/750x1440') no-repeat center;
  background-size: cover;
  position: relative;

  .text {
    max-width: 400px;
    position: absolute;
    bottom: $gutter;

    p {
      color: white;
    }
  }
}
</style>
