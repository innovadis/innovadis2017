<template lang="pug">
.feed(:class='{ dark: dark }', v-if='feedItems.length > 0')
  .title.container
    h2.dot {{ title }}
  .items.container
    item(:item='feedItems[0]', large)
    .grid
      item(:item='feedItems[1]', v-if='feedItems.length > 1')
      item(:item='feedItems[2]', v-if='feedItems.length > 2')

  .more.flex.flex-justify-center.flex-grow-1
    inno-button.text-center(label='Lees meer', primary, small, :to='{ name: "world" }')
</template>

<script>
export default {
  components: {
    Item: require('./Item')
  },

  props: {
    title: String,
    dark: Boolean,
    feedGetter: {
      type: String,
      default: 'contentAll'
    },
    items: Array
  },

  computed: {
    feedItems() {
      if (this.items !== undefined) return this.items

      return this.$store.getters['feed/' + this.feedGetter]
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';
@import 'src/styles/layout';

.feed {
  width: 100vw;
  padding: 100px 0;
  display: flex;
  align-content: center;
  flex-direction: column;

  .title {
    margin-bottom: $gutter/2;
  }

  h2 {
    text-align: center; // ios
  }

  .more {
    margin-top: $gutter - 10px;
  }

  @include phablet {
    padding: 60px 0;
    justify-content: center;
  }

  .items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-x: auto;
    overflow-y: hidden;
    max-width: $container-width + 70px;

    @include phablet {
      flex-wrap: nowrap;
      flex-direction: column;
      margin: 0;
      justify-content: flex-start;
    }
  }

  &.dark {
    background: radial-gradient(circle, #000000 0%, #082D3C 100%);

    h2 {
      color: white;
    }
  }
}

.grid {
  display: grid;

  @include phablet {
    display: flex;
    flex-direction: column;
  }
}

.swipe {
  display: none;

  @include phablet {
    display: flex;
  }

  i {
    font-size: 40px;
  }

  &,
  i {
    color: white;
  }
}
</style>
