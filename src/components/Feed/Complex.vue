<template lang="pug">
.complex.flex.flex-column-phablet(:class='{ "controls-open": controlsOpen }')
  .controls.flex.flex-column.flex-justify-center
    h1.dot.hidden-phablet Onze wereld
    .filter-phablet(@click='controlsOpen = false')
      i.icons8-delete
      | Filters

    p Gebruik de filters hieronder om berichten te zoeken.

    multiselect(
      v-model='marketSelected',
      :options='marketOptions',
      placeholder='Selecteer een markt',
      select-label='',
      deselect-label='',
      selected-label='',
      track-by='key',
      label='label',
      @input='marketChange'
      )

    multiselect(
      v-model='mediaSelected',
      :options='mediaOptions'
      placeholder='Selecteer een medium',
      select-label='',
      deselect-label='',
      selected-label='',
      track-by='key',
      label='label',
      @input='mediaChange'
      )

    multiselect.multiselect-tags(
      v-model='tagSelected',
      :options='$store.getters["feed/tags"]',
      placeholder='Zoek op tags',
      :multiple='true',
      select-label='',
      deselect-label='',
      selected-label='',
      @input='tagChange',
      :close-on-select='false'
      )

    transition(name='fade')
      .reset(@click='reset', v-show='canReset')
        i.icons8-delete
        a Reset

    .buttons.flex.flex-align-center.flex-justify-between
      inno-button.ma-0(label='Reset', nomargin, small, transparent, @click='reset()')
      inno-button(primary, small, label='Toepassen', @click='controlsOpen = false')

  .no-scrollbar
    .filter-phablet(@click='controlsOpen = true')
      i.icons8-sorting-options
      | Filters

    .news-items(v-if='mobileVersion')
      transition-group(name='feedlist', mode='out-in', tag='div')
        item(:item='item', v-for='item in feedItems', :key='item.feedId', @dialogOpen='dialogOpen')

    .news-items(ref='newsItems', v-else)
      .flex
        transition-group(name='feedlist', mode='out-in', tag='div')
          item(:item='item', v-for='item in oddItems', :key='item.feedId', @dialogOpen='dialogOpen')

        transition-group(name='feedlist', mode='out-in', tag='div')
          item(:item='item', v-for='item in evenItems', :key='item.feedId', @dialogOpen='dialogOpen')

</template>

<script>
import Multiselect from 'src/../node_modules/vue-multiselect/src/Multiselect'

