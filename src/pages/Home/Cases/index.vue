<template lang="pug">
.flex.flex-justify-end.flex-column.flex-justify-center-phone
  .container.pt
    h1.dot Referenties

  div.cases__wrapper.flex.flex-wrap.flex-justify-between
    router-link.cases__item(
        v-for="(item, index) in this.cases",
        :style='{ background: "url(" + item.imageUrl + ")" }',
        :to='{ name: "case", params: { name: item.link } }',
        :key="index"
      )
        div.cases__text
          h3.cases__title(v-html="item.title")

</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      cases: [
        {
          title: 'Socialhof',
          imageUrl: '/static/cases/Mockup_Case_SHV.jpg',
          link: 'socialhof'
        },
        {
          title: 'Apollo Vredestein',
          imageUrl: '/static/cases/Mockup_Case_Vredestein.jpg',
          link: 'apollo-vredestein'
        },
        {
          title: 'DBI Container Service',
          imageUrl: '/static/cases/Mockup_Case_DBI.jpg',
          link: 'dbi-container-service'
        },
        {
          title: 'Comfoor',
          imageUrl: '/static/cases/Mockup_Case_Comfoor.jpg',
          link: 'comfoor'
        },
        {
          title: 'Webportaal SHV',
          imageUrl: '/static/cases/Mockup_Case_SHV.jpg',
          link: 'webportaal-shv'
        }
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

.cases {
  &__wrapper{
    max-width: 80%;
    width: 100%;
    margin: 40px auto;
    @include desktop {
      max-width: 90%;
    }
  }
  &__item {
    flex: 0 1 23%;
    margin: 1%;
    background-size: contain !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    border-radius: 5px;
    position: relative;
    padding: 40px;
    box-sizing: border-box;
    transition: transform .3s ease;
    &:after {
      content: '';
      display: block;
      padding-top: 50%;
    }
    &:hover {
      transform: scale(1.05);
    }
    @include phablet {
      flex: 0 1 48%;
    }
    @include phone {
      flex: 1 1 100%;
    }
  }
  &__title {
    color: $inno-blue-dark;
    padding-bottom: 0px;
    margin: 0;
    padding: 10px;
    max-height: 77px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    align-items: center;
    justify-content: center;
  }
  &__text {
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    width:100%;
  }

}

</style>
