<template lang="pug">
.joblist
  .container
    h2.dot Bekijk de vacatures
    p Eternity bands are also known as the wedding bands. They are lined with diamonds and look like precious gemstones in a circle. The circular loop of diamonds signifies eternal and unending love. This sentiment is what makes the eternity band a perfect gift for couples on special occasions, such as anniversaries, childbirth or anything that makes a difference to their life.

    .flex
      multiselect(
        v-model='selectedJobType',
        :options='jobTypeOptions'
        placeholder='Selecteer type vacature',
        select-label='',
        deselect-label='',
        selected-label=''
        )

    .list.flex.flex-column
      job-item(v-for='n in 5')

</template>

<script>
import Multiselect from 'src/../node_modules/vue-multiselect/src/Multiselect'

export default {
  components: {
    Multiselect,
    JobItem: require('./Item')
  },

  data() {
    return {
      selectedJobType: null,
      jobTypeOptions: ['Developer', 'Designer', 'Stage en afstuderen', 'Product owner']
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.joblist {
  padding: 100px 0;

  .multiselect {
    max-width: 300px;
    // margin: 20px;
  }

  .list {
    margin-top: 20px;
  }
}
</style>
