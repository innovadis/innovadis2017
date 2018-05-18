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
          imageUrl: '/static/images/cover/cultuur_vakmanschap.jpg',
          link: 'socialhof'
        },
        {
          title: 'Apollo Vredestein',
          imageUrl: '/static/images/cover/cultuur_vakmanschap.jpg',
          link: 'apollo-vredestein'
        },
        {
          title: 'DBI Container Service',
          imageUrl: '/static/images/cover/cultuur_vakmanschap.jpg',
          link: 'dbi-container-service'
        },
        {
          title: 'Comfoor',
          imageUrl: '/static/images/cover/cultuur_vakmanschap.jpg',
          link: 'comfoor'
        },
        {
          title: 'Webportaal SHV',
          imageUrl: '/static/images/cover/cultuur_vakmanschap.jpg',
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
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    border-radius: 5px;
    position: relative;
    padding: 40px;
    box-sizing: border-box;
    &:after {
      content: '';
      display: block;
      padding-top: 50%;
    }
    @include phablet {
      flex: 0 1 48%;
    }
    @include phone {
      flex: 1 1 100%;
    }
  }
  &__title {
    color: #fff;
    border-bottom: 1px solid hsla(0,0%,100%,.7);
    padding-bottom: 10px;
    margin: 0;
    max-height: 77px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
  }
  &__text {
    position: absolute;
    bottom: 40px;
    left: 40px;
    text-align: left;
    width: calc(100% - 80px);
  }

}

</style>
