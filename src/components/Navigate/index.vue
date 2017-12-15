<template lang="pug">
.carcrash(v-inview:enter='timelinePark')
  buildings.buildings(ref='buildings')
  car.car(ref='car', @click.native='resetButCrash')
  tree.tree1(ref='tree1')
  tree.tree2(fill='#f4b800', ref='tree2')
  explosion.explosion(ref='explosion')

  .contact.flex.flex-column.text-left.flex-justify-center.full-height
    h3 Innovadis
    span {{ address }}
    span {{ postalCode }}
    br
    a.flex.flex-align-center(:href='"tel:" + phoneNumber ')
      i.icons8-phone
      | {{ phoneNumberLabel }}
    a.flex.flex-align-center(:href='"mailto:" + email ')
      i.icons8-email-2
      | {{ email }}

  .navigate
    orb(:size='60', icon='driver', :initialX='-100', :initialY='-50', :shadow='false', single)
    .flex.flex-align-center
      a(href='https://www.google.com/maps?f=d&daddr=Innovadis+Enschede', target='_blank') Routebeschrijving
      i.icons8-advance

</template>

<script>
import Anime from 'animejs'

export default {
  components: {
    Orb: require('src/components/Orb'),
    Car: require('./Car'),
    Buildings: require('./Buildings'),
    Tree: require('./Tree'),
    Explosion: require('./Explosion')
  },

  props: ['address', 'postalCode', 'phoneNumber', 'phoneNumberLabel', 'email'],

  data() {
    return {
      crashed: false,
      timeline: null
    }
  },

  methods: {
    timelineCrash() {
      Anime.timeline()
        .add({
          targets: this.$refs.car.$el,
          translateX: 300,
          duration: 2000,
          easing: 'easeInCubic'
        })
        .add({
          targets: this.$refs.explosion.$el,
          opacity: 1,
          scale: 1.5,
          duration: 100,
          easing: 'easeInCubic'
        })
        .add({
          targets: this.$refs.car.$el,
          translateX: 300,
          translateY: -5,
          rotate: '-10deg',
          duration: 100,
          offset: '-=100'
        })
        .add({
          targets: this.$refs.explosion.$el,
          opacity: 0,
          duration: 100,
          easing: 'easeInCubic'
        })
        .add({
          targets: this.$refs.tree1.$el,
          rotate: '15deg',
          translateX: 5,
          duration: 1500,
          easing: 'easeInOutCirc',
          offset: '-=100'
        })
    },

    timelinePark() {
      this.timeline = Anime.timeline()
        .add({
          targets: this.$refs.car.$el,
          translateX: 570,
          duration: 3000,
          easing: 'easeInOutCubic'
        })
    },

    async resetButCrash() {
      if (this.crashed) return

      this.crashed = true

      await Anime({
        targets: this.$refs.car.$el,
        translateX: 0,
        duration: 500,
        easing: 'easeInOutCubic'
      }).finished

      this.timeline.seek(0)

      this.timelineCrash()
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.carcrash {
  background: $inno-yellow-light;
  margin: $gutter 0;
  height: 283px;
  width: 750px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  .buildings {
    position: absolute;
    right: 40px;
    bottom: 0;
  }

  .car {
    position: absolute;
    left: 50px;
    bottom: 0;
  }

  .tree1 {
    position: absolute;
    bottom: 0;
    left: 380px;
  }

  .tree2 {
    position: absolute;
    bottom: 0;
    left: 240px;
  }

  .explosion {
    height: 30px;
    width: 30px;
    position: absolute;
    bottom: 10px;
    left: 380px;
    opacity: 0;
    transform: scale(0);
  }

  .contact {
    margin-left: 60px;

    @include phablet {
      margin-left: 100px;
    }

    h3 {
      font-family: Bitter;
      margin-bottom: 5px;
    }

    a {
      margin: 5px 0;
      z-index: 1;

      i {
        font-size: 28px;
        margin-right: 8px;
      }
    }
  }

  .navigate {
    position: absolute;
    right: 130px;
    top: 80px;
    display: flex;
    align-items: center;

    .orb {
      background: $inno-blue;
      color: white;
      padding: 10px;
      border-radius: 45%;
      transform: skewX(-5deg);
      margin-right: 10px;
    }

    a {
      margin-right: 10px;
    }

    i {
      font-size: 36px;
    }
  }

  a {
    color: $gray3;
  }
}
</style>
