<template lang="pug">
.hero
  .text(ref='text')
    .orbs
      orb(
        :size='140'
        :initialX='-50',
        :initialY='390',
        :targetX='300',
        :targetY='-100',
        )

      orb(
        :size='60'
        :initialX='-200',
        :initialY='-10',
        :targetX='100',
        :targetY='300',
        :blur='5'
        )

      orb(
        :size='30'
        :initialX='680',
        :initialY='100',
        :targetX='-300',
        :targetY='-300',
        :blur='10'
        )

    h1 Wij verbinden,
    h1.dot Organisaties
    p.intro There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.
    .buttons.flex.flex-justify-center
      inno-button(label='Smart Health', primary)
      inno-button(label='Smart Industry', primary)

</template>

<script>
export default {
  components: {
    Orb: require('src/components/Orb')
  },

  computed: {

  },

  mounted() {


  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.hero {
  // background: linear-gradient(180deg, #FFFFFF 0%, #E7E7E7 68.71%, #D0D0D0 100%);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  transform: translateX(0); // prevents orbs from causing overflow

  .text {
    max-width: 650px;

    p,
    h1 {
      color: #082D3C;
      z-index: 1;
    }

    .buttons {
      z-index: 1;
    }

    .orbs {
      height: 100%;
      width: 100%;
      z-index: -1;
    }
  }
}
</style>
