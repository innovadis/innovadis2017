<template lang="pug">
.program
  .head
    .row
      .time Tijd
      .title Onderwerp

  .body
    .row(v-for='d in data')
      .time {{ d.time }}
      .flex.flex-column
        .title {{ d.subject }}
        .sub {{ d.subtext }}
</template>

<script>
export default {
  props: {
    data: Array
  }
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
