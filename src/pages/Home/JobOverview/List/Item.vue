<template lang="pug">
router-link.jobitem.flex.flex-justify-between.flex-align-center(tag='div', :to='{ name: "job", params: { id: 123 } }')
  .flex.flex-column
    h3.title Senior Front-end developer
    .details.flex.flex-align-center
      .fa.fa-clock-o
      span.hours 40 uur
      .fa.fa-laptop
      span.tech Vue.JS, HTML, CSS, JavaScript

  inno-button-alternate(yellow)
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.jobitem {
  padding: 20px 20px 20px 0;
  border-bottom: 1px solid $gray1;
  transition: background 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: $gray0;
  }

  .title {
    color: $inno-blue;
    margin-bottom: 20px;
  }

  .details {
    span,
    .fa {
      color: $gray2;
    }

    .hours {
      margin: 0 20px 0 10px;
    }

    .tech {
      margin-left: 10px;
    }

    .fa {
      font-size: 32px;
    }
  }
}
</style>
