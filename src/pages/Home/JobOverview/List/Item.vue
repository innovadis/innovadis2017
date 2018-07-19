<template lang="pug">
router-link.jobitem.flex.flex-justify-between.flex-align-center(tag='div', :to='{ name: "job", params: { slug } }')
  .flex.flex-column
    h3.title {{ job.title }}
    .job-details.flex.flex-align-center
      i.icons8-clock
      span.hours {{ job.hours }} uur
      i.icons8-fantasy
      span.tech {{ job.tech }}
</template>

<script>
export default {
  props: {
    job: Object
  },

  computed: {
    slug () {
      return this.job.slug
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.jobitem {
  padding: 20px;
  border-radius: $border-radius;
  border-bottom: 1px solid $gray1;
  transition: background 0.2s ease-in-out;
  cursor: pointer;
  box-shadow: $shadow;
  transition: $transition;
  margin-bottom: $gutter;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    box-shadow: $shadow-large;
  }

  .job-details {
    .hours {
      max-width: 50%;
      white-space: normal;
    }
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
