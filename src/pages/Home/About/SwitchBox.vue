<template lang="pug">
.switchbox(ref='switchbox')
  icon-effect(iconUrl='/static/images/svg/innovadis_vakmanschap_icon_black.svg', ref='iconEffect0')
  icon-effect(iconUrl='/static/images/svg/innovadis_persoonlijk_icon_black.svg', ref='iconEffect1')
  icon-effect(iconUrl='/static/images/svg/innovadis_innovatie_icon_black.svg', ref='iconEffect2')

  transition-group.flex.flex-justify-center(name='flyleft', mode='out-in')
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
      title='Persoonlijk',
      text='We zijn zowel intern als extern informeel en professioneel. Wij gaan een duurzame samenwerking aan met al onze relaties. Wij begrijpen de behoeften van onze opdrachtgevers en vinden een nieuwe route wanneer deze verandert. Enthousiasme is onze drijfveer.',
      imageUrl='/static/images/cover/cultuur_persoonlijk.jpg',
      iconUrl='/static/images/svg/innovadis_persoonlijk_icon.svg'
      )

    box(
      v-if='selectedIndex === 2',
      key='box2',
      title='Innovatie',
      text='De techniek heeft voor ons geen geheimen. Onze ontwikkelaars gaan geen uitdaging uit de weg, zij zoeken ze op. Ons eeuwige verlangen om te ontdekken brengt ons langs andere werelden en geeft ons nieuwe inzichten. Het stelt ons in staat om innovatieve oplossingen te ontwikkelen voor onze opdrachtgevers en hun klanten.',
      imageUrl='/static/images/cover/cultuur_collegas.jpg',
      iconUrl='/static/images/svg/innovadis_innovatie_icon.svg'
      )

  .icons
    i.icons8-advance.flip(@click='next', :class='{ disabled: buttonDisabled }')
</template>

<script>
export default {
  components: {
    Box: require('./Box'),
    IconEffect: require('./IconEffect')
  },

  data () {
    return {
      selectedIndex: 0,
      buttonDisabled: false
    }
  },

  methods: {
    setSelectedIndex (index) {
      this.selectedIndex = index

      this.$refs['iconEffect' + index].animate()
      this.$refs['iconEffect' + 0].reset()
      this.$refs['iconEffect' + 1].reset()
      this.$refs['iconEffect' + 2].reset()

      this.buttonDisabled = true

      setTimeout(() => {
        this.buttonDisabled = false
      }, 2000)
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
      background: white;
      box-shadow: 0 4px 5px 0 $gray1;

      &:hover {
        color: $inno-blue;
        box-shadow: 0 4px 10px 4px $gray1;
      }

      &.flip {
        transform: rotate(180deg);
        box-shadow: 0 -4px 5px 0 $gray1;

        &:hover {
          box-shadow: 0 -4px 10px 4px $gray1;
        }
      }

      &.hidden {
        visibility: hidden;
      }

      &.disabled {
        pointer-events: none;
        color: $gray1;
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
