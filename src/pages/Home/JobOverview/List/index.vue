<template lang="pug">
.joblist
  .container
    h2.dot Bekijk de vacatures
    p Zoals de brouwer van zijn bier houdt, zo houden onze ontwerpers van hun getekende vormen en onze ontwikkelaars van hun geschreven code. Onze oplossingen zijn niet vanzelfsprekend. Ze ontstaan door onze passie om de wereld te verbeteren met creativiteit en techniek.  Bekijk onze vacatures en wie weet maak jij binnenkort deel uit van ons gepassioneerde team. Bel of mail voor een vrijblijvend oriënterend gesprek.

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
      job-item(v-for='n in 5', :key='n')

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
