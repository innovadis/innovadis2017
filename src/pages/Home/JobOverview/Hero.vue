<template lang="pug">
.hero.flex.flex-align-center.flex-justify-center.flex-column
  h1.dot Innovadiër worden
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.hero {
  background-image: url('/static/images/jobs_hero.png');
  background-position: 0 -100px;
  position: relative;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent 100%);
  }

  h1 {
    color: white;
    max-width: 600px;
    text-align: center;
    z-index: 1;
  }
}
</style>
