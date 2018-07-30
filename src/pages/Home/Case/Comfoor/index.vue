<template lang="pug">
.case-comfoor
  .container.pt
    h1.dot {{ title }}
    p.intro(v-html="lead")

  .hero

  div
    .gray
      .container.pt.pb
          h2.question {{ title1 }}
          p(v-html="text1")


    .gray
      .container.pt
          h3 {{ title2 }}
          p(v-html="text2")

          img(src="/static/cases/Comfoor/Comfoor_BigScreen@2x.png", width="100%", class="case__image")

          p Het portaal zal een breed scala aan functies en processen ondersteunen. Bij de ontwikkeling van dit portaal staat de uiteindelijke gebruiker centraal. In het geval van <a class="case__link" href="https://www.comfoor.com/nl/" target="_blank">Comfoor</a> zijn dit drie doelgroepen; de audicien, de industrie klant en de PBM (persoonlijke beschermingsmiddelen) klant.
          p 50% van het assortiment zijn direct bestelbare accessoires, daarnaast zijn er de maatwerk (Custom-Fit) producten en het Uni-Fit Pluggerz assortiment. Al deze producten moeten beschikbaar zijn in het portaal. Door alles overzichtelijk in één portaal aan te bieden moeten de verschillende vooraf opgestelde doelen worden behaald. Een aantal daarvan zijn:
          ul.case__list
            li Efficiëntere dienstverlening per doelgroep
            li Klanttevredenheid en -loyaliteit vergroten (door het ontzorgen van de klant)
            li Vergroten selfservice mogelijkheden
            li Betere informatievoorziening
            li Verbeteren inzicht in behoeften en gedrag van de klanten
            li Vereenvoudigen van beheer en onderhoud (door Comfoor zelf)
            li Optimaliseren van de gehele klantbeleving

      Vision


      .container.flex.pt.flex-column-phablet.pb
        phones-side-by-side
        .flex.flex-column
          h3 {{ title3 }}
          p(v-html="text3")

  //- Phone only
  .hidden-desktop.hidden-tablet
    .gray.container.pt
      h2.text-center {{ title1 }}
      p.text-center(v-html="text1")

      .with-image.flex.pt.pb.flex-align-center
        .flex.flex-column
          h3(style='margin-bottom: 20px') {{ title2 }}
          p <a class="case__link" href="https://www.comfoor.com/nl/" target="_blank">Comfoor</a> heeft Innovadis gevraagd om een online portaal te bouwen, die uiteraard volledig geïntegreerd is met de huidige IT-systemen en die de interactie tussen klant en consument bevordert en vereenvoudigd.
          inno-button(label='Meer info', small, yellow, @click='dialogOpen1 = true')
        img(src='/static/cases/Comfoor/Comfoor_Small.png', width='200px', style='margin: 0 -20px 20px 20px')

        info-dialog(v-model='dialogOpen1', closable, v-if='dialogOpen1')
          .dialog-container
            p(v-html="text2")

    .gray.container.pt.flex.flex-column.flex-align-center
      h3 {{ title3 }}
      p.text-center Ondanks de vele functionaliteiten die al beschikbaar zijn, blijft het portaal in ontwikkeling en zijn er nog meerdere wensen die nog doorgevoerd moeten worden.
      img(src="/static/cases/Comfoor/Comfoor_BigScreen.png", width="100%", style='margin: 20px 0')

  .container
    send-box-with-slot.margin-top(flip, subject='Reactie op de Comfoor referentie')
      div
        img(src='/static/images/Jordy.png')
      h2.dot Bel of mail Jordy
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
      lead: '<a class="case__link" href="https://www.comfoor.com/nl/" target="_blank">Comfoor</a> ontwikkelt, produceert en levert al ruim 30 jaar, wereldwijd, verrassend innovatieve topproducten op het gebied van gehoorbescherming en gehoorverbetering. De modernste technieken en continue innovatie zijn belangrijke pijlers voor <a class="case__link" href="https://www.comfoor.com/nl/" target="_blank">Comfoor</a>.',
      title1: 'Wat maakt Comfoor zo uniek',
      text1: '<a class="case__link" href="https://www.comfoor.com/nl/" target="_blank">Comfoor</a> heeft ruime ervaring in het vakgebied en blijft verrassend innovatief. Ze zijn gepassioneerd en ontwikkelen met trots, doelgerichtheid en liefde en dat zie je terug in hun producten. <a class="case__link" href="https://www.comfoor.com/nl/" target="_blank">Comfoor</a> heeft zelf ook luisterende oren, ze denken mee in oplossingen en nemen verantwoordelijkheid voor anderen, zichzelf en de wereld van morgen. <a class="case__link" href="https://www.comfoor.com/nl/" target="_blank">Comfoor</a> levert twee merken; Comfoor en Pluggerz, beide op maat gemaakte producten. Samen zijn ze goed voor meer dan 500 producten (gehoorbescherming en gehoor verbetering).',
      dialogOpen1: false,
      title2: 'De case',
      text2: '<a class="case__link" href="https://www.comfoor.com/nl/" target="_blank">Comfoor</a> heeft meerdere systemen waarmee gewerkt wordt en dit wordt steeds inefficiënter. Het gemak van het gebruik van de verschillende systemen is inmiddels steeds minder groot. Zo is zijn er bijvoorbeeld een ERP-systeem, een CRM-systeem en een configurator voor klanten maatwerk. <a class="case__link" href="https://www.comfoor.com/nl/" target="_blank">Comfoor</a> heeft Innovadis gevraagd om een online portaal te bouwen, die uiteraard volledig geïntegreerd is met de huidige IT-systemen en die de interactie tussen klant en consument bevordert en vereenvoudigt.',
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
.case {
  &__image {
    margin-top: 40px;
    margin-bottom: 40px;
    align-self: center;
  }
  &__list {
    margin: 10px 0 0 0;
    padding-left: 20px;
    list-style: none;
    li {
      line-height: 28px;
      position: relative;
      padding-left: 15px;
      &::before {
        content: '';
        left: 0;
        top: 11px;
        display: inline-block;
        position: absolute;
        width: 8px;
        height: 8px;
        background: #000;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
}

.case-comfoor {
  .gray {
    background: $bg-gradient;
  }

  .small {
    max-width: 50%;

    @include phablet {
      max-width: none;
    }
  }

  .hero {
    margin-top: $gutter;
    background-image: url('/static/cases/Comfoor/ComfoorCaseHeader@2x.jpg');
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
