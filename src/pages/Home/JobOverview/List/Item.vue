<template lang="pug">
router-link.jobitem.flex.flex-justify-between.flex-align-center(tag='div', :to='{ name: "job", params: { id: 123 } }')
  .flex.flex-column
    h3.title {{ job.title }}
    .job-details.flex.flex-align-center
      i.icons8-clock
      span.hours {{ job.hours }} uur
      i.icons8-fantasy
      span.tech {{ job.tech }}

  inno-button-alternate(yellow)
</template>

<script>
export default {
  props: {
    job: Object
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.jobitem {
  padding: 20px 20px 20px 0;
  border-bottom: 1px solid $gray1;
  transition: background 0.2s ease-in-out;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: $gray0;
  }

  .job-details {
    .tech {
      max-width: calc(100vw - 250px);
    }
  }

  .title {
    color: $inno-blue;
    margin-bottom: 20px;
  }
}
</style>
