<template lang="pug">
.case-apollo
  .container.pt
    h1.dot {{ title }}
    p.intro {{ lead }}

  .hero

  .hidden-phone
    .gray.pt.pb
      .container
        .padded-container
          h2.dot {{ title1 }}
          p {{ text1 }}

    .container.pt.flex.flex-justify-center.flex-column-phablet.flex-align-center.flex-wrap
      .padded-container.flex.flex-column
        h3 {{ title2 }}
        p {{ text2 }}
      .padded-container.flex
        p Daarnaast formuleerde Apollo Vredestein een aantal doelen die het nieuwe platform aan moest kunnen:
          ul
            li Een verhoging van de online verkoop
            li Het portaal moet efficiënter en meer gebruikersvriendelijk zijn
            li Het portaal moet een B2B zelfbedieningsmodule bevatten
            li Het portaal moet toegang geven tot meer inzicht en gegevens over de online activiteiten en de interactie met de klant.

        PhoneOrbs  

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
        img(src='/static/images/smarthealth_mobile_orbs.png', height='280px', style='margin: 0 -20px 20px 20px')

        info-dialog(v-model='dialogOpen1', closable, v-if='dialogOpen1')
          .dialog-container
            p {{ text2 }}

    .gray.container.pt.flex.flex-column.flex-align-center
      h3 {{ title3 }}
      p.text-center Alles bij elkaar bespaart dit Apollo Vredestein veel tijd en geld. Dit geldt ook voor hun internationale dealers die minder tijd besteden aan het plaatsen en verwerken van orders.
      inno-button(label='Meer info', small, yellow, @click='dialogOpen2 = true', style='z-index: 1')
      img(src='/static/cases/socialhof/kiosk.png', height='250px', style='margin: 20px 0')

      info-dialog(v-model='dialogOpen2', closable, v-if='dialogOpen2')
        .dialog-container
          p {{ text3 }}

  .container.pt
    send-box-with-slot.margin-top(flip, subject='Reactie op de Apollo Vredestein referentie')
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
    Kiosk: require('./Kiosk'),
    PhonesSideBySide: require('./PhonesSideBySide'),
    PhonesOverlap: require('./PhonesOverlap'),
    Macbook: require('./Macbook'),
    SendBoxWithSlot: require('src/components/SendBox/SendBoxWithSlot'),
    ButtonAlternate: require('src/components/ButtonAlternate'),
    InnoButton: require('src/components/Button'),
    InfoDialog: require('src/components/Feed/Dialog'),
    Vision: require('./Vision')
  },

  data() {
    return {
      title: 'Apollo Vredestein',
      lead: 'Apollo Vredestein is een toonaangevende bandenproducent voor particuliere automobilisten en voor industrieel en agrarisch gebruik. Apollo Vredestein begon in 1972 als single brand organisatie, maar in de loop van de jaren is de organisatie gegroeid en uitgebreid met meerdere merken. Apollo Vredestein heeft een breed scala aan klanten, heeft meerdere productieactiviteiten in Afrika, Azië en Europa en exporteert haar banden naar meer dan 100 landen. Met als belangrijkste merken Apollo en Vredestein.',
      title1: 'Wat maakt Apollo Vredestein zo uniek?',
      text1: 'Apollo Vredestein gelooft in het geven van nieuwe mogelijkheden aan klanten waarmee ze zelf in controle zijn en helpt hen de weg voor zich te veroveren. Apollo Vredestein stelt individuen in staat om hun eigen potentieel te bereiken wanneer het gaat om (auto)rijden en in elke fase van het leven, zoals ook hun slogan weerspiegelt; ‘Go the distance’.',
      dialogOpen1: false,
      title2: 'De case',
      text2: 'Apollo Vredestein had al een internationaal B2B e-commerce platform, maar dat was alleen beschikbaar voor wederverkopers in Nederland. Er moest een nieuw internationaal e-commerce platform komen om zo ook de internationale wederverkopers te kunnen bedienen. Dit platform moest voorzien worden van internationale orders, betalingen, verzending, BTW en alle andere internationale e-commerce voorschriften die daarbij komen kijken',
      dialogOpen2: false,
      title3: 'Grote voordelen',
      text3: 'Alles bij elkaar bespaart dit Apollo Vredestein veel tijd en geld. Dit geldt ook voor hun internationale dealers die minder tijd besteden aan het plaatsen en verwerken van orders, tijd die zij vervolgens kunnen gebruiken om meer omzet en orders te genereren, waardoor het resultaat van Apollo Vredestein verbetert. Dubbele winst!',
      dialogOpen3: false
    }
  },

  head: {
    title: {
      inner: 'Apollo Vredestein'
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

.case-apollo {
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
    background-image: url('/static/cases/Vredestein/ApolloVredesteinCaseHeader.png');
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
