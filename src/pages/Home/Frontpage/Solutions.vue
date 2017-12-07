<template lang="pug">
.solutions
  .container.text-center
    h2 Innovadis,
    h2.dot niet zomaar een IT-bedrijf
    p Wij verbeteren de wereld met innovatieve IT-oplossingen waar onze opdrachtgevers en hun klanten blij van worden. We lopen voorop als het gaat om kennis en werken in enthousiaste teams samen met onze opdrachtgevers aan succes en een duurzame relatie.

  .image
    img(src='/static/images/cover/meeting2.jpg')
    inno-button(label='De Innovadis manier', yellow, inverted, :to='{ name: "about" }')
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
      width: $container-width;

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
