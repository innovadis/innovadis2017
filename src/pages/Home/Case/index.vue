<template lang="pug">
.case
  socialhof(v-if='name === "socialhof"')
</template>

<script>
export default {
  components: {
    Socialhof: require('./Socialhof')
  },

  computed: {
    name() {
      return this.$route.params.name
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

</style>
