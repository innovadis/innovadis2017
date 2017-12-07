<template lang="pug">
.case
  .container
    img.phone(src='/static/cases/socialhof/phone.png')
    .text
      h3 Case Socialhof
      p.hidden-phone Innovadis heeft voor Woon- en zorgcentrum De Vriezenhof het platform Socialhof gerealiseerd. De Vriezenhof wil met het platform een bijdragen leveren aan de interne communicatie door het uitwisselen van informatie leuk en gemakkelijk te maken. Het platform ondersteunt en faciliteert de medewerkers, de bewoners en de familie van de bewoners.
      inno-button(label='Bekijk de case', primary, small, :to='{ name: "case", params: { name: "socialhof" } }')
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.case {
  background: url("/static/images/smarthealth_case.png") no-repeat center;
  background-size: cover;
  padding: 100px 0;

  .container {
    position: relative;
  }

  .text {
    max-width: 300px;

    h3,
    p {
      color: white;
    }

    h3 {
      @include phone {
        margin-bottom: 40px;
      }
    }
  }

  .phone {
    position: absolute;
    right: 0;
    top: -60px;
    width: 290px;

    @include phone {
      top: -140px;
      right: -50px;
      width: 200px;
    }
  }
}
</style>
