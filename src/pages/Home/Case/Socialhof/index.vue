<template lang="pug">
.case-socialhof
  .container.pt
    h1.dot Socialhof
    p.intro De Vriezenhof is een vooruitstrevende zorginstelling in Vriezenveen, die wonen, welzijn dagbesteding, huishoudelijke ondersteuning en wijkverpleging en -verzorging biedt. Er zijn de laatste jaren grote verbeteringen doorgevoerd. Een belangrijke basis voor de verbeteringen is dat de medewerkers in zelfsturende teams werken. Het blijkt echter dat medewerkers van verschillende teams daardoor minder contact hebben. Om teams van elkaar te kunnen laten leren, om successen te vieren en om elkaar en anderen te vertellen wat er allemaal gebeurt in en rondom De Vriezenhof, is er behoefte aan een platform die dat mogelijk maakt en stimuleert.

  .hero

  .gray
    .container.pt
      .padded-container
        h2.dot Door en voor de zorg
        p Innovadis heeft voor Woon- en zorgcentrum De Vriezenhof het platform Socialhof gerealiseerd. De Vriezenhof wil met het platform een bijdragen leveren aan de interne communicatie door het uitwisselen van informatie leuk en gemakkelijk te maken. Het platform ondersteunt en faciliteert de medewerkers, de bewoners en de familie van de bewoners.

    .container.pt.flex.flex-justify-center.flex-column-phablet.flex-align-center
      .padded-container.flex.flex-column.small
        h3 Eén platform voor alle leuke en nuttige informatie.
        p Socialhof is de communicatietool van De Vriezenhof. De tool brengt alle communicatie bij elkaar en het combineert bestaande tools op één plek die voor iedereen binnen De Vriezenhof toegankelijk is. Alle digitale communicatie vindt er plaats, van privé chats tot groep chats, belangrijke mededelingen, openbare berichten tot het delen van bestanden en het bijhouden van agenda's en dagmenu’s.
      phone-orbs

  send-box-with-slot(flip)
    h2.dot Vraag een demo aan
    p Meer weten of wil je een demo? Neem dan contact met ons op of laat een berichtje achter. Vinden we leuk!
</template>

<script>
export default {
  components: {
    PhoneOrbs: require('./PhoneOrbs'),
    SendBoxWithSlot: require('src/components/SendBox/SendBoxWithSlot')
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

  .sendboxwithslot {
    margin-top: 100px;

    @include phablet {
      margin-top: 200px;
    }
  }
}
</style>
