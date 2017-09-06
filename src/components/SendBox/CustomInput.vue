<template lang="pug">
.field(:class='{ required: required, valid: valid }')
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
    v-model='model',
    :class='{ invalid: model && !valid }'
    )

  textarea(
    v-if='type === "textarea"',
    :placeholder='placeholder',
    :rows='rows',
    v-model='model'
    )

  transition(name='fade')
    .valid(v-if='valid')
      i.icons8-ok
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

  &.required:not(.valid) {
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
    transition: border-bottom-color 0.3s ease-in-out;

    &.invalid {
      border-bottom-color: red;
    }

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

    i {
      font-size: 36px;
      color: $inno-yellow;
    }
  }
}
</style>
