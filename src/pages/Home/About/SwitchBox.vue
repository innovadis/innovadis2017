<template lang="pug">
.switchbox(ref='switchbox')
  icon-effect(iconUrl='/static/images/svg/innovadis_vakmanschap_icon_black.svg', ref='iconEffect0')
  icon-effect(iconUrl='/static/images/svg/innovadis_persoonlijk_icon_black.svg', ref='iconEffect1')
  icon-effect(iconUrl='/static/images/svg/innovadis_innovatie_icon_black.svg', ref='iconEffect2')

  transition-group.flex.f.flex-justify-center(name='flyleft', mode='out-in')
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
    i.icons8-refresh(@click='next')
</template>

<script>
import SmoothScroll from 'smooth-scroll'

const scroll = new SmoothScroll()
scroll.init({
  speed: 1000
})

export default {
  components: {
    Box: require('./Box'),
    IconEffect: require('./IconEffect')
  },

  data () {
    return {
      selectedIndex: 0
    }
  },

  methods: {
    setSelectedIndex (index) {
      this.selectedIndex = index

      this.$refs['iconEffect' + index].animate()
    },

    next () {
      if (this.selectedIndex === 2) {
        this.setSelectedIndex(0)
        return
      }

      this.setSelectedIndex(this.selectedIndex + 1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.switchbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  justify-content: space-between;
  height: 750px;

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

.flyleft-enter-active,
.flyleft-leave-active {
  transition: all 0.5s ease;
}

.flyleft-enter,
.flyleft-leave-to {
  opacity: 0.5;
}

.flyleft-enter {
  transform: translateX(100vw) rotate(15deg);
}

.flyleft-leave-to {
  transform: translateX(-100vw) rotate(5deg);
}
</style>
