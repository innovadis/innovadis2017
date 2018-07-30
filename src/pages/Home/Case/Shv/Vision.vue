<template lang="pug">
.vision.container
  h2.dot.short Een aantal functionaliteiten

  .hidden-phone
    select-box(:items='selectBoxItems', class="select-box__case")

  .hidden-tablet.hidden-desktop
    .flex.flex-justify-center
      switch-box(:content='switchboxContent', :height='500')
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
          label: 'Realtime inzage in lopende financiële zaken',
          icon: 'clock',
          text: 'De klant heeft 24/7 inzage in de stand van zaken. Alle overzichten zijn altijd realtime in te zien, waardoor ze nooit achter hoeven te lopen in de informatievoorziening. De lopende betalingen, de status van de schuldregeling en de status van het sociaal krediet zijn allen direct inzichtelijk. Zo kan de klant altijd de aanvraag inzien, de huidige (aflos)stand per schuldeiser bekijken, statussen van goedkeuring/afwijzingen inzien, afbetalingen zien, openstaande posten weergeven etc.'
        },
        {
          label: 'Veilige toegang',
          icon: 'security',
          text: 'Doordat het portaal niet alleen persoonlijke maar ook financiële gegevens weergeeft is een veilige toegang een must. Dankzij het inloggen via DigiD en de garantie op de regeling van veiligheidszaken (inclusief een jaarlijkse toetsing van Logius) wordt de veiligheid van gegevens gewaarborgd.'
        },
        {
          label: 'Budgetbeheer en zelf financiële zaken regelen',
          icon: 'hand-receiving-money',
          text: 'De klant kan via het portaal betalingsverzoeken indienen. De persoonlijke consulent controleert deze en handelt het verzoek af. Tevens kan de klant de periodiek ingeboekte betalingen inzien, wijzigen of nieuwe verzoeken indienen. Indien de klant recht heeft op een extra budget, dan kan de klant beschikken over eigen te besteden geld. In dit geval kan de klant via het portaal een opname doen uit budgetbeheerpotje om zo vrij besteedbaar geld op de eigen rekening te ontvangen.'
        },
        {
          label: 'APP',
          icon: 'mobile-phone',
          text: 'Veel klanten die het portaal gebruikten deden dit via de mobiele site, dit ging om zo’n 60%-70% van het portaal bezoek. Om deze reden is er naast een portaal ook een app ontwikkeld. De klant kan via deze app van dezelfde functionaliteiten gebruikmaken als in het portaal. Echter, dankzij de app is dit nu ook mobiel goed toegankelijk en is de weergave geoptimaliseerd voor mobiel gebruik.'
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
