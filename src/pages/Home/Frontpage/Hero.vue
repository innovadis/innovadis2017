<template lang="pug">
.hero
  .text(ref='text')
    .orbs
      orb(
        :size='140'
        :initialX='orbLarge.x',
        :initialY='orbLarge.y',
        :targetX='orbLarge.targetX',
        :targetY='orbLarge.targetY',
        )

      orb(
        :size='60'
        :initialX='orbMedium.x',
        :initialY='orbMedium.y',
        :targetX='orbMedium.targetX',
        :targetY='orbMedium.targetY',
        :blur='5'
        )

      orb(
        :size='30'
        :initialX='orbSmall.x',
        :initialY='orbSmall.y',
        :targetX='orbSmall.targetX',
        :targetY='orbSmall.targetY',
        :blur='10'
        )

    h1 Wij verbinden,
    h1.dot Organisaties
    p.intro There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.
    .buttons.flex.flex-justify-center.flex-column-phone.flex-align-center-phone
      inno-button(label='Smart Health', primary)
      inno-button(label='Smart Industry', primary)

</template>

<script>
export default {
  components: {
    Orb: require('src/components/Orb')
  },

  computed: {
    orbMedium() {
      if (window.innerWidth < 600) {
        return {
          x: 0,
          y: -20,
          targetX: 100,
          targetY: 300
        }
      } else {
        return {
          x: -200,
          y: -10,
          targetX: 100,
          targetY: 300
        }
      }
    },

    orbSmall() {
      if (window.innerWidth < 600) {
        return {
          x: 450,
          y: 250,
          targetX: 100,
          targetY: 300
        }
      } else {
        return {
          x: 680,
          y: 100,
          targetX: -300,
          targetY: -300
        }
      }
    },

    orbLarge() {
      if (window.innerWidth < 600) {
        return {
          x: -50,
          y: 500,
          targetX: 200,
          targetY: -50
        }
      } else {
        return {
          x: -50,
          y: 390,
          targetX: 300,
          targetY: -100
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';
@import 'src/styles/layout';

.hero {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  transform: translateX(0); // prevents orbs from causing overflow
  @include phone {
    height: auto;
    padding: 100px 0;
  }

  .text {
    max-width: 650px;

    @include phone {
      padding: 0 20px;
    }

    p,
    h1 {
      color: $gray3;
      z-index: 1;
    }

    .buttons {
      z-index: 1;

      @include phone {
        .button {
          margin: 15px;
        }
      }
    }

    .orbs {
      height: 100%;
      width: 100%;
      z-index: -1;
    }
  }
}
</style>