export default {
  components: {
    Multiselect,
    Item: require('./Item')
  },

  data() {
    return {
      mobileVersion: window.innerWidth <= 900,
      marketSelected: null,
      marketOptions: [
        {
          key: 'smart-health',
          label: 'Smart Health'
        },
        {
          key: 'smart-industry',
          label: 'Smart Industry'
        }
      ],

      mediaSelected: null,
      mediaOptions: [
        {
          key: 'instagram',
          label: 'Instagram'
        },
        {
          key: 'blog',
          label: 'Blog'
        },
        {
          key: 'news',
          label: 'Nieuws'
        },
        {
          key: 'event',
          label: 'Evenementen'
        }
      ],

      tagSelected: [],

      controlsOpen: false,

      anyDialogOpen: false,

      feedGetter: 'contentAll'
    }
  },

  computed: {
    feedItems() {
      const items = this.$store.getters['feed/' + this.feedGetter]

      if (this.tagSelected.length > 0) {
        let filteredItems = items.filter(x => (x.tags && x.tags.some(y => this.tagSelected.includes(y))))

        filteredItems = filteredItems.concat(items.filter(x => x.caption && this.tagSelected.some(y => x.caption.text.includes('#' + y))))

        return filteredItems
      }

      return items
    },

    oddItems() {
      const odd = []

      for (var index = 0; index < this.feedItems.length; index++) {
        var element = this.feedItems[index]

        if (index % 2 === 0) {
          odd.push(element)
        }
      }

      return odd
    },

    evenItems() {
      const even = []

      for (var index = 0; index < this.feedItems.length; index++) {
        var element = this.feedItems[index]

        if (index % 2 === 1) {
          even.push(element)
        }
      }

      return even
    },

    canReset() {
      return this.mediaSelected !== null || this.tagSelected.length !== 0 || this.marketSelected !== null
    }
  },

  methods: {
    dialogOpen(open) {
      this.anyDialogOpen = open
    },

    marketChange(v) {
      this.mediaSelected = null
      this.tagSelected = []

      if (!v) {
        this.feedGetter = 'contentAll'
      } else if (v.key === 'smart-industry') {
        this.feedGetter = 'contentMarketSmartIndustry'
      } else if (v.key === 'smart-health') {
        this.feedGetter = 'contentMarketSmartHealth'
      } else {
        throw new Error('invalid market')
      }
    },

    mediaChange(v) {
      this.marketSelected = null
      this.tagSelected = []

      if (!v) {
        this.feedGetter = 'contentAll'
      } else if (v.key === 'blog') {
        this.feedGetter = 'contentBlog'
      } else if (v.key === 'news') {
        this.feedGetter = 'contentNews'
      } else if (v.key === 'event') {
        this.feedGetter = 'contentEvents'
      } else if (v.key === 'instagram') {
        this.feedGetter = 'contentInstagram'
      } else {
        throw new Error('invalid media')
      }
    },

    tagChange(v) {
      this.marketSelected = null
      this.mediaSelected = null

      this.feedGetter = 'contentAll'
    },

    reset() {
      this.marketSelected = null
      this.mediaSelected = null
      this.tagSelected = []

      this.feedGetter = 'contentAll'
    },

    resizeEvent() {
      this.mobileVersion = window.innerWidth <= 900
    }
  },

  mounted() {
    const arrows = document.querySelectorAll('.multiselect__select')

    for (const arrow of arrows) {
      const chevron = document.createElement('i')
      chevron.classList.add('multiselect-chevron-down')
      chevron.classList.add('icons8-expand-arrow')

      arrow.parentNode.replaceChild(chevron, arrow)
    }

    window.addEventListener('resize', this.resizeEvent)
  },

  destroyed() {
    window.removeEventListener('resize', this.resizeEvent)
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.complex {
  height: calc(100vh - #{$headerHeight});
  width: 100vw;
  background: $background;

  @include phablet {
    height: calc(100vh - #{$headerHeight} + 25px);
  }

  .filter-phablet {
    display: none;
    color: white;
    font-size: 26px;
    text-align: center;
    cursor: pointer;
    padding: 20px 0;
    align-items: center;
    justify-content: center;

    i {
      color: white;
      font-size: 38px;
      margin-right: 10px;
    }

    @include phablet {
      display: flex;
    }
  }

  .controls {
    margin: 80px;
    width: 300px;
    text-align: left;

    @include phablet {
      margin: $gutter/2;
      width: calc(100vw - #{$gutter});
      min-height: calc(100vh - #{$headerHeight}); // min-height: 100vh;
      text-align: center;
      background: $background;
      margin: 0;
      padding: 20px;
      align-self: center;
      transition: all 0.5s ease-in-out;
      position: relative;
      top: -100vh;
    }

    .buttons {
      display: none;
      margin-top: 10px;

      @include phablet {
        display: flex;
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

      &.multiselect-tags {
        /deep/ .multiselect__element {
          height: 45px !important;
          padding-left: 10px;
        }

        /deep/ .multiselect__option {
          padding: 8px;
        }
      }
    }

    .reset {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 5px;
      cursor: pointer;

      @include phablet {
        display: none;
      }

      i,
      a {
        color: white;
      }

      i {
        margin-right: 5px;
        font-size: 24px;
        margin-top: 2px;
        transition: transform 0.3s ease-in-out;
      }

      &:hover {
        i {
          transform: rotate(180deg);
        }
      }
    }
  }

  .no-scrollbar {
    overflow-x: hidden;
    overflow-y: auto;
    width: 930px;

    &::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }

    @include phablet {
      overflow: auto;
      width: 100vw;
      min-height: 100vh;
      padding-top: $headerHeight - 25px;
      background: $background;
      transition: all 0.5s ease-in-out;
      position: relative;
      top: -100vh;
    }

    .news-items {
      padding: $gutter;
      width: 890px;
      margin: 0 20px;

      @media (max-width: 1400px) {
        width: 410px;
      }

      @include phablet {
        width: auto;
        padding: 0;
        height: auto;
        flex-direction: column;
        align-items: center;
      }

      .grid {
        display: grid;

        @include phablet {
          display: flex;
          flex-direction: column;
          width: 100vw;

          .item {
            margin: 10px auto;
          }
        }
      }
    }
  }

  &.controls-open {
    @include phablet {
      overflow: hidden;

      .controls {
        top: 0;
      }

      .no-scrollbar {
        top: 0;
      }
    }
  }
}

// Transition
.feedlist-item {
  display: inline-block;
  margin-right: 10px;
}

.feedlist-leave-active {
  height: 0;
}

.feedlist-enter-active,
.feedlist-leave-active {
  transition: all 1s ease-in-out;
}

.feedlist-enter,
.feedlist-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.feedlist-move {
  transition: transform 1s;
}
</style>
