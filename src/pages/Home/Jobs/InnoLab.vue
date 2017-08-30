<template lang="pug">
.inno-lab
  .container
    .padded-container
      h2.dot InnoLab
      p Eternity bands are also known as the wedding bands. They are lined with diamonds and look like precious gemstones in a circle. The circular loop of diamonds signifies eternal and unending love. This sentiment is what makes the eternity band a perfect gift for couples on special occasions, such as anniversaries, childbirth or anything that makes a difference to their life.
      inno-button-alternate(yellow, label='Alles over het InnoLab')
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.inno-lab {
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: url('https://placehold.it/600x1440') no-repeat center;
  background-size: cover;
}

</style>
