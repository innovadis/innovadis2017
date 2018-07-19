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
          label: 'Bestelmogelijkheden',
          icon: 'shopping-cart',
          text: 'Audiciens zien in het portaal een overzicht van hun bestellingen. Binnen het overzicht is per bestelling de status en details zichtbaar en kan er worden gezocht en gefilterd binnen de bestellingen.'
        },
        {
          label: 'Medewerkersoverzicht',
          icon: 'human-resource',
          text: 'Binnen het portaal kunnen verschillende medewerkers inloggen. Elke medewerker heeft een eigen account waarmee bestellingen ingevoerd, gewijzigd of geannuleerd kunnen worden. Uiteraard kan er ook een lijst worden uitgedraaid van de medewerkers en de bijbehorende bestellingen, medewerkers kunnen worden toegevoegd of verwijderd. Bij alle opties is er uiteraard rekening gehouden met de bescherming van de gegevens van de medewerkers.'
        },
        {
          label: 'Gegevens beheren',
          icon: 'user',
          text: 'De gebruikers van Mijn Comfoor kunnen te allen tijde inzicht krijgen in hun bestel- en accountgegevens. Accountgegevens kunnen worden ingezien, gecontroleerd, aangevuld en gewijzigd.'
        },
        {
          label: 'Nazorg & service',
          icon: 'chat',
          text: 'De industrieklant kan nazorgactiviteiten vastleggen in het portaal en heeft hierdoor een goed overzicht van alle acties zoals de aanmetingen en testresultaten. Tevens is er een servicedesk beschikbaar binnen het portaal waardoor de eindklant direct antwoord op zijn vragen kan terugvinden of opvragen d.m.v. een chatfunctie.'
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
