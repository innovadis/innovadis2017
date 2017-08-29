<template lang="pug">
.hero.flex.flex-align-center.flex-justify-end.flex-column
  h1.dot Contact
  navigate
</template>

<script>
export default {
  components: {
    Navigate: require('src/components/Navigate')
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.hero {
  height: 700px;
  background: url('https://placehold.it/720x1440') no-repeat center;
  background-size: cover;

  h1 {
    color: white;
  }
}

</style>
