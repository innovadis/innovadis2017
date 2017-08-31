<template lang="pug">
.complex.flex.flex-column-phone
  .controls.flex.flex-column.flex-justify-center
    h1.dot.hidden-phone Onze wereld
    .phone X Filters
    p Gebruik de filters hieronder om berichten te zoeken.
    multiselect(
      v-model='marketSelected',
      :options='marketOptions',
      placeholder='Selecteer een markt',
      select-label='',
      deselect-label='',
      selected-label=''
      )

    multiselect(
      v-model='mediaSelected',
      :options='mediaOptions'
      placeholder='Selecteer een medium',
      select-label='',
      deselect-label='',
      selected-label=''
      )

    multiselect(
      v-model='tagSelected',
      :options='tagOptions',
      placeholder='Zoek op tags',
      :multiple='true',
      select-label='',
      deselect-label='',
      selected-label=''
      )

  .no-scrollbar
    .news-items
      news-item(source='Instagram', :title='instagram.items[0].caption ? instagram.items[0].caption.text : ""', :imageUrl='instagram.items[0].images.standard_resolution.url', :link='instagram.items[0].link', large, @click.native='openDialog("instagram", instagram.items[0])')
      .grid
        news-item(source='Instagram', :title='instagram.items[1].caption ? instagram.items[1].caption.text : ""', :imageUrl='instagram.items[1].images.standard_resolution.url', :link='instagram.items[1].link', @click.native='openDialog("instagram", instagram.items[1])')
        news-item(source='Instagram', :title='instagram.items[2].caption ? instagram.items[2].caption.text : ""', :imageUrl='instagram.items[2].images.standard_resolution.url', :link='instagram.items[2].link', @click.native='openDialog("instagram", instagram.items[2])')

      news-item(source='Instagram', :title='item.caption ? item.caption.text : ""', :imageUrl='item.images.standard_resolution.url', :link='item.link', v-for='item in instagram.items.slice(3)', @click.native='openDialog("instagram", item)')

  news-dialog(
    v-if='dialogDetailOpen',
    @close='dialogDetailOpen = false'
    )
    .dialog-content
      .info
        h3 {{ dialogItem.title }}
        .divider
        .flex.flex-justify-between.flex-align-center
          .date Datum:
            span {{ dialogItem.created }}
          .likes <3 {{ dialogItem.likes }}
        .wrapper
          a(:href='dialogItem.url', target='_blank')
            orb(:size='40')
            span Volgen
      .image(:style='{ "background-image": "url(" + dialogItem.imageUrl + ")" }')

</template>

<script>
import Multiselect from 'src/../node_modules/vue-multiselect/src/Multiselect'
// import axios from 'axios'

import Moment from 'moment'

export default {
  components: {
    Orb: require('src/components/Orb'),
    Multiselect,
    NewsItem: require('./Item'),
    NewsDialog: require('./Dialog')
  },

  data() {
    return {
      dialogDetailOpen: false,

      marketSelected: null,
      marketOptions: ['Smart health', 'Smart industry'],

      mediaSelected: null,
      mediaOptions: ['Instagram', 'Facebook', 'Twitter'],

      tagSelected: null,
      tagOptions: ['todo'],

      instagram: require('./rickandmorty.json'),

      dialogItem: null
    }
  },

  methods: {
    openDialog(type, item) {
      switch (type) {
        case 'instagram':
          this.dialogItem = {
            imageUrl: item.images.standard_resolution.url,
            title: item.caption ? item.caption.text : '',
            created: Moment(item.created_time * 1000).format('DD MMMM YYYY'),
            likes: item.likes.count,
            url: item.link
          }
          break
        default:
          throw new Error('unknown type')
      }

      this.dialogDetailOpen = true
    }
  },

  async created() {
    // const res = await axios.get('https://www.instagram.com/rickandmorty/media/')

    // this.instagramItems = res.data
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.complex {
  height: 100vh;
  width: 100vw;
  background: $background;

  .controls {
    margin: 80px;
    width: 300px;
    text-align: left;

    .phone {
      display: none;
      color: white;
      font-size: 26px;
    }

    @include phone {
      margin: $gutter/2;
      width: auto;
      padding-top: $headerHeight + 30px;
      padding-bottom: 120px;
      text-align: center;

      .phone {
        display: block;
      }
    }

    h1 {
      font-size: 80px;
      color: white;
      margin-bottom: 0;
    }

    p {
      color: white;
    }

    .multiselect {
      margin: 10px 0;
    }
  }

  .no-scrollbar {
    overflow: hidden;
    width: 930px;
    padding-bottom: 100px;

    @include phone {
      overflow: auto;
      width: auto;
    }

    .news-items {
      height: 100%;
      padding: $gutter;
      width: 890px;
      overflow-y: scroll;
      overflow-x: hidden;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      @include phone {
        width: auto;
        padding: 0;
        height: auto;
        flex-direction: column;
        align-items: center;
      }

      .grid {
        display: grid;

        @include phone {
          display: flex;
          flex-direction: column;
          width: 100vw;
        }
      }
    }
  }

  .dialog-content {
    width: 100%;
    height: 100%;
    display: flex;

    @include phone {
      flex-direction: column-reverse;
      width: 100vw;
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
}
</style>

<style lang="scss">
@import 'src/styles/variables';

.complex {
  .multiselect {
    .multiselect__element {
      background: $inno-yellow;
      border-bottom: 1px solid $gray1;
      height: 55px;
      padding-left: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .multiselect__option {
        width: 100%;

        &:after {
          background: none;
        }
      }

      .multiselect__option--highlight {
        background: $inno-yellow;
      }

      .multiselect__option--selected {
        background: $inno-yellow;
      }
    }
  }
}
</style>
