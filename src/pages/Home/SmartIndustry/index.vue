<template lang="pug">
.page-smartindustry
  intro

  image-block(
    text='Belangrijke thema’s zijn goede (product-) content, integratie met systemen, selfservice en personalisatie. Bovendien zijn steeds meer apparaten verbonden met het web, waardoor Internet of Things (IoT) en big data een belangrijkere rol gaat spelen. En vergeet ook de vraagstukken op het gebied van beveiliging niet. Dat noemen wij Smart Industry. Welkom in de wereld van Innovadis.',
    imageUrl='/static/images/cover/smartindustry.jpg'
    )

  .container.pt
    h2.dot Voor welke uitdaging staat uw bedrijf
    p Heel veel ontwikkelingen, maar waar moet je nu beginnen. Ieder bedrijf, sterker nog, ieder mens is uniek. Daarom geloven wij dat IT en technologie succesvol toepassen in iedere situatie een andere aanpak vraagt en altijd begint met duidelijke doelen. Zo wordt het een middel en geen doel op zich.

    select-box(:items='selectBoxItems')

  .container.pt
    h2.dot Smart industry in de praktijk
    p Dat Smart Industry bij Innovadis niet bij een visie blijft, bewijzen de ervaringen van onze opdrachtgevers. Voor veel bedrijven binnen de industrie zijn wij gesprekspartner, adviseur maar bovenal leverancier van hoogwaardige technologische oplossingen die bijdragen aan hun succes.

    p Wij geloven in de kracht van samenwerken, bundelen en delen van kennis en samen tot de beste oplossing komen. Binnen de industrie werken we o.a. voor Apollo Vredestein, Pentair, Henkelman, Edmac en de Morssinkhof groep.

  .container.pt
    send-box-with-slot.margin-top(flip, subject='Reactie op Smart Health pagina')
      h2.dot // TODO

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
    SendBoxWithSlot: require('src/components/SendBox/SendBoxWithSlot'),
    SimpleFeed: require('src/components/Feed/Simple')
  },

  data () {
    return {
      selectBoxItems: [
        {
          label: 'Productinformatie management',
          icon: 'refresh',
          text: 'Met de digitalisering neemt ook de vraag naar goede content toe. Een productbeschrijving in 6 talen, een hoge resolutieafbeelding voor een folder, een technische handleiding voor een klant, om nog maar te zwijgen over het vullen van een complete webshop of catalogus. Veel bedrijven worstelen met het beheren van die content.'
        },
        {
          label: 'Webshop, portaal of App',
          icon: 'router',
          text: 'Verbeter de bereikbaarheid van uw bedrijf, bevorder selfservice, stroomlijn processen en bereik meer klanten. Het is allemaal mogelijk met een portal, webshop of app. Online toegang tot gegevens, facturen, orders of assortiment en prijzen. Verwerk digitale bestellingen en bovenal, speel in op de behoeften van uw klanten met slimme personalisatieopties.'
        },
        {
          label: 'Systeemintegratie en beveiliging',
          icon: 'database-view',
          text: 'Gegevens en data zijn voor veel bedrijven een kostbaar bezit. In de praktijk liggen veel gegevens vast in verschillende systemen. Contactgegevens in CRM, voorraden en prijzen in ERP, financiële data in boekhoudpakketten en website content in een CMS. Niet zelden zorgt dat voor dubbele data en extra onderhoud. Innovadis integreert systemen en verbetert daarmee de efficiency van onze opdrachtgevers. Databeveiliging en gegevensversleuteling zijn daarbij onze specialiteit.'
        },
        {
          label: 'IoT en Big Data',
          icon: 'database-view',
          text: 'Steeds meer apparaten zijn verbonden met internet en kunnen waardevolle data leveren. Innovadis heeft onderzoek gedaan naar de praktische toepassing van deze ontwikkeling binnen de industrie. Op basis daarvan hebben we een methode ontwikkeld, waarmee we onze opdrachtgevers kunnen helpen met oplossingen die daadwerkelijk bedragen aan het bedrijf. Denk aan efficiënter onderhoud door verlaging van kosten als gevolg van uitval of preventief vervangen van onderdelen. De mogelijkheden zijn eindeloos.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";
</style>