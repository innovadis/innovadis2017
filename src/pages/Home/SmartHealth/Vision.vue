<template lang="pug">
.vision.container
  h2.dot.short Onze visie voor de zorg
  p Door onder andere de toenemende vergrijzing en zorgvraag staat onze zorg staat midden in de digitale transformatie. Wij geloven dat technologie een noodzakelijke bijdrage kan leveren aan de toegankelijkheid en kwaliteit van de zorg. Onze oplossingen ondersteunen cliënten, mantelzorgers en zorgverleners in hun onderlinge communicatie.

  .hidden-phone
    select-box(:items='selectBoxItems')

  .hidden-tablet.hidden-desktop
    .flex.flex-justify-center
      switch-box(:content='switchboxContent', :height='380')

  h2.dot.margin-top Smart health in de praktijk
  p Dat Smart health bij Innovadis niet bij een visie blijft, bewijzen de ervaringen van onze opdrachtgevers. Voor veel bedrijven binnen de sector zijn wij gesprekspartner, adviseur maar bovenal leverancier van hoogwaardige technologische oplossingen die bijdragen aan hun succes.

  p Wij geloven in de kracht van samenwerken, bundelen en delen van kennis en samen tot de beste oplossing komen. Binnen de zorg werken we o.a. voor Livio en De Vriezenhof.
</template>

<script>
export default {
  components: {
    SelectBox: require('src/components/SelectBox'),
    SwitchBox: require('src/components/SwitchBox')
  },

  data () {
    return {
      selectBoxItems: [
        {
          label: 'Zelfredzaamheid verhogen',
          icon: 'refresh',
          text: 'Met smart-homes en intelligente toepassingen laten we mensen zolang mogelijk de regie over het eigen leven behouden.'
        },
        {
          label: 'Efficiency verbeteren',
          icon: 'router',
          text: 'Met praktische apps en door het koppelen van systemen, verlichten we de administratieve last van de zorgverleners, waardoor er meer tijd is voor contact met de cliënt.'
        },
        {
          label: 'Eenzaamheid verminderen',
          icon: 'database-view',
          text: 'Met toegankelijke en gebruikersvriendelijke portalen de communicatie tussen cliënten onderling en tussen cliënten en zorgverleners stimuleren.'
        }
      ]
    }
  },

  computed: {
    switchboxContent () {
      return this.selectBoxItems.map(x => {
        return {
          title: x.label,
          text: x.text
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.vision {
  padding-top: 100px;
  padding-bottom: 100px;

  h2.short {
    max-width: 400px;
  }

  .margin-top {
    margin-top: 80px;
  }

  .button {
    font-family: Bitter;
  }
}
</style>
