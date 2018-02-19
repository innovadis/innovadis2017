<template lang="pug">
.flex.flex-justify-center
  .item(
    :style='style',
    :class='{ large: large }',
    @click='openItem',
    ref='item'
    )
    .text
      h3.title {{ feedItem.title }}
      .source {{ feedItem.type }}

  news-dialog(
    v-show='dialogDetailOpen',
    @close='dialogDetailOpen = false',
    v-model='dialogDetailOpen'
    )
    .dialog-content
      .info
        div
          .flex.flex-justify-between.flex-align-center
            .date Datum:
              span {{ feedItem.created }}
            .likes
              i.icons8-like-filled
              | {{ feedItem.likes }}
          .divider
          .title {{ feedItem.title }}


      .image.flex.flex-align-end(:style='{ "background-image": "url(" + feedItem.imageUrl + ")" }')
        .wrapper
          a.flex.flex-align-center(:href='feedItem.url', target='_blank')
            orb(:size='40', :initialX='-25', :initialY='-20', icon='instagram', single)
            span Volgen
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

  data () {
    return {
      dialogDetailOpen: false
    }
  },

  computed: {
    style () {
      return {
        'background-image': `linear-gradient(to top, rgba(0, 0, 0, 0.5) 10%, transparent), url(${this.feedItem.imageUrl})`
        // height: window.innerWidth > 600 ? (this.large ? 410 : 155) + 'px' : 200 + 'px'
      }
    },
    feedItem () {
      let feedItem = {}

      feedItem.created = Moment(this.item.feedCreated).format('DD MMMM YYYY')

      switch (this.item.feedType) {
        case 'instagram':
          feedItem.type = 'Instagram'
          feedItem.imageUrl = this.item.display_src
          feedItem.title = this.item.caption || ''
          feedItem.likes = this.item.likes.count
          feedItem.url = 'https://www.instagram.com/p/' + this.item.code
          break

        case 'blog':
          feedItem.type = 'Blog'
          feedItem.imageUrl = this.item.heroImage // TODO thumbnail?
          feedItem.title = this.item.title
          break

        case 'news':
          feedItem.type = 'Nieuws'
          feedItem.title = this.item.title
          feedItem.imageUrl = this.item.heroImage || '/static/images/news_item_thumbnail.jpg' // TODO heroImage thumbnail from headless?
          break

        case 'event':
          feedItem.type = 'Evenement'
          feedItem.imageUrl = this.item.heroImage
          feedItem.title = this.item.title
          break

        default:
          throw new Error('unknown type')
      }

      return feedItem
    }
  },

  methods: {
    openItem () {
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
    dialogDetailOpen (v) {
      this.$emit('dialogOpen', v, this)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";
@import "src/styles/layout";

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
    @include desktop {
      height: 440px;
    }
  }

  @include phablet {
    margin: 10px 10px 10px 0;
    width: 80%;
    max-width: 500px;
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
      max-height: 77px;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
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
  max-height: 90vh;

  @include phone {
    flex-direction: column-reverse; // width: 100vw;
  }

  .info {
    width: calc(50% - #{$gutter*2});
    padding: $gutter;
    overflow: hidden;
    overflow-y: scroll;

    @include phone {
      width: auto;
      padding: $gutter/2;
      height: auto;
    }

    .title {
      white-space: pre-line;
    }

    .divider {
      border-bottom: 1px solid $gray1;
      margin: $gutter/2 0;
    }

    .date {
      font-style: italic;
      color: $gray2;
      font-size: 16px;

      @include phone {
        font-size: 14px;
      }

      span {
        margin-left: 4px;
        font-size: 16px;

        @include phone {
          font-size: 14px;
        }
      }
    }

    .likes {
      display: flex;
      align-items: center;
      font-size: 16px;

      i {
        font-size: 36px;
        margin-right: 5px;
        color: $inno-yellow;
        animation-name: pulse;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;

        @include phone {
          font-size: 22px;
        }
      }
    }
  }

  .wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    a {
      font-weight: bold;
      box-shadow: $shadow;
      display: table;
      height: 40px;
      padding: 10px 20px;
      border-radius: $border-radius;
      transition: background-color 0.2s ease-out;
      background-color: white;

      @include phone {
        padding: 4px 20px;
      }

      &:hover {
        background: $gray0;
      }

      span {
        margin-left: 50px;
        position: relative;
        top: 7px;
        color: $gray2;
        font-size: 16px;

        @include phone {
          font-size: 14px;
        }
      }
    }
  }

  .image {
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    height: 600px;
    width: 50%;

    @include phone {
      width: 100%;
      height: 300px;
    }
  }
}

@keyframes pulse {
  0% {
    opacity: 1;
    transform: scale(1);
  }

  25% {
    transform: scale(1.2);
  }

  50% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
