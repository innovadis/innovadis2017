<template lang="pug">
.case-comfoor
  .container.pt
    h1.dot {{ title }}
    p.intro {{ lead }}

  .hero

  .hidden-phone
    .container.pt.pb
      .padded-container
        h2.dot {{ title1 }}
        p {{ text1 }}
        p Het portaal zal een breed scala aan functies en processen ondersteunen. Bij de ontwikkeling van dit portaal staat de uiteindelijke gebruiker centraal. In het geval van Comfoor zijn dit drie doelgroepen; de audicien, de industrie klant en de PBM (persoonlijke beschermingsmiddelen) klant.
        p 50% van het assortiment zijn direct bestelbare accessoires, daarnaast zijn er de maatwerk (Custom-Fit) producten en het Uni-Fit Pluggerz assortiment. Al deze producten moeten beschikbaar zijn in het portaal. Door alles overzichtelijk in één portaal aan te bieden moeten de verschillende vooraf opgestelde doelen worden behaald. Een aantal daarvan zijn:
        ul
          li Efficiëntere dienstverlening per doelgroep
          li Klanttevredenheid en -loyaliteit vergroten (door het ontzorgen van de klant)
          li Vergroten selfservice mogelijkheden
          li Betere informatievoorziening
          li Verbeteren inzicht in behoeften en gedrag van de klanten
          li Vereenvoudigen van beheer en onderhoud (door Comfoor zelf)
          li Optimaliseren van de gehele klantbeleving

    .gray
      .container.pt.pb
        .padded-container
          h3 {{ title2 }}
          p {{ text2 }}
          img(src="/static/cases/Comfoor/Comfoor_BigScreen.png", width="100%")

    Vision

    .gray
      .container.flex.pt
        phones-side-by-side
        .flex.flex-column
          h3 {{ title3 }}
          p {{ text3 }}

  //- Phone only
  .hidden-desktop.hidden-tablet
    .gray.container.pt
      h2.text-center {{ title1 }}
      p.text-center {{ text1 }}

      .with-image.flex.pt.flex-align-center
        .flex.flex-column
          h3(style='margin-bottom: 20px') {{ title2 }}
          p Apollo Vredestein had al een internationaal B2B e-commerce platform, maar dat was alleen beschikbaar voor wederverkopers in Nederland.
          inno-button(label='Meer info', small, yellow, @click='dialogOpen1 = true')
        img(src='/static/cases/Comfoor/Comfoor_Small.png', width='200px', style='margin: 0 -20px 20px 20px')

        info-dialog(v-model='dialogOpen1', closable, v-if='dialogOpen1')
          .dialog-container
            p {{ text2 }}

    .gray.container.pt.flex.flex-column.flex-align-center
      h3 {{ title3 }}
      p.text-center Alles bij elkaar bespaart dit Apollo Vredestein veel tijd en geld. Dit geldt ook voor hun internationale dealers die minder tijd besteden aan het plaatsen en verwerken van orders.
      inno-button(label='Meer info', small, yellow, @click='dialogOpen2 = true', style='z-index: 1')
      img(src="/static/cases/Comfoor/Comfoor_BigScreen.png", width="100%", style='margin: 20px 0')


      info-dialog(v-model='dialogOpen2', closable, v-if='dialogOpen2')
        .dialog-container
          p {{ text3 }}

  .container.pt
    send-box-with-slot.margin-top(flip, subject='Reactie op de Comfoor referentie')
      div
        img(src='/static/images/Jordy.png')
      h2.dot Bel of mail Jordy Goorman
      p Bel mij op #[a(href='tel:+31617234511') 06 172 345 11] of laat hiernaast een bericht achter en ik bel je terug!
</template>

<script>
export default {
  components: {
    Orb: require('src/components/Orb'),
    PhoneOrbs: require('./PhoneOrbs'),
    PhonesSideBySide: require('./PhonesSideBySide'),
    PhonesOverlap: require('./PhonesOverlap'),
    SendBoxWithSlot: require('src/components/SendBox/SendBoxWithSlot'),
    ButtonAlternate: require('src/components/ButtonAlternate'),
    InnoButton: require('src/components/Button'),
    InfoDialog: require('src/components/Feed/Dialog'),
    Vision: require('./Vision')
  },

  data() {
    return {
      title: 'Comfoor',
      lead: 'Comfoor ontwikkelt, produceert en levert al ruim 30 jaar, wereldwijd, verrassend innovatieve topproducten op het gebied van gehoorbescherming en gehoorverbetering. De modernste technieken en continue innovatie zijn belangrijke pijlers voor Comfoor.',
      title1: 'Wat maakt Comfoor zo uniek?',
      text1: 'Comfoor heeft ruime ervaring in het vakgebied en blijft verrassend innovatief. Ze zijn gepassioneerd en ontwikkelen met trots, doelgerichtheid en liefde en dat zie je terug in hun producten. Comfoor heeft zelf ook luisterende oren, ze denken mee in oplossingen en nemen verantwoordelijkheid voor anderen, zichzelf en de wereld van morgen. Comfoor levert twee merken; Comfoor en Pluggerz, beide op maat gemaakte producten. Samen zijn ze goed voor meer dan 500 producten (gehoorbescherming en gehoor verbetering).',
      dialogOpen1: false,
      title2: 'De case',
      text2: 'Comfoor heeft meerdere systemen waarmee gewerkt wordt en dit wordt steeds inefficiënter. Het gemak van het gebruik van de verschillende systemen is inmiddels steeds minder groot. Zo is zijn er bijvoorbeeld een ERP-systeem, een CRM-systeem en een configurator voor klanten maatwerk. Comfoor heeft Innovadis gevraagd om een online portaal te bouwen, die uiteraard volledig geïntegreerd is met de huidige IT-systemen en die de interactie tussen klant en consument bevordert en vereenvoudigd.',
      dialogOpen2: false,
      title3: 'Continue in ontwikkeling',
      text3: 'Ondanks de vele functionaliteiten die al beschikbaar zijn, blijft het portaal in ontwikkeling en zijn er nog meerdere wensen die nog doorgevoerd moeten worden. Zo blijven we er voor zorgen dat alle laatste wensen, mogelijkheden en eisen verwerkt zijn in het portaal.',
      dialogOpen3: false
    }
  },

  head: {
    title: {
      inner: 'Comfoor'
    },
    meta() {
      return [
        // Google+
        { itemprop: 'name', content: this.title },
        { itemprop: 'description', content: this.lead },

        // Twitter
        { name: 'twitter:title', content: this.title },
        { name: 'twitter:description', content: this.lead },

        // Facebook
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.lead }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.case-comfoor {
  .gray {
    background: #F1F1F1;
  }

  .small {
    max-width: 50%;

    @include phablet {
      max-width: none;
    }
  }

  .hero {
    margin-top: $gutter;
    background-image: url('/static/cases/Comfoor/ComfoorCaseHeader.png');
  }

  .with-macbook {
    max-width: 50%;
    margin-bottom: 200px;

    .image {
      min-width: 400px !important;
    }

    .orbs {
      display: flex;
      flex-direction: column;

      .row {
        display: flex;
        padding: 10px 0;
        line-height: 50px;

        .orb-wrapper {
          margin-right: 65px;
        }
      }
    }
  }

  .dialog-container {
    padding: 20px;

    p {
      margin: 0;
    }
  }

  .sendboxwithslot {
    margin-top: 100px;
  }
}
</style>
