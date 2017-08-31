<template lang="pug">
  transition(name='modal')
    .modal-mask(@click='click')
      .modal-wrapper
        .modal-container
          slot
          //- (@click="$emit('close')")
</template>

<script>
export default {
  methods: {
    click(e) {
      if ((new Array(...e.path[0].classList)).includes('modal-wrapper')) { // TODO this prob doesnt work on IE and safari maybe
        this.$emit('close')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  height: 75vh;
  max-height: 600px;
  width: 1200px;
  margin: 0px auto;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  border-radius: $border-radius;
  overflow: hidden;
}
</style>
