<template lang="pug">
.case
  socialhof(v-if='name === "socialhof"')
  apollo(v-if='name === "apollo-vredestein"')
  dbi(v-if='name === "dbi-container-service"')
  comfoor(v-if='name === "comfoor"')
  shv(v-if='name === "webportaal-shv"')

</template>

<script>
export default {
  components: {
    Socialhof: require('./Socialhof'),
    Apollo: require('./Apollo'),
    Comfoor: require('./Comfoor'),
    Dbi: require('./Dbi'),
    Shv: require('./Shv')
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
