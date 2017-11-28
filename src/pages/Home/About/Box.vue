<template lang="pug">
.box
  .image(:style='{ background: "url(" + imageUrl + ")" }')
  .flex.flex-justify-center
    orb(:size='100', :initialX='-70', :initialY='-70', :shadow='false')
  .text
    h4 {{ title }}
    p {{ text }}

</template>

<script>
export default {
  components: {
    Orb: require('src/components/Orb')
  },

  props: {
    title: String,
    text: String,
    imageUrl: String
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.box {
  box-shadow: $shadow-large;

  .image {
    border-top-right-radius: $border-radius;
    border-top-left-radius: $border-radius;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    width: 100%;
    height: 275px;
  }

  .text {
    text-align: center;
    background: white;
    padding: 70px $gutter $gutter $gutter;
    border-bottom-right-radius: $border-radius;
    border-bottom-left-radius: $border-radius;
  }
}
</style>
