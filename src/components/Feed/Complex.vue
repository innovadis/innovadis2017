<template lang="pug">
.complex.flex.flex-column-phablet(:class='{ "controls-open": controlsOpen }', @wheel='scroll')
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

    multiselect(
      v-model='tagSelected',
      :options='tagOptions',
      placeholder='Zoek op tags',
      :multiple='true',
      select-label='',
      deselect-label='',
      selected-label=''
      )

    .buttons.flex.flex-align-center.flex-justify-between
      inno-button.ma-0(label='Reset', nomargin, small, transparent)
      inno-button(primary, small, label='Toepassen')

  .no-scrollbar
    .filter-phablet(@click='controlsOpen = true')
      i.icons8-sorting-options
      | Filters

    .news-items(ref='newsItems')
      .flex
        transition-group(name='feedlist', mode='out-in', tag='div')
          item(:item='item', v-for='item in oddItems', :key='item.feedId', @dialogOpen='dialogOpen')

        transition-group(name='feedlist', mode='out-in', tag='div')
          item(:item='item', v-for='item in evenItems', :key='item.feedId', @dialogOpen='dialogOpen')

</template>

<script>
import Multiselect from 'src/../node_modules/vue-multiselect/src/Multiselect'

const TRANSITION_DURATION = 0

export default {
  components: {
    Multiselect,
    Item: require('./Item')
  },

  data() {
    return {
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

      tagSelected: null,
      tagOptions: ['todo'],

      controlsOpen: false,

      anyDialogOpen: false,

      feedGetter: 'contentAll'
    }
  },

  computed: {
    feedItems() {
      return this.$store.getters['feed/' + this.feedGetter]
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
  },

  methods: {
    scroll(e) { // TODO check ipad
      if (this.anyDialogOpen) return

      this.$refs.newsItems.scrollTop += e.deltaY
    },

    dialogOpen(open) {
      this.anyDialogOpen = open
    },

    marketChange(v) {
      this.mediaSelected = null

      // this.feedGetter = 'contentNone'

      setTimeout(() => {
        if (!v) {
          this.feedGetter = 'contentAll'
        } else if (v.key === 'smart-industry') {
          this.feedGetter = 'contentMarketSmartIndustry'
        } else if (v.key === 'smart-health') {
          this.feedGetter = 'contentMarketSmartHealth'
        } else {
          throw new Error('invalid market')
        }
      }, TRANSITION_DURATION)
    },

    mediaChange(v) {
      this.marketSelected = null

      // this.feedGetter = 'contentNone'

      setTimeout(() => {
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
      }, TRANSITION_DURATION)
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
      transform: translateY(-100vh);
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
      z-index: 2;
      padding-top: $headerHeight - 25px;
      background: $background;
      transition: all 0.5s ease-in-out;
      transform: translateY(-100vh);
    }

    .news-items {
      padding: $gutter;
      width: 890px;

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
        transform: translateY(0);
      }

      .no-scrollbar {
        transform: translateY(0);
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
