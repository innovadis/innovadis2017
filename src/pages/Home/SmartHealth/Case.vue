<template lang="pug">
.case
  .container
    img.phone(src='/static/cases/socialhof/phone.png')
    .text
      h3 Participatie naar een hoger niveau.
      p Have seen an explosion in the popularity of herbs and alternative medicine in general, as people increasingly seek miracle cures that can help them when their doctor or regular pharmacy cannot. The connection to traditional communities also appeals to those who want to go back to a more spiritual
      inno-button(label='Bekijk de case', primary, small)
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.case {
  background: url('https://placehold.it/750x1440') no-repeat center;
  background-size: cover;
  padding: 100px 0;

  .container {
    position: relative;
  }

  .text {
    max-width: 400px;
  }

  .phone {
    position: absolute;
    right: 0;
    top: -60px;
    width: 290px;
  }
}
</style>
