<template lang="pug">
.program
  .head
    .row
      span Tijd
      span Onderwerp

  .body
    .row
      span 09:00 - 10:00
      .flex.flex-column
        .title Ontvangst
        .sub
    .row
      span 10:00 - 12:00
      .flex.flex-column
        .title Peter Langela van Novel-T
        .sub Smart Industry Landscape
    .row
      span 12:00 - 13:00
      .flex.flex-column
        .title Prof. Dr. Willem Vermeend
        .sub Smart Industry; waar liggen de kansen (Keynote)
    .row
      span 13:00 - 15:00
      .flex.flex-column
        .title Dr. Jos Wesselink - Vredestein
        .sub Eternity bands are a classy and stylish innovation to storm the market. These are often gifted for a marriage anniversary or at the time of giving birth to a child. These eternity bands need no occasion to be gifted and can be given as gifts whenever one wishes to.
    .row
      span 15:00 - 17:00
      .flex.flex-column
        .title Netwerk Borrel
        .sub
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.program {
  .head {
    border-bottom: 1px solid $gray1;

    span {
      color: $inno-blue;
      font-weight: bold;
    }
  }

  .row {
    padding: 20px;
    display: flex;
    border-bottom: 1px solid $gray1;

    span:first-of-type {
      min-width: 250px;
      white-space: nowrap;
    }

    &:last-child {
      border-bottom: none;
    }

    .title {
      font-weight: bold;
    }

    .sub {
      color: $gray2;
    }
  }
}
</style>
