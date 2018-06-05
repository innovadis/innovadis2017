<template lang="pug">
.case-socialhof
  .container.pt
    h1.dot {{ title }}
    p.intro {{ lead }}

  .hero

  .hidden-phone
    .gray
      .container.pt
        .padded-container
          h2.dot {{ title1 }}
          p De volgende vraagstukken stonden centraal:
          
          ul  
            li Hoe kunnen we vragen van de burger over hun lopende financiële zaken beter beantwoorden?
            li Hoe kan de dienstverlening transparanter en toegankelijker worden gemaakt?
            li Hoe kan een burger met schuldhulpverlening meer zelfredzaam worden?
            li Hoe kan de afhandeling van klantverzoeken en betalingen efficiënter worden uitgevoerd?

          p {{ text1 }}

          p Er is een web portaal ontwikkeld waarmee gemeenten hun klanten inzage kunnen geven in hun schuldhulpverlening. Het portaal is een vorm van internetbankieren die volledig is toegespitst op burgers die in de schuldhulpverlening zitten. Deze vorm van internetbankieren ondersteunt de burger om weer zelfredzaam te worden. 

          p Klanten loggen in via DigiD op het portaal, waarbij voldaan wordt aan alle normen van het ICT beveiligingsassessment van Logius. Ze hebben 24/7 (realtime) inzage in hun lopende betalingen, schuldregeling en lening bij de gemeente (de gemeenten noemen dit ook wel een sociaal krediet). Onder begeleiding regelen zij zelf hun financiële zaken via het portaal, waarmee de zelfredzaamheid wordt vergroot en de schuldhulpverlening transparanter wordt.


      .container.pt.flex.flex-justify-center.flex-column-phablet.flex-align-center
        .padded-container.flex.flex-column.small
          h3 {{ title2 }}
          p {{ text2 }}

          h4 Communicatie tool
          p Een mooi voorbeeld van een verdere ontwikkeling is de communicatiefunctie (een vorm van een berichten box/mailfunctie) binnen de afgeschermde omgeving. Via het portaal of de app kan de klant inzien hoe de communicatie met de schuldeisers ervoor staat. Ook biedt het de klant de mogelijkheid om te communiceren op een eigen persoonlijke omgeving met zijn consulent(en). De gemeente bepaalt vooraf welke consulent aan de klant wordt gekoppeld. Via de communicatie tool kan de klant informatie uitwisselen over de diensten en producten met zijn persoonlijk toegewezen consulent(en).
        phone-orbs

    .gray
      .container.flex.pt
        phones-side-by-side
        .flex.flex-column
          h3 {{ title3 }}
          p {{ text3 }}

    Vision


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
    send-box-with-slot.margin-top(flip, subject='Reactie op de SHV referentie')
      div
        img(src='/static/cases/pim/alex.jpg')
      h2.dot Bel of mail Alexander
      p Bel mij op #[a(href='tel:+31649879390') 06 498 793 90] of laat hiernaast een bericht achter en ik bel je terug!
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
      title: 'Webportaal SHV',
      lead: 'Gemeenten bieden burgers schuldhulpverlening aan om schulden en financiële vraagstukken op te lossen. Verschillende gemeenten liepen tegen een aantal vraagstukken aan bij het uitvoeren van de schuldhulpverlening. Samen met deze gemeenten is er bekeken wat er nodig is om de vraagstukken van zelfredzaamheid, transparantie en efficiëntere dienstverlening aan te pakken.',
      title1: 'De case',
      text1: 'Er is bekeken hoe een internetoplossing kan bijdragen aan de vraagstukken en de informatievoorziening naar de burger (hun klant) toe. Een vereiste daarbij is het werken met een DigiD inlog. Er wordt gewerkt met privacygevoelige en financiële data van burgers, hierbij moet natuurlijk voldaan worden aan de strenge eisen van informatiebeveiliging.',
      dialogOpen1: false,
      title2: 'Continue in ontwikkeling',
      text2: 'Inmiddels loopt de samenwerking al meer dan zes jaar. Aan de oplossing is en wordt continu ontwikkeld met een vast team. Momenteel zijn er vijftien gebruikers aangesloten aan het web portaal, waarin de betrouwbaarheid en veiligheid geborgd zijn dankzij het ICT-beveiligingsassessment.',
      dialogOpen2: false,
      title3: 'Groot voordeel',
      text3: 'De ervaring met het web portaal leert dat burgers in de schuldhulpverlening een grote informatiebehoefte hebben, over de lopende betalingen, financiële mogelijkheden en het aflossen van de schulden. Het portaal en de app maken dit mogelijk. Nog belangrijker zijn de positieve signalen die de gemeenten krijgen van burgers over het gebruik van het portaal. Zij ervaren de informatie als overzichtelijk en helder en zijn blij dat ze zelf veel kunnen regelen via het portaal en/of de app. Zo maakt 93% van de klanten in de schuldhulpverlening gebruik van het portaal en/of de app. Van deze groep klanten logt maar liefst 60% maandelijks in en zelfs 10% dagelijks. Op deze manier wordt een grote groep burgers geholpen met hun zelfredzaamheid.',
      dialogOpen3: false
    }
  },

  head: {
    title: {
      inner: 'Webportaal SHV'
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

.case-socialhof {
  .gray {
    background: linear-gradient(180deg, #FFFFFF 0%, #F1F1F1 100%);
  }

  .small {
    max-width: 50%;

    @include phablet {
      max-width: none;
    }
  }

  .hero {
    margin-top: $gutter;
    background-image: url('/static/cases/socialhof/banner.png');
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