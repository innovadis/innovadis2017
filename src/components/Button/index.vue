<template lang="pug">
.button(:class=`{
  disabled: disabled,
  yellow: yellow,
  blue: blue,
  primary: primary,
  inverted: inverted,
  inactive: inactive === true,
  active: inactive === false,
  small: small,
  transparent: transparent,
  nomargin: nomargin,
  "with-icon": !!icon
  }`, @click='click'
  )
    i(v-if='icon', :class='"icons8-" + icon')
    | {{ label }}
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    label: String,
    yellow: Boolean,
    blue: Boolean,
    primary: Boolean,
    inverted: Boolean,
    to: Object,
    inactive: Boolean,
    small: Boolean,
    nomargin: Boolean,
    transparent: Boolean,
    icon: String
  },

  methods: {
    click() {
      if (this.to) {
        this.$router.push(this.to)
      } else {
        this.$emit('click')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';
@import 'src/styles/layout';

.button {
  display: table;
  background: white;
  padding: 20px;
  font-weight: bold;
  font-family: Bitter;
  font-size: 18px;
  margin: 30px $gutter;
  border-radius: $border-radius;
  box-shadow: $shadow;
  transition: all 0.3s ease-in-out, opacity 0.2s ease-in-out;
  cursor: pointer;
  letter-spacing: 0.3px;

  @include phone {
    font-size: 16px;
  }

  i {
    font-size: 36px;
    margin-right: 10px;
  }

  &.with-icon {
    display: flex;
    align-items: center;
  }

  &.nomargin {
    margin: 0;
  }

  &.disabled {
    color: $gray1;
    background: $gray0;
    cursor: not-allowed;

    &:hover {
      color: $gray1 !important;
      background: $gray0 !important;
    }
  }

  &.transparent {
    background: transparent;
    color: white;
  }

  &.yellow {
    background: white;
    color: $inno-yellow;
    text-transform: none;

    i {
      color: $inno-yellow;
    }

    &.inverted {
      background: $inno-yellow;
      color: $gray3;

      &:hover {
        background: $inno-yellow-light;
      }
    }
  }

  &.blue {
    background: white;
    color: $inno-blue;
    text-transform: none;

    i {
      color: $inno-blue;
    }

    &.inverted {
      background: $inno-blue;
      color: $gray3;

      &:hover {
        background: $inno-blue-light;
      }
    }
  }

  &.primary {
    padding: 28px 40px;
    background: $inno-yellow;
    min-width: 130px;

    &:hover {
      box-shadow: $shadow-large;
      color: $gray3;
      background: $inno-yellow-light;
    }
  }

  &.small {
    padding: 16px 24px;
    margin: 0;
  }

  &.inactive {
    color: $gray3;
    box-shadow: none;

    i {
      color: $gray3;
    }

    &:hover {
      color: $gray3;
      box-shadow: $shadow;

      i {
        color: $gray3;
      }
    }
  }

  &.active {
    &:hover { // blue only right now
      color: $inno-blue;
      box-shadow: $shadow;

      i {
        color: $inno-blue;
      }
    }
  }

  &:hover {
    // background: $inno-yellow-light;
    color: $inno-yellow;
    box-shadow: 4px 2px 10px 0 rgba(0, 0, 0, 0.15);

    i {
      color: $inno-yellow;
    }
  }
}
</style>
