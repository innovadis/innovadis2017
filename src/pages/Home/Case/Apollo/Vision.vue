<template lang="pug">
.vision.container
  h2.dot.short Een aantal functionaliteiten

  .hidden-phone
    select-box(:items='selectBoxItems', class="select-box__case")

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
          icon: 'shopping-cart',
          text: 'Het portaal biedt de dealers de mogelijkheid om gemakkelijk orders te plaatsen en te volgen. Tevens kan de aankoopgeschiedenis en de productinformatie worden bekeken, offertes kunnen gemakkelijk vanuit het platform worden opgesteld en prijzen worden eenvoudig berekend. Hiermee biedt het portaal een uitgebreide orderfunctie, waardoor het order proces een stuk eenvoudiger en sneller is geworden.'
        },
        {
          label: 'Zoekfunctie',
          icon: 'search',
          text: 'Dankzij de uitgebreide zoekfunctie kunnen de gebruikers niet alleen sneller op een productcode of naam zoeken, maar ook uitgebreide productgroep filters kunnen worden toegepast. Dit scheelt de gebruiker een hoop tijd doordat er een stuk efficiënter gewerkt kan worden. Tevens geeft het een overzichtelijk zoekresultaat, wat prettig werkt.'
        },
        {
          label: 'Design',
          icon: 'design',
          text: 'Het nieuwe internationale e-commerce detaillistplatform voldoet aan alle nieuwste normen en eisen qua design. Het platform is responsief zodat de gebruikers het portaal altijd kunnen bezoeken en hun orders kunnen plaatsen, zelfs als zij onderweg zijn. Zo is het platform altijd beschikbaar voor de gebruikers, wel zo gemakkelijk en gebruiksvriendelijk.'
        },
        {
          label: 'Realtime',
          icon: 'clock',
          text: 'Het portaal is sterk geautomatiseerd, hierdoor wordt alles realtime bijgewerkt en teruggekoppeld. Zo berekent het systeem bijvoorbeeld automatisch de specifieke dealerprijs, de persoonlijke korting en de volumekorting voor de klant. Nadat de order is geplaatst en verwerkt wordt deze direct naar het back-end systeem gestuurd om verder verwerkt te kunnen worden. Zo zijn alle systemen met elkaar verbonden en altijd up-to-date.'
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
    margin-bottom: 15px;
  }

  .margin-top {
    margin-top: 80px;
  }

  .button {
    font-family: Bitter;
  }
}

</style>
