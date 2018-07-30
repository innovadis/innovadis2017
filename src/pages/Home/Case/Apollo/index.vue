git a<template lang="pug">
.case-apollo
  .container.pt
    h1.dot {{ title }}
    p.intro(v-html='lead')

  .hero

  .hidden-phone
    .gray.pt.pb
      .container

          h2.question {{ title1 }}
          p(v-html="text1")

    .container.pt.flex.flex-justify-center.flex-column-phablet.flex-align-center.flex-wrap
      .flex.flex-column
        h3 {{ title2 }}
        p(v-html="text2")
      .flex
        p Daarnaast formuleerde <a class="case__link" href="https://www.vredestein.nl/" target="_blank">Apollo Vredestein</a> een aantal doelen die het nieuwe platform aan moest kunnen:
          ul.case__list
            li Een verhoging van de online verkoop
            li Het portaal moet efficiënter en meer gebruikersvriendelijk zijn
            li Het portaal moet een B2B zelfbedieningsmodule bevatten
            li Het portaal moet toegang geven tot meer inzicht en gegevens over de online activiteiten en de interactie met de klant.

        .phone-container
          .phone
    Vision

    .gray
      .container.flex
        phones-side-by-side
        .flex.flex-column
          h3 {{ title3 }}
          p(v-html="text3")

  //- Phone only
  .hidden-desktop.hidden-tablet
    .gray.container.pt
      h2.text-center {{ title1 }}
      p.text-center(v-html="text1")

      .with-image.flex.pt.flex-align-center
        .flex.flex-column
          h3(style='margin-bottom: 20px') {{ title2 }}
          p <a class="case__link" href="https://www.vredestein.nl/" target="_blank">Apollo Vredestein</a> had al een internationaal B2B e-commerce platform, maar dat was alleen beschikbaar voor wederverkopers in Nederland.
          inno-button(label='Meer info', small, yellow, @click='dialogOpen1 = true')
        img(src='/static/cases/Vredestein/Apollo_Tablet_Small@2x.png', width='300px', style='margin: 0 -100px 20px 5px')

        info-dialog(v-model='dialogOpen1', closable, v-if='dialogOpen1')
          .dialog-container
            p(v-html="text2")

    .gray.container.pt.flex.flex-column.flex-align-center
      h3 {{ title3 }}
      p.text-center Alles bij elkaar bespaart dit <a class="case__link" href="https://www.vredestein.nl/" target="_blank">Apollo Vredestein</a> veel tijd en geld. Dit geldt ook voor hun internationale dealers die minder tijd besteden aan het plaatsen en verwerken van orders.
      inno-button(label='Meer info', small, yellow, @click='dialogOpen2 = true', style='z-index: 1')
      img(src='/static/cases/Vredestein/ApolloVredestein_Small.png', width='100%', style='margin: 20px 0')

      info-dialog(v-model='dialogOpen2', closable, v-if='dialogOpen2')
        .dialog-container
          p(v-html="text3")

  .container
    send-box-with-slot.margin-top(flip, subject='Reactie op de Apollo Vredestein referentie')
      div
        img(src='/static/images/Jordy.png')
      h2.dot Bel of mail Jordy
      p Bel mij op #[a(href='tel:+31617234511') 06 172 345 11] of laat hiernaast een bericht achter en ik bel je terug!
</template>

<script>
export default {
  components: {
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
      title: 'Apollo Vredestein',
      lead: '<a class="case__link" href="https://www.vredestein.nl/" target="_blank">Apollo Vredestein</a> is een toonaangevende bandenproducent voor personenwagens, en voor industrieel en agrarisch gebruik. <a class="case__link" href="https://www.vredestein.nl/" target="_blank">Apollo Vredestein</a> begon in 1909 als single brand organisatie, maar in de loop van de jaren is de organisatie gegroeid en uitgebreid met meerdere merken. <a class="case__link" href="https://www.vredestein.nl/" target="_blank">Apollo Vredestein</a> heeft een breed scala aan klanten, heeft meerdere productieactiviteiten in Afrika, Azië en Europa en exporteert haar banden naar meer dan 100 landen. Met als belangrijkste merken Apollo en Vredestein.',
      title1: 'Wat maakt Apollo Vredestein zo uniek',
      text1: '<a class="case__link" href="https://www.vredestein.nl/" target="_blank">Apollo Vredestein</a> gelooft in het geven van nieuwe mogelijkheden aan klanten waarmee ze zelf in controle zijn en helpt hen de weg voor zich te veroveren. <a class="case__link" href="https://www.vredestein.nl/" target="_blank">Apollo Vredestein</a> stelt individuen in staat om hun eigen potentieel te bereiken wanneer het gaat om (auto)rijden en in elke fase van het leven, zoals ook hun slogan weerspiegelt; ‘Go the distance’.',
      dialogOpen1: false,
      title2: 'De case',
      text2: '<a class="case__link" href="https://www.vredestein.nl/" target="_blank">Apollo Vredestein</a> had al een internationaal B2B e-commerce platform, maar dat was alleen beschikbaar voor wederverkopers in Nederland. Er moest een nieuw internationaal e-commerce platform komen om zo ook de internationale wederverkopers te kunnen bedienen. Dit platform moest voorzien worden van internationale orders, betalingen, verzending, BTW en alle andere internationale e-commerce voorschriften die daarbij komen kijken',
      dialogOpen2: false,
      title3: 'Grote voordelen',
      text3: 'Alles bij elkaar bespaart dit <a class="case__link" href="https://www.vredestein.nl/" target="_blank">Apollo Vredestein</a> veel tijd en geld. Dit geldt ook voor hun internationale dealers die minder tijd besteden aan het plaatsen en verwerken van orders, tijd die zij vervolgens kunnen gebruiken om meer omzet en orders te genereren, waardoor het resultaat van <a class="case__link" href="https://www.vredestein.nl/" target="_blank">Apollo Vredestein</a> verbetert. Dubbele winst!',
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

.case-apollo {

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
    background-image: url('/static/cases/Vredestein/ApolloVredesteinCaseHeader@2x.jpg');
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

.phone-container {
  position: relative;
  min-width: 50%;
  left: 20%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @include phablet {
    left: 0;
    top: 120px;
    width: 25%;
  }

  @include phone {
    width: 100%;
  }

  .phone {
    background: url('/static/cases/Vredestein/Apollo_Tablet_Small@2x.png') no-repeat center;
    background-size: contain;
    height: 364px;
    width: 100%;
    position: relative;
    z-index: 1;
    left: -40px;

    @include tablet {
      top: -60px;
    }
  }
}

</style>
