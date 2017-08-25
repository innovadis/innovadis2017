<template lang="pug">
.feed
  h2.dot Innovadis in de wereld
  .items.container
    item(source='Instagram', title='Luck inmaken met Tekken is te makkelijk', imageUrl='http://gearnuke.com/wp-content/uploads/2017/06/Tekken-7-1.jpg', :large='true')
    .grid
      item(source='Instagram', title='Tom\'s favoriete nummer is uitgelekt! ', imageUrl='https://www.top40.nl/uploads/subtitle/formats/40411/large.jpg')
      item(source='Instagram', title='Innovadis 1', imageUrl='https://image-store.slidesharecdn.com/746e3ad9-43c8-4d51-b1dc-37f83e83bd48-original.png')

</template>

<script>
export default {
  components: {
    Item: require('./Item')
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';
@import 'src/styles/layout';

.feed {
  width: 100vw;
  background: radial-gradient(circle, #000000 0%, #082D3C 100%);
  padding: 100px 0;
  display: flex;
  align-content: center;
  flex-direction: column;

  @include phablet {
    padding: 60px 0;
  }

  h2 {
    color: white;
    text-align: center;
  }

  .items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-x: auto;
    max-width: $container-width + 70px;

    @include phablet {
      flex-wrap: nowrap;
      margin: 0;
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
