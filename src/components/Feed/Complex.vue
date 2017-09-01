<template lang="pug">
.complex.flex.flex-column-phone
  .controls.flex.flex-column.flex-justify-center
    h1.dot.hidden-phone Onze wereld
    .filter-phone(@click='controlsOpen = false') X Filters
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

  .no-scrollbar(:class='{ down: controlsOpen }')
    .filter-phone(@click='controlsOpen = true') = Filters
    .news-items
      item(:item='instagram.items[0]', type='instagram', large)
      .grid
        item(:item='instagram.items[1]', type='instagram')
        item(:item='instagram.items[2]', type='instagram')

      item(:item='item', type='instagram', v-for='item in instagram.items.slice(3)', :key='item.url')

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

      controlsOpen: false
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
  height: calc(100vh - #{$headerHeight});
  width: 100vw;
  background: $background;

  @include phone {
    height: calc(100vh - #{$headerHeight} + 25px);
  }

  .filter-phone {
    display: none;
    color: white;
    font-size: 26px;
    text-align: center;
    cursor: pointer;
    padding: 20px 0;

    @include phone {
      display: block;
    }
  }

  .controls {
    margin: 80px;
    width: 300px;
    text-align: left;

    @include phone {
      margin: $gutter/2;
      width: auto;
      height: calc(100vh - #{$headerHeight*2});
      text-align: center;
      position: absolute;
      background: $background;
      margin: 0;
      padding: 20px;
    }

    .buttons {
      display: none;
      margin-top: 10px;

      @include phone {
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
    overflow: hidden;
    width: 930px;
    padding-bottom: 100px;

    @include phone {
      overflow: auto;
      width: 100vw;
      height: 100vh;
      z-index: 2;
      background: $background;
      transition: margin-top 0.5s ease-in-out;

      &.down {
        margin-top: 100vh;
      }
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
          margin-left: $gutter;
        }
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
