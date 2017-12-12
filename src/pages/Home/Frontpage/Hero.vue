<template lang="pug">
.hero
  .container(ref='text')
    .orbs
      orb(
        :size='140'
        :initialX='orbLarge.x',
        :initialY='orbLarge.y',
        :targetX='orbLarge.targetX',
        :targetY='orbLarge.targetY',
        :z='-1'
        )

      orb(
        :size='60'
        :initialX='orbMedium.x',
        :initialY='orbMedium.y',
        :targetX='orbMedium.targetX',
        :targetY='orbMedium.targetY',
        :blur='5',
        :z='-1'
        )

      orb(
        :size='30'
        :initialX='orbSmall.x',
        :initialY='orbSmall.y',
        :targetX='orbSmall.targetX',
        :targetY='orbSmall.targetY',
        :blur='10',
        :z='-1'
        )

    .text
      h1 Wij verbinden,
      typing-text
      p.intro De mens is uniek! Innovadis gelooft dat, door de mens als individu of team centraal te stellen, IT en techniek pas echt bijdragen aan het succes van onze opdrachtgevers. Slimme toepassingen, waardoor er tijd overblijft voor dingen die echt belangrijk zijn.
      .buttons.flex.flex-justify-center.flex-column-phone.flex-align-center-phone
        inno-button(label='Smart Industry', primary, :to='{ name: "smart-industry" }')
        inno-button(label='Smart Health', primary, :to='{ name: "smart-health" }')

</template>

<script>
export default {
  components: {
    Orb: require('src/components/Orb'),
    TypingText: require('src/components/TypingText')
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
          x: -100,
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
  width: 100vw;
  height: calc(100vh - #{$headerHeight});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  transform: translateX(0); // prevents orbs from causing overflow
  background: linear-gradient(to bottom, transparent, transparent 50%, transparentize(#e7e7e7, 0.6) 80%, #d0d0d0 100%);

  @include phone {
    height: auto;
    padding: $gutter 0 100px 0;
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

    .intro {
      margin-top: 35px;
      margin-bottom: 0;
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
