<template lang="pug">
.case-dbi
  .container.pt
    h1.dot {{ title }}
    p.intro(v-html="lead")

  .hero

  div
    .gray
      .container.pt.pb

          h2.question {{ title1 }}
          p(v-html="text1")

    .container.pt
      .flex.flex-column
        h3 {{ title2 }}
        p(v-html="text2")
        img(src='/static/cases/DBI/DBIBigScreen@2x.png', width='100%', class="case-image")

        p Het project zou een relatief snel project zijn, met een korte doorlooptijd en een snelle oplevering. Echter, na een eerste inventarisatie kwamen er al vele andere vragen naar boven. Martijn van Tongeren, Product Owner Innovadis: <i>“We hebben onze klant echt bij de hand meegenomen met alle mogelijkheden en de daarbij behorende mitsen en maren. Vanuit een technisch oogpunt komen er toch altijd weer extra vragen naar boven als je kijkt naar bepaalde functionaliteiten. De ideeën waren er zeker bij de klant, maar hoe dit er dan functioneel uit moest komen te zien was nog een grote vraag voor ze. We hebben onze klant kunnen voorzien van een gepersonaliseerd systeem die echt die functionaliteiten heeft waar behoefte aan is.“</i>
        p Doordat er meer mogelijkheden en daarbij steeds meer klantwensen boven tafel kwamen werd het project alsmaar groter. <i>“Dit project is voor ons een heel mooi voorbeeld waarin we echt hebben kunnen laten zien dat we meedenken met de klant, meerwaarde bieden, een optimaal resultaat willen behalen en daarin ook nog eens flexibel zijn. Niet alleen functioneel gezien leveren we een meerwaarde, ook qua ontwerp en design hebben een we een optimale combinatie van eenvoud, intuïtief gebruiksgemak, personalisering en helder design neer kunnen zetten.”</i>

    Vision

    .gray
      .container.flex.pb
        .flex.flex-column
          h2.dot Burger portaal
          p Dit portaal wordt ontwikkeld voor de burger, oftewel de gebruiker, zodat zij zelf inzicht krijgen in hun afvalgebruik. Het portaal wordt per gemeente ingericht, zo kan er qua design ook rekening worden gehouden met logo’s, afbeeldingen en kleurgebruik. De gebruiker krijgt hierdoor een vertrouwd gevoel van de eigen gemeente. Het portaal biedt een overzicht van de containers, transacties, actieve passen, stortlocaties, afhaalkalender etc.

          img(src='/static/cases/DBI/DBI_Small.png', width='80%', class="case-image")

          .flex.flex-column-phone
            .flex-column.flex-col
              h4 {{ title3 }}
              p(v-html="text2")
            .flex-column.flex-col
              h4 Afrekening per gewicht i.p.v. per transactie
              p Op dit moment wordt de consument afgerekend per transactie. Momenteel wordt er gekeken om dit te doen op basis van gewicht in plaats van op basis van aantallen. Dit betekent een ander afrekensysteem en dus een andere koppeling in ons portaal.





  //- Phone only
  .hidden-desktop.hidden-tablet
    .gray.container.pt
      h2.text-center {{ title1 }}
      p.text-center(v-html="text1")

      .with-image.flex.pt.pb.flex-align-center
        .flex.flex-column
          h3(style='margin-bottom: 20px') {{ title2 }}
          p <a class="case__link" href="http://www.dbics.nl" target="_blank">DBI</a> zocht een partij die hun ondergrondse en bovengrondse afvalcontainers beheersbaar kon maken in één systeem. Via een gezamenlijke partner kwamen ze bij ons terecht.
          inno-button(label='Meer info', small, yellow, @click='dialogOpen1 = true')
        img(src='/static/cases/DBI/DBI_Small.png', width="200px", style='margin: 0 -120px 20px 20px')


        info-dialog(v-model='dialogOpen1', closable, v-if='dialogOpen1')
          .dialog-container
            p(v-html="text2")

    .gray.container.pt.flex.flex-column.flex-align-center
      h3 {{ title3 }}
      p.text-center Door innovaties, nieuwe behoeftes en wijzigingen in de markt blijven we continue bezig. Zo zijn we nu al bezig met een opzet voor een Burger Portaal en weten we dat er in de toekomst een ander afrekensysteem komt die we moeten verwerken in ons systeem.
      inno-button(label='Meer info', small, yellow, @click='dialogOpen2 = true', style='z-index: 1')
      img(src='/static/cases/DBI/DBIBigScreen.png', width='100%', style='margin: 20px')


      info-dialog(v-model='dialogOpen2', closable, v-if='dialogOpen2')
        .dialog-container
          p(v-html="text3")

  .container
    send-box-with-slot.margin-top(flip, subject='Reactie op de DBI referentie')
      div
        img(src='/static/images/Jurgen.png')
      h2.dot Bel of mail Jurgen
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
      title: 'DBI Container Service',
      lead: `<a class="case__link" href="http://www.dbics.nl" target="_blank">DBI Container Service</a> is een totaaldienstverlener in de boven- en ondergrondse afvalcontainermarkt. Er wordt een totaalpakket van diensten aangeboden; afvalcontainers worden geleverd, geplaatst, beheerd, gerepareerd, gedistribueerd, geassembleerd, gekeurd en gereinigd. Flexibiliteit en kwaliteit zijn kenmerkend voor ze. De primaire afzetmarkt voor DBI is Nederland, maar ze opereren ook in België en Duitsland.`,
      title1: 'Wat maakt DBI zo uniek',
      text1: '<a class="case__link" href="http://www.dbics.nl" target="_blank">DBI</a> is een totaalleverancier. Naast het feit dat <a class="case__link" href="http://www.dbics.nl" target="_blank">DBI</a> alle soorten containers en toebehoren levert hebben ze ook een eigen infrabedrijf en hebben ze de automatisering volledig zelf in de hand. Zo heeft <a class="case__link" href="http://www.dbics.nl" target="_blank">DBI</a> dankzij het nieuwe portaal alle soorten containers nu geïntegreerd in één systeem en is alles realtime inzichtelijk. Het eigen callcenter van <a class="case__link" href="http://www.dbics.nl" target="_blank">DBI</a> staat klaar voor alle vragen van de klanten. Klantenservice ten top natuurlijk. Alle kennis en kunde is zelf in huis.',
      dialogOpen1: false,
      title2: 'De case',
      text2: '<a class="case__link" href="http://www.dbics.nl" target="_blank">DBI</a> zocht een partij die hun ondergrondse en bovengrondse afvalcontainers beheersbaar kon maken in één systeem. Via een gezamenlijke partner kwamen ze bij ons terecht. De initiële vraag was vrij eenvoudig, het opzetten van een systeem waarbinnen alle containers beheersbaar zijn en realtime terugkoppeling geven. Eerder werd er nachtelijk een badge gedraaid waardoor alle containers in het systeem werden geüpdatet. Daarnaast was een route optimalisatie optie ook wenselijk.',
      dialogOpen2: false,
      title3: 'Een kijkje in de toekomst',
      text3: 'Ondanks de vele functionaliteiten die al beschikbaar zijn blijft de afvalcontainermarkt een bewegende markt. Door innovaties, nieuwe behoeftes en wijzigingen in de markt blijven we continue bezig. Zo zijn we nu al bezig met een opzet voor een Burger Portaal en weten we dat er in de toekomst een ander afrekensysteem komt die we moeten verwerken in ons systeem.',
      dialogOpen3: false
    }
  },

  head: {
    title: {
      inner: 'DBI Container Service'
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


.case-dbi {
  .case-image {
    margin-top: 40px;
    margin-bottom: 40px;
    align-self: center;
  }
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
    background-image: url('/static/cases/DBI/DBICaseHeader@2x.jpg');
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
  .flex-col {
    flex: 1;
    margin: 0 15px;
  }
}
</style>
