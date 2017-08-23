<template lang="pug">
.field(:class='{ required: required }')
  input(
    v-if='type === "text"',
    type='text',
    :placeholder='placeholder',
    v-model='model'
    )

  input(
    v-if='type === "email"',
    type='email',
    :placeholder='placeholder',
    v-model='model'
    )

  textarea(
    v-if='type === "textarea"',
    :placeholder='placeholder',
    :rows='rows',
    v-model='model'
    )

  transition(name='fade')
    .valid(v-if='valid')
      .fa.fa-check
</template>

<script>
export default {
  props: {
    value: String,
    type: String,
    placeholder: String,
    required: Boolean,
    rows: {
      type: Number,
      default: 3
    },
    valid: Boolean
  },

  data() {
    return {
      model: this.value
    }
  },

  watch: {
    model(v) {
      this.$emit('input', v)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.field {
  position: relative;

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  &.required {
    &:after {
      content: '*';
      position: absolute;
      right: 0;
      top: 15px;
      color: #0035DB;
      font-weight: bold;
    }
  }

  textarea,
  input {
    border: none;
    border-bottom: 1px solid $gray1;
    width: 100%;
    padding: 10px 2px;
    font-size: 18px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: $gray2;
    }
  }

  textarea {
    resize: none;
  }

  .valid {
    position: absolute;
    right: 0;
    top: 4px;

    .fa {
      font-size: 18px;
      border: 2px solid $inno-yellow;
      color: $inno-yellow;
      border-radius: 50%;
      padding: 5px;
    }
  }
}
</style>
