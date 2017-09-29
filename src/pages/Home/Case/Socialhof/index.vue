<template lang="pug">
.case-socialhof
  .container.pt
    h1.dot {{ title }}
    p.intro {{ lead }}

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

  .gray
    .container.pt.text-center
      h3 Deel eenvoudig informatie.
      p Het grote touchscreen in de centrale hal biedt een unieke ervaring. Al wachtende op de lift worden de bewoners, het personeel en de familie snel en op een leuke manier geïnformeerd over het laatste nieuws en activiteiten. De Vriezenhof gerelateerd nieuws en algemene mededelingen worden afgewisseld met zaken als filmpjes en foto’s van activiteiten met bewoners. Daarnaast worden de activiteiten voor bewoners en het restaurant menu getoond.

    kiosk

    .container.flex.pt
      phones-side-by-side
      .flex.flex-column
        h3 Chatten zoals je gewend bent, maar gescheiden van je privé leven.
        p Degenen die WhatsApp gewend zijn, zullen vele gelijkenissen zien met de chat functie van Socialhof. De chat functionaliteit laat je snel, simpel en veilig chatberichten versturen. Het platform biedt de mogelijkheid om privé te chatten met alle contactpersonen in het platform maar ook groepsgesprekken zijn mogelijk. Ook het delen van afbeeldingen, video’s en bestanden zijn features die de chat functionaliteit beidt. De chat functionaliteit is volledig beveiligd door middel van encryptie en wordt gehost op Europese servers. Notificaties zijn allen zichtbaar bij gebruik van het portaal. Zo kan privé en werk makkelijk gescheiden gehouden worden.

  .gray
    .container.pt
      .flex
        .flex.flex-column
          h3 Alle collega’s overzichtelijk bij elkaar.
          p Net als een agenda is een contactenlijst een onmisbare tool geworden voor de Vriezenhof. Elke organisatie waar communicatie essentieel is, komt vroeg of laat voor de vraag te staan hoe hij zijn contactenlijst up-to-date houdt. Natuurlijk kun je dit in excel doen. Nadeel is dat je lijst met contacten alweer verouderd is voordat je hem opgesteld hebt. Het Sociahof platform brengt alle brengt alle contacten samen op een 1 plek zodat je de juiste gegevens kunt terugvinden wanneer je deze nodig hebt. De medewerker kan zelf zijn gegevens up to date houden en met 1 druk op de knop een telefoongesprek, e-mail of chat starten.
        phones-overlap

    .container.pt
      .flex
        .with-macbook.flex.flex-column
          h3 Easy to use beheeromgeving.
          p De Socialhof beheeromgeving maar het mogelijk om op eenvoudige wijze de App en de Kiosk te beheren. Middels de beheeromgeving houdt De Vriezenhof controle of hetgeen gepubliceerd wordt in de App en Kiosk. Tevens is er een functie beschikbaar waarmee alle medewerkers middels een mededeling bereikt kunnen worden.

          .orbs
            .row
              orb(icon='birthday-cake')
              | Geen technische kennis benodigd
            .row
              orb(icon='birthday-cake')
              | Gebruikersbeheer
            .row
              orb(icon='birthday-cake')
              | Controle over gepubliceerde berichten
            .row
              orb(icon='birthday-cake')
              | Rollen en rechten

        macbook

  send-box-with-slot(flip, subject='Reactie op Socialhof case')
    h2.dot Vraag een demo aan
    p Meer weten of wil je een demo? Neem dan contact met ons op of laat een berichtje achter. Vinden we leuk!
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
    SendBoxWithSlot: require('src/components/SendBox/SendBoxWithSlot')
  },

  data() {
    return {
      title: 'Socialhof',
      lead: 'De Vriezenhof is een vooruitstrevende zorginstelling in Vriezenveen, die wonen, welzijn dagbesteding, huishoudelijke ondersteuning en wijkverpleging en -verzorging biedt. Er zijn de laatste jaren grote verbeteringen doorgevoerd. Een belangrijke basis voor de verbeteringen is dat de medewerkers in zelfsturende teams werken. Het blijkt echter dat medewerkers van verschillende teams daardoor minder contact hebben. Om teams van elkaar te kunnen laten leren, om successen te vieren en om elkaar en anderen te vertellen wat er allemaal gebeurt in en rondom De Vriezenhof, is er behoefte aan een platform die dat mogelijk maakt en stimuleert.'
    }
  },

  head: {
    title: {
      inner: 'Socialhof'
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

  .sendboxwithslot {
    margin-top: 100px;

    @include phablet {
      margin-top: 200px;
    }
  }
}
</style>
