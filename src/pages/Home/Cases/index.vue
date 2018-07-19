<template lang="pug">
.flex.flex-justify-end.flex-column.flex-justify-center-phone
  .feed
    .title.container
      h1.dot Cases
      p Wij zijn trots op onze opdrachtgevers en op wat wij voor ze mogen doen! En dat delen we graag met jullie. Nieuwsgierig naar wat dit is? Lees hieronder meer over ons werk, bekijk de cases.
    .items.container
      router-link.item.large(
        :style='{ background: "linear-gradient(to top, rgba(0, 0, 0, 0.5) 10%, transparent), url(/static/cases/Mockup_Case_Vredestein.jpg)" }',
        :to='{ name: "case", params: { name: "apollo-vredestein" } }',
        )
          div.text
            h3.title Apollo Vredestein
            .source Webportaal
      .grid
        router-link.item(
        :style='{ background: "linear-gradient(to top, rgba(0, 0, 0, 0.5) 10%, transparent), url(/static/cases/socialhof/banner.png)" }',
        :to='{ name: "case", params: { name: "socialhof" } }',
        )
          div.text
            h3.title Socialhof
            .source Webportaal

        router-link.item(
        :style='{ background: "linear-gradient(to top, rgba(0, 0, 0, 0.5) 10%, transparent), url(/static/cases/Mockup_Case_DBI.jpg)" }',
        :to='{ name: "case", params: { name: "dbi-container-service" } }',
        )
          div.text
            h3.title DBI Container Service
            .source Webportaal

    .items.container

      .grid
        router-link.item(
        :style='{ background: "linear-gradient(to top, rgba(0, 0, 0, 0.5) 10%, transparent), url(/static/cases/Mockup_Case_Comfoor.jpg)" }',
        :to='{ name: "case", params: { name: "comfoor" } }',
        )
          div.text
            h3.title Comfoor
            .source Webportaal

        //- router-link.item(
        //- :style='{ background: "linear-gradient(to top, rgba(0, 0, 0, 0.5) 10%, transparent), url(/static/cases/Mockup_Case_SHV)" }',
        //- :to='{ name: "case", params: { name: "webportaal-shv" } }',
        //- )
        //-   div.cases__text
        //-     h3.cases__title Webportaal SHV
        //-     .source Webportaal

      router-link.item.large(
        :style='{ background: "linear-gradient(to top, rgba(0, 0, 0, 0.5) 10%, transparent), url(/static/cases/Mockup_Case_SHV.jpg" }',
        :to='{ name: "case", params: { name: "webportaal-shv" } }',
        )
          div.text
            h3.title Webportaal SHV
            .source Webportaal
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      cases: []
    }
  },
  head: {
    title: {
      inner: 'Cases'
    },
    meta() {
      return [
        // Google+
        { itemprop: 'name', content: 'Cases | Innovadis' },
        { itemprop: 'description', content: 'Wij zijn trots op onze opdrachtgevers en op wat wij voor ze mogen doen! En dat delen we graag met jullie.' },

        // Twitter
        { name: 'twitter:title', content: 'Cases | Innovadis' },
        { name: 'twitter:description', content: 'Wij zijn trots op onze opdrachtgevers en op wat wij voor ze mogen doen! En dat delen we graag met jullie.' },

        // Facebook
        { property: 'og:title', content: 'Cases | Innovadis' },
        { property: 'og:description', content: 'Wij zijn trots op onze opdrachtgevers en op wat wij voor ze mogen doen! En dat delen we graag met jullie.' }
      ]
    }
  },
  computed: {
    name() {
      return this.$route.params.name
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

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
      color: $bottomColor !important;
      margin-top: 10px;
    }
  }
}

</style>
