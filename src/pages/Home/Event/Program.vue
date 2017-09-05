<template lang="pug">
.program
  .head
    .row
      .time Tijd
      .title Onderwerp

  .body
    .row
      .time 09:00 - 10:00
      .flex.flex-column
        .title Ontvangst
        .sub
    .row
      .time 10:00 - 12:00
      .flex.flex-column
        .title Peter Langela van Novel-T
        .sub Smart Industry Landscape
    .row
      .time 12:00 - 13:00
      .flex.flex-column
        .title Prof. Dr. Willem Vermeend
        .sub Smart Industry; waar liggen de kansen (Keynote)
    .row
      .time 13:00 - 15:00
      .flex.flex-column
        .title Dr. Jos Wesselink - Vredestein
        .sub Eternity bands are a classy and stylish innovation to storm the market. These are often gifted for a marriage anniversary or at the time of giving birth to a child. These eternity bands need no occasion to be gifted and can be given as gifts whenever one wishes to.
    .row
      .time 15:00 - 17:00
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

    @include phone {
      display: none;
    }

    * {
      color: $inno-blue;
      font-weight: bold;
    }
  }

  .row {
    padding: 20px;
    display: flex;
    border-bottom: 1px solid $gray1;

    @include phone {
      flex-direction: column-reverse;
    }

    .time {
      min-width: 250px;
      white-space: nowrap;

      @include phone {
        margin-top: 20px;
      }
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
