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

    .buttons.flex.flex-align-center.flex-justify-between
      inno-button.ma-0(label='Reset', nomargin, small, transparent)
      inno-button(primary, small, label='Toepassen')

  .no-scrollbar
    .filter-phablet(@click='controlsOpen = true')
      i.icons8-sorting-options
      | Filters

    .news-items(ref='newsItems')
      item(:item='instagram.items[0]', type='instagram', large, @dialogOpen='dialogOpen')
      .grid
        item(:item='instagram.items[1]', type='instagram', @dialogOpen='dialogOpen')
        item(:item='instagram.items[2]', type='instagram', @dialogOpen='dialogOpen')

      item(:item='item', type='instagram', v-for='item in instagram.items.slice(3)', :key='item.url', @dialogOpen='dialogOpen')

</template>

<script>
import Multiselect from 'src/../node_modules/vue-multiselect/src/Multiselect'
// import axios from 'axios'

export default {
  components: {
    Multiselect,
    Item: require('./Item')
  },

  data() {
    return {
      marketSelected: null,
      marketOptions: ['Smart health', 'Smart industry'],

      mediaSelected: null,
      mediaOptions: ['Instagram', 'Facebook', 'Twitter'],

      tagSelected: null,
      tagOptions: ['todo'],

      instagram: require('./rickandmorty.json'),

      controlsOpen: false,

      anyDialogOpen: false
    }
  },

  methods: {
    scroll(e) { // TODO check ipad
      if (this.anyDialogOpen) return

      this.$refs.newsItems.scrollTop += e.deltaY
    },

    dialogOpen(open) {
      this.anyDialogOpen = open
    }
  },

  async created() {
    // const res = await axios.get('https://www.instagram.com/rickandmorty/media/')

    // this.instagramItems = res.data
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
      text-align: center; // position: absolute;
      // top: 0;
      // left: 0;
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
    padding-bottom: 100px;

    &::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }

    @include phablet {
      overflow: auto;
      width: 100vw;
      min-height: 100vh;
      z-index: 2;
      padding-top: $headerHeight - 25px; // position: absolute;
      // top: $headerHeight - 10px;
      // left: 0;
      background: $background;
      transition: all 0.5s ease-in-out;
      transform: translateY(-100vh);

      &.down {}
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
</style>

<style lang="scss">
@import 'src/styles/variables';

.complex {}
</style>
