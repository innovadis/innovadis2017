<template lang="pug">
.solutions
  .container.text-center
    h2 Oplossingen
    h2.dot die je verder helpen
    p Geen enkele wens is hetzelfde. Daarom bouwen wij samen met jullie een oplossing op maat. Onze visie en ervaring zorgen dat de oplossing state-of-the-art is. Wij houden van ons vak. We zijn hardwerkende specialisten, misschien wel vakidioten, die zich blijven ontwikkelen.

  .image
    img(src='https://placehold.it/850x400')
    inno-button(label='Meer over ons', yellow, inverted)
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';
@import 'src/styles/layout';

.solutions {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px 0 0 0;

  @include phone {
    padding: 60px 20px 0 20px;
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    img {
      border-radius: $border-radius;
      margin-top: 20px;

      @include phone {
        height: 220px;
        width: 100vw;
        border-radius: 0;
      }
    }

    .button {
      height: 0;
      position: relative;
      top: -135px;

      @include phone {
        top: -80px;
        margin: 0;
      }
    }
  }
}
</style>
