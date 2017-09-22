<template lang="pug">
.share.flex.flex-align-center.flex-column
  b Deel dit bericht.
  .flex.flex-justify-center
    .button.facebook Facebook
    .button.linkedin LinkedIn
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.share {
  margin: 80px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid $gray1;
  width: 120%;
  position: relative;
  left: -10%;

  .button {
    margin: 10px 10px;
    color: white;
    border-radius: 3px;
    padding: 10px 20px;
    font-family: Bitter;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      box-shadow: $shadow;
    }
  }

  .facebook {
    background-color: #33599A;

    &:hover {
      background-color: lighten(#33599A, 5%);
    }
  }

  .linkedin {
    background-color: #0079B8;

    &:hover {
      background-color: lighten(#0079B8, 5%);
    }
  }
}
</style>
