<template lang="pug">
.item(
  :style='style',
  :class='{ large: large }'
  )
  .text
    h3.title {{ title }}
    .source {{ source }}
</template>

<script>
export default {
  props: {
    source: String,
    title: String,
    imageUrl: String,
    large: Boolean
  },

  computed: {
    style() {
      return {
        'background-image': `linear-gradient(to top, rgba(0, 0, 0, 0.5) 10%, transparent), url(${this.imageUrl})`
        // height: window.innerWidth > 600 ? (this.large ? 410 : 155) + 'px' : 200 + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';
@import 'src/styles/layout';

.item {
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  height: 235px;
  width: 415px - $gutter*2;
  border-radius: 5px;
  position: relative;
  padding: $gutter;
  margin: 10px;
  break-inside: avoid;

  &.large {
    height: 570px;
  }

  @include phablet {
    margin: 20px;
    height: 200px !important;
    width: 100%;
  }

  .text {
    position: absolute;
    bottom: 20px;
    left: $gutter;
    text-align: left;
    width: calc(100% - #{$gutter*2});

    $bottomColor: rgba(255, 255, 255, 0.7);

    @include phablet {
      left: $gutter/2;
      width: calc(100% - #{$gutter});
    }

    .title {
      color: white;
      border-bottom: 1px solid $bottomColor;
      padding-bottom: 10px;
      margin: 0;
    }

    .source {
      color: $bottomColor;
      margin-top: 10px;
    }
  }
}
</style>
