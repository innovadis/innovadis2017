<template lang="pug">
  transition(name='modal')
    .modal-mask(@click='click', @touchstart='click', v-if='model')
      .modal-wrapper
        .modal-container
          slot
</template>

<script>
export default {
  props: {
    value: Boolean
  },

  data () {
    return {
      model: this.value
    }
  },

  methods: {
    click (e) {
      if ((new Array(...e.target.classList)).includes('modal-wrapper')) {
        this.model = false

        this.$emit('close')
      }
    }
  },

  watch: {
    model(v) {
      this.$emit('input', v)
    },

    value(v) {
      this.model = v
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: all 0.5s ease-out;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  // height: 75vh;
  // max-height: 600px;
  // overflow: hidden;
  width: 1200px;
  max-width: 90vw;
  margin: 0px auto;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.5s ease-out;
  font-family: Helvetica, Arial, sans-serif;
  border-radius: $border-radius;

  @include phone {
    margin: $gutter/2;
    max-width: calc(100vw - #{$gutter});
  }
}
</style>
