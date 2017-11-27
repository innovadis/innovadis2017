<template lang="pug">
.select-box
  .options
    inno-button(:label='item.label', :icon='item.icon' blue, :inactive='selectedOption !== i', @click='selectedOption = i', v-for='(item, i) in items', :key='"selectbox-button" + i')

  transition(name='fade', mode='out-in')
    .box(v-if='selectedOption === i', :key='"selectbox" + i', v-for='(item, i) in items')
      p {{ item.text }}
</template>

<script>
export default {
  props: {
    items: Array
  },

  data () {
    return {
      selectedOption: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.select-box {
  display: flex;

  @include phone {
    flex-direction: column;
  }

  .box {
    max-width: 38%;
    margin-left: $gutter;
    display: flex;
    align-items: center;

    @include phone {
      max-width: initial;
      margin: 0;
    }
  }
}
</style>
