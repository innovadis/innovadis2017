<template lang="pug">
.vision.container
  h2.dot.short Een aantal functionaliteiten

  .hidden-phone
    select-box(:items='selectBoxItems')

  .hidden-tablet.hidden-desktop
    .flex.flex-justify-center
      switch-box(:content='switchboxContent', :height='380')
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
          label: 'Orderinformatie',
          icon: 'advance',
          text: 'De dealers kunnen gemakkelijk orders plaatsen en volgen, de aankoopgeschiedenis en de productinformatie bekijken, offertes maken en prijzen berekenen.'
        },
        {
          label: 'Zoekfunctie',
          icon: 'database-view',
          text: 'Het portaal biedt een zoekfunctie waardoor de gebruikers sneller op een productcode of naam kunnen zoeken, of uitgebreide productgroep filters kunnen gebruiken.'
        },
        {
          label: 'Design',
          icon: 'fantasy',
          text: 'Het nieuwe internationale e-commerce detaillistplatform voldoet aan alle nieuwste normen en eisen qua design. Het platform is responsief zodat de gebruikers het portaal altijd kunnen bezoeken en hun orders kunnen plaatsen, zelfs als zij onderweg zijn.'
        },
        {
          label: 'Realtime',
          icon: 'clock',
          text: 'Met toegankelijke en gebruikersvriendelijke portalen stimuleren wij de communicatie tussen cliënten onderling en tussen cliënten en zorgverleners.'
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
