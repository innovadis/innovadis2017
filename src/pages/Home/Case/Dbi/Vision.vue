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
          label: 'Adressen & locaties',
          icon: 'waypoint-map',
          text: 'Alle (breng)locaties staan in het portaal, gekoppeld aan containers en GPS locaties. Tevens is alles beheersbaar; toevoegen, verwijderen, koppelen en locaties tonen op een kaart. '
        },
        {
          label: 'Containers',
          icon: 'empty-trash',
          text: 'Zowel de ondergrondse als bovengrondse containers zijn volledig in kaart. Chipnummers zijn gekoppeld, te ondernemen/ondernomen acties zijn zichtbaar, locaties zijn volledig in zicht en alles is koppelbaar. Daarnaast is het gebruik inzichtelijk; aantal ledigingen, gekoppelde passen, transacties etc.'
        },
        {
          label: 'Servicerondes',
          icon: 'calender',
          text: 'Het portaal geeft een gedetailleerd overzicht van alle servicerondes. Tevens kunnen deze bewerkt worden en acties kunnen worden gekoppeld aan de rondes. Het KCC (Klanten Contact Centrum) van gemeenten kan inwoners direct aangeven wanneer hun klacht/reparatie wordt afgehandeld. Daarnaast kunnen veldwerkers worden toegewezen, statussen worden gewijzigd en werkbonnen kunnen worden beheerd.'
        },
        {
          label: 'Gebruikersbeheer',
          icon: 'multiple-users',
          text: 'Gebruikers kunnen worden aangemaakt, geregistreerd, verwijderd en geblokkeerd, inclusief bijbehorende rollen en rechten. Gemeentes kunnen gemakkelijk worden toegevoegd en toegewezen aan de containers.'
        },
        {
          label: 'Routes',
          icon: 'direction-arrow',
          text: 'Met toegankelijke en gebruikersvriendelijke portalen stimuleren wij de communicatie tussen cliënten onderling en tussen cliënten en zorgverleners.'
        },
        {
          label: 'Handheld',
          icon: 'ipad-and-iphone',
          text: 'Een handheld device is beschikbaar waarin service rondes beschikbaar zijn. Deze handheld werkt realtime en online. Acties behorende bij de rondes (service, onderhoud en opaalrondes) zijn hierin gekoppeld. Tevens kunnen deze aangepast of uitgebreid worden. Ook is de handheld offline beschikbaar waardoor er altijd mee gewerkt kan worden.'
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
