<template lang="pug">
.joblist
  .container
    h2.dot Bekijk de vacatures
    p Zoals de brouwer van zijn bier houdt, zo houden onze ontwerpers van hun getekende vormen en onze ontwikkelaars van hun geschreven code. Onze oplossingen zijn niet vanzelfsprekend. Ze ontstaan door onze passie om de wereld te verbeteren met creativiteit en techniek. Wij staan altijd open voor nieuwe enthousiastelingen in ons team, ook als we geen vacatures open hebben staan. Bekijk onderstaande vacatures/functieprofielen en wie weet maak jij binnenkort deel uit van ons gepassioneerde team. Bel of mail voor een vrijblijvend oriënterend gesprek.

    //- Niet nuttig met zo weinig vacatures, dus niet laten zien
    //- .flex
      multiselect(
        v-if='jobs.length > 0 && jobTypeOptions.length > 1',
        v-model='selectedJobType',
        :options='jobTypeOptions'
        placeholder='Selecteer type vacature',
        select-label='',
        deselect-label='',
        selected-label=''
        )

    .list.flex.flex-column
      //- TODO transitions not yet working
      transition-group(name='list', tag='div')
        job-item(v-for='(job, i) in jobs', :key='i', :job='job')

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
      selectedJobType: null
    }
  },

  computed: {
    jobTypeOptions() {
      return [...new Set(this.jobs.map(x => x.jobType))] // new Set is for deduping
    },

    jobs() {
      return this.$store.state.feed.jobs.filter(x => !this.selectedJobType || x.jobType === this.selectedJobType)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.joblist {
  padding: 100px 0;

  .multiselect {
    max-width: 300px; // margin: 20px;
  }

  .list {
    margin-top: 20px;
  }
}
</style>

<style lang="scss">
.joblist {
  .multiselect__option,
  .multiselect__input {
    text-transform: capitalize;
  }
}
</style>
