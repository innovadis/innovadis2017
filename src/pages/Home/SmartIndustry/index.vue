<template lang="pug">
.page-smartindustry
  intro

  image-block(
    imageUrl='/static/images/cover/smartindustry.jpg'
    )

  .container.pt
    h2.dot Voor welke uitdaging staat uw bedrijf
    p Heel veel ontwikkelingen, maar waar moet je nu beginnen. Ieder bedrijf, sterker nog, ieder mens is uniek. Daarom geloven wij dat succesvol toepassen van IT en technologie in iedere situatie een andere aanpak vraagt en altijd begint met duidelijke doelen. Zo wordt het een middel en geen doel op zich.

    .hidden-phone
      select-box(:items='selectBoxItems')

    .hidden-tablet.hidden-desktop
      .flex.flex-justify-center
        switch-box(:content='switchboxContent', :height='550')


  .container.pt
    h2.dot Smart industry in de praktijk
    p Dat Smart Industry bij Innovadis niet bij een visie blijft, bewijzen de ervaringen van onze opdrachtgevers. Voor veel bedrijven binnen de industrie zijn wij gesprekspartner, adviseur maar bovenal leverancier van hoogwaardige technologische oplossingen die bijdragen aan hun succes.

    p Wij geloven in de kracht van samenwerken, bundelen en delen van kennis en samen tot de beste oplossing komen. Binnen de industrie werken we o.a. voor Apollo Vredestein, Pentair, Henkelman, Edmac en de Morssinkhof groep.

    .logos
      img(src='/static/images/logos/customers/apollo.png')
      img(src='/static/images/logos/customers/axa.png')
      img(src='/static/images/logos/customers/henkelman.png')
      img(src='/static/images/logos/customers/morssinkhof.png')
      img(src='/static/images/logos/customers/pentair.svg')
      img(src='/static/images/logos/customers/vredestein.png')

  .container.pt
    send-box-with-slot.margin-top(flip, subject='Reactie op Smart Health pagina')
      h2.dot Neem contact met ons op
      p Nieuwsgierig geworden naar de mogelijkheden voor uw bedrijf?

  simple-feed(
    title='Gerelateerd in de industrie',
    feedGetter='contentTagSmartIndustry',
    dark
    )
</template>

<script>
export default {
  components: {
    Intro: require('./Intro'),
    ImageBlock: require('./../SmartHealth/ImageBlock'),
    SelectBox: require('src/components/SelectBox'),
    SwitchBox: require('src/components/SwitchBox'),
    SendBoxWithSlot: require('src/components/SendBox/SendBoxWithSlot'),
    SimpleFeed: require('src/components/Feed/Simple')
  },

  data () {
    return {
      selectBoxItems: [
        {
          label: 'Productinformatie management',
          icon: 'refresh',
          text: 'Met de digitalisering neemt ook de vraag naar goede content toe. Denk bijvoorbeeld aan een productbeschrijving in 6 talen, een hoge resolutieafbeelding voor een folder, een technische handleiding voor een klant, om nog maar te zwijgen over het vullen van een complete webshop of catalogus. Veel bedrijven worstelen met het beheren van die content.'
        },
        {
          label: 'Webshop, portaal of App',
          icon: 'router',
          text: 'Verbeter de bereikbaarheid van het bedrijf, bevorder selfservice, stroomlijn processen en bereik meer klanten. Het is allemaal mogelijk met een portal, webshop of app. Online toegang tot gegevens, facturen, orders, assortiment en prijzen. Verwerk digitale bestellingen en bovenal, speel in op de behoeften van klanten met slimme personalisatieopties.'
        },
        {
          label: 'Systeemintegratie en beveiliging',
          icon: 'database-view',
          text: 'Gegevens en data zijn voor veel bedrijven een kostbaar bezit. Een CRM (contactgegevens), ERP (voorraden en prijzen), CMS (website & content), boekhoudkundige pakketten en ga zo maar door. Vaak zorgt dat voor dubbele data en extra onderhoud. Wij integreren al deze systemen en verbeteren daarmee de efficiency. Daarbij draaien wij onze hand niet om voor databeveiliging en gegevensversleuteling.'
        },
        {
          label: 'IoT en Big Data',
          icon: 'database-view',
          text: 'Steeds meer apparaten zijn verbonden met internet en kunnen waardevolle data leveren. Innovadis heeft onderzoek gedaan naar de praktische toepassing van deze data en een methode ontwikkeld waarmee we onze opdrachtgevers kunnen helpen met oplossingen die daadwerkelijk bedragen aan het bedrijf. Denk aan efficiënter onderhoud door verlaging van kosten als gevolg van uitval of het preventief vervangen van onderdelen. De mogelijkheden zijn eindeloos.'
        }
      ],

      title: 'Smart Industry',
      description: 'Wij geloven in de kracht van samenwerken, bundelen en delen van kennis en samen tot de beste Smart Industry oplossing komen.'
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
  },

  head: {
    title () {
      return {
        inner: this.title
      }
    },
    meta () {
      return [
        { name: 'description', content: this.description },

        // Google+
        { itemprop: 'name', content: this.title },
        { itemprop: 'description', content: this.description },

        // Twitter
        { name: 'twitter:title', content: this.title },
        { name: 'twitter:description', content: this.description },

        // Facebook
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-left: -$gutter;

  @include phone {
    margin-left: -10px;
  }

  img {
    margin: $gutter;
    max-width: 200px;

    @include phone {
      height: 70px;
      margin: $gutter 10px;
    }
  }
}
</style>
