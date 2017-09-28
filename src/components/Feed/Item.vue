<template lang="pug">
.flex.flex-justify-center
  .item(
    :style='style',
    :class='{ large: large }',
    @click='openItem'
    )
    .text
      h3.title {{ feedItem.title }}
      .source {{ feedItem.type }}

  news-dialog(
    v-if='dialogDetailOpen',
    @close='dialogDetailOpen = false'
    )
    .dialog-content
      .info
        h3 {{ feedItem.title }}
        .divider
        .flex.flex-justify-between.flex-align-center.flex-column-phablet
          .date Datum:
            span {{ feedItem.created }}
          .likes
            i.icons8-like-filled
            | {{ feedItem.likes }}
        .wrapper
          a(:href='feedItem.url', target='_blank')
            orb(:size='40')
            span Volgen
      .image(:style='{ "background-image": "url(" + feedItem.imageUrl + ")" }')
</template>

<script>
import Moment from 'moment'
import Slug from 'slug'

export default {
  components: {
    Orb: require('src/components/Orb'),
    NewsDialog: require('./Dialog')
  },

  props: {
    item: Object,
    large: Boolean
  },

  data() {
    return {
      dialogDetailOpen: false
    }
  },

  computed: {
    style() {
      return {
        'background-image': `linear-gradient(to top, rgba(0, 0, 0, 0.5) 10%, transparent), url(${this.feedItem.imageUrl})`
        // height: window.innerWidth > 600 ? (this.large ? 410 : 155) + 'px' : 200 + 'px'
      }
    },

    feedItem() {
      let feedItem = {}

      feedItem.created = Moment(this.item.feedCreated).format('DD MMMM YYYY')

      switch (this.item.feedType) {
        case 'instagram':
          feedItem.type = 'Instagram'
          feedItem.imageUrl = this.item.images.standard_resolution.url
          feedItem.title = this.item.caption ? this.item.caption.text : ''
          feedItem.likes = this.item.likes.count
          feedItem.url = this.item.link
          break
        case 'blog':
          feedItem.type = 'Blog'
          feedItem.imageUrl = this.item.heroImage // TODO thumbnail?
          feedItem.title = this.item.title
          break

        case 'news':
          feedItem.type = 'Nieuws'
          feedItem.title = this.item.title
          break

        case 'event':
          feedItem.type = 'Evenement'
          feedItem.imageUrl = this.item.heroImage // TODO thumbnail?
          feedItem.title = this.item.title
          break
        default:
          throw new Error('unknown type')
      }

      return feedItem
    }
  },

  methods: {
    openItem() {
      if (this.item.feedType === 'instagram') {
        this.dialogDetailOpen = true
      } else {
        this.$router.push({
          name: this.item.feedType,
          params: {
            name: Slug(this.item.title)
          }
        })
      }
    }
  },

  watch: {
    dialogDetailOpen(v) {
      this.$emit('dialogOpen', v)
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
  height: 170px;
  width: 415px - $gutter*2;
  border-radius: 5px;
  position: relative;
  padding: $gutter;
  margin: 10px;
  break-inside: avoid;
  cursor: pointer;

  transition: all 0.2s ease-out;

  &:hover {
    transform: scale(1.05);
  }

  &.large {
    height: 440px;
  }

  @include phablet {
    margin: 10px 20px 10px 0;
    padding: 0;
    width: 80vw !important;
    height: 100%;
    max-height: 400px;
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
      max-height: 48px;
      overflow: hidden;
    }

    .source {
      color: $bottomColor;
      margin-top: 10px;
    }
  }
}

.dialog-content {
  width: 100%;
  height: 100%;
  display: flex;

  @include phone {
    flex-direction: column-reverse; // width: 100vw;
  }

  .info {
    width: calc(50% - #{$gutter*2});
    padding: 0 $gutter;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    @include phone {
      width: auto;
      max-width: calc(100% - #{$gutter*2});
      padding: $gutter/2;
      justify-content: flex-start;
      height: auto;
      flex-grow: 1;
      padding-bottom: 100px;
    }

    .divider {
      border-bottom: 1px solid $gray1;
      margin: $gutter/2 0;
    }

    .date {
      font-style: italic;
      color: $gray2;

      span {
        margin-left: 10px;
        font-style: normal;
      }
    }

    .likes {
      display: flex;
      align-items: center;

      i {
        font-size: 36px;
        margin-right: 5px;
        color: $inno-yellow;
      }
    }

    .wrapper {
      position: absolute;
      bottom: $gutter/2;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: center;

      a {
        font-weight: bold;
        box-shadow: $shadow;
        display: table;
        height: 40px;
        padding: 10px 20px;
        border-radius: $border-radius;
        transition: background-color 0.2s ease-out;

        &:hover {
          background: $gray0;
        }

        span {
          margin-left: 50px;
          position: relative;
          top: 7px;
          color: $gray2;
        }
      }
    }
  }

  .image {
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    height: 100%;
    width: 50%;

    @include phone {
      width: 100%;
      height: 50%;
    }
  }
}
</style>
