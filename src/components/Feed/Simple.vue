<template lang="pug">
.feed(:class='{ dark: dark }')
  .title.container
    h2.dot {{ title }}
  .items.container
      item(:item='instagram.items[0]', type='instagram', large)
      .grid
        item(:item='instagram.items[1]', type='instagram')
        item(:item='instagram.items[2]', type='instagram')

</template>

<script>
export default {
  components: {
    Item: require('./Item')
  },

  props: {
    title: String,
    dark: Boolean
  },

  data() {
    return {
      instagram: require('./rickandmorty.json')
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

  h2 {
    text-align: center; // ios
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
      margin: 0;
      justify-content: center;
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
    display: none;
  }
}
</style>
