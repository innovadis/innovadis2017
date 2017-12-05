<template lang="pug">
.switchbox(ref='switchbox')
  transition-group(name='slideleft', mode='out-in')
    box(
      v-if='selectedIndex === 0',
      key='box0',
      title='Vakmanschap',
      text='Jarenlange ervaring en intensief speurwerk heeft ons veel kennis gebracht. Onze oplossingen zijn niet vanzelfsprekend. Ze ontstaan door onze passie om de wereld te verbeteren met creativiteit en techniek. Kwaliteit is voor ons geen cijfer maar een blije relatie waarmee we aan het einde van de reis een groot stuk taart eten.',
      imageUrl='/static/images/cover/cultuur_vakmanschap.jpg',
      iconUrl='/static/images/svg/innovadis_vakmanschap_icon.svg'
      )

    box(
      v-if='selectedIndex === 1',
      key='box1',
      title='Vakmanschap1',
      text='Jarenlange ervaring en intensief speurwerk heeft ons veel kennis gebracht. Onze oplossingen zijn niet vanzelfsprekend. Ze ontstaan door onze passie om de wereld te verbeteren met creativiteit en techniek. Kwaliteit is voor ons geen cijfer maar een blije relatie waarmee we aan het einde van de reis een groot stuk taart eten.',
      imageUrl='/static/images/cover/cultuur_persoonlijk.jpg',
      iconUrl='/static/images/svg/innovadis_persoonlijk_icon.svg'
      )

    box(
      v-if='selectedIndex === 2',
      key='box2',
      title='Vakmanschap2',
      text='Jarenlange ervaring en intensief speurwerk heeft ons veel kennis gebracht. Onze oplossingen zijn niet vanzelfsprekend. Ze ontstaan door onze passie om de wereld te verbeteren met creativiteit en techniek. Kwaliteit is voor ons geen cijfer maar een blije relatie waarmee we aan het einde van de reis een groot stuk taart eten.',
      imageUrl='/static/images/cover/cultuur_collegas.jpg',
      iconUrl='/static/images/svg/innovadis_innovatie_icon.svg'
      )

  .icons
    i.icons8-advance.flip(@click='changeIndex(-1)', :class='{ hidden: selectedIndex === 0 }')
    i.icons8-advance(@click='changeIndex(1)', :class='{ hidden: selectedIndex === 2 }')
</template>

<script>
import SmoothScroll from 'smooth-scroll'

const scroll = new SmoothScroll()
scroll.init({
  speed: 1000
})

export default {
  components: {
    Box: require('./Box')
  },

  data () {
    return {
      selectedIndex: 0
    }
  },

  methods: {
    changeIndex (delta) {
      this.selectedIndex = Math.min(2, Math.max(0, this.selectedIndex + delta))
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.switchbox {
  width: 442px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;

  .icons {
    margin: 20px;
    z-index: 1;

    i {
      font-size: 40px;
      margin: 0 15px;
      border-radius: 50%;
      padding: 5px 6px;
      cursor: pointer;
      transition: $transition;
      display: inline-block;

      &:hover {
        box-shadow: 0 4px 5px 0 $gray1;
        color: $inno-blue;
      }

      &.flip {
        transform: rotate(180deg);

        &:hover {
          box-shadow: 0 -4px 5px 0 $gray1;
        }
      }

      &.hidden {
        visibility: hidden;
      }
    }
  }
}

$slideLeftDuration: 0.7s;

.slideleft-enter-active,
.slideleft-leave-active {
  transition: all $slideLeftDuration ease-in-out;
}

.slideleft-enter-active {
  transition-delay: $slideLeftDuration;
}

.slideleft-enter,
.slideleft-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
</style>
