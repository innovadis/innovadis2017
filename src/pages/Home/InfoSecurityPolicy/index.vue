<template lang="pug">
.info-security-policy
  .container.pt
    h2.dot Algemeen
    p Innovadis hecht belang aan informatiebeveiliging om zo de continuïteit, integriteit en betrouwbaarheid van de informatievoorziening te borgen. Innovadis geeft continue aandacht aan informatiebeveiliging zodat een veilige en betrouwbare informatiebeveiliging kan worden geborgd.
    br
    h3.dot Kader
    p Innovadis werkt volgens de best practices conform de ISO 27001 en 27002 om de informatiebeveiliging te borgen. Innovadis werkt daarbij volgens het ISMS (Information Security Management System) en de Plan-Do-Check-Act cyclus om informatiebeveiliging integraal onderdeel uit te laten maken van de bedrijfsvoering van Innovadis.
    br
    h3.dot Doelstelling van ISMS
    p Het doel van het ISMS is onder andere het continue beoordelen van welke beveiligingsmaatregelen passend zijn en deze indien nodig bij te stellen. Het hoofddoel is het verbeteren van de effectiviteit van informatiebeveiliging door een procesmatige aanpak, die wordt ondersteund door het Management. ISMS is een proces dat de basis legt voor passende beveiligingsmaatregelen en informatieveiligheid over een langere periode op een steeds hoger niveau uitvoert. Dit proces wordt ondersteund door de Plan-Do-Check-Act cyclus.
    br

    h2.dot Informatie beveiligingsbeleid
    .headers
      .header(v-for='(header, i) in headers', @click='selectedHeader = headers[i]', :class='{ selected: selectedHeader === header }') {{header}}

    transition(name='fade', mode='out-in')
      div(v-if='selectedHeader === headers[0]' key="headers[0]")
        h3.dot Beleidsuitgangspunten
        ul
          li Informatiebeveiliging wordt gekarakteriseerd als het waarborgen van de 	beschikbaarheid, integriteit en vertrouwelijkheid van de 	informatievoorziening.
          li Informatiebeveiliging wordt zo pragmatisch mogelijk opgepakt: Er wordt gestreefd naar een goede balans tussen beveiligingsmaatregelen en business-behoeften, met dien verstande dat beheersing van risico’s van primair belang is en hieraan geen afbreuk wordt gedaan.
          li Iedere medewerker wordt bewust gehouden van nut en noodzaak van informatiebeveiliging om zo informatiebeveiliging blijvend te laten beklijven.
          li Informatiebeveiliging is niet vrijblijvend: Iedere medewerker en betrokken derde heeft een eigen, persoonlijke verantwoordelijkheid. Door het Management wordt toegezien op naleving. In evaluatie gespreken wordt dit besproken. Bij niet-nakoming kunnen sancties worden opgelegd.

      div(v-if='selectedHeader === headers[1]' key="headers[1]")
        h3.dot Functies en verantwoordelijkheden
        p
        .hidden-phone
          select-box(:items='selectBoxItems')
        .hidden-tablet.hidden-desktop
          multiselect(
            label='label',
            v-model='selectedRole',
            :allow-empty='false',
            :options='selectBoxItems',
            select-label='',
            deselect-label='',
            selected-label='',
            placeholder='Selecteer een functie',
            )
          div(v-for='(item, i) in selectBoxItems' v-if='selectedRole.label === selectBoxItems[i].label')
            p(v-for='line in item.multipleLines') {{line}}

      div(v-if='selectedHeader === headers[2]' key="headers[2]")
        h3.dot Informatiebeveiligingsproces
        p Innovadis ziet informatiebeveiliging als een proces en niet als eenmalige activiteit. Het proces is ingericht met doel de informatiebeveiliging blijvend op orde te houden. Het informatiebeleid bestaat uit de volgende vier primaire processen:
        p
          strong Plan
          | : doelstellingen en maatregelen bepalen aan de hand van een risicoanalyse
        ul
          li Classificeren van bedrijfsprocessen, informatiesystemen en gegevens
          li Uitvoeren van risicoanalyses op dreigingen en kwetsbaarheden
          li Beslissen welke maatregelen te treffen om risico’s te beperken dan wel te accepteren
        p
          strong Do
          | : invoeren en uitvoeren van het beleid en de maatregelen
        ul
          li Selectie en implementatie van maatregen en hierbij bewust en beheerst omgaan met risico’s
        p
          strong Check
          | : bewaking en beoordeling van de doelstellingen en maatregelen
        ul
          li Evalueren van effectiviteit van de maatregelen
        p
          strong Act
        ul
          li Periodiek uitvoeren van nieuwe risicoanalyses en eventueel bijstellen van bestaande of toevoegen van nieuwe maatregelen

      div(v-if='selectedHeader === headers[3]' key="headers[3]")
        h3.dot Externe betrokkenen bij informatiebeveiliging
        p In de basis zijn er drie partijen betrokken bij de organisatie en informatiebeveiliging van onze dienstverlening:
        ul
          li Software – Innovadis
          li Leveranciers (waaronder hostingpartij)
          li Opdrachtgever
        p In het bovenstaande netwerkverband is er geen directe communicatie tussen de hostingpartij en de opdrachtgevers. Innovadis is de verbindende factor tussen beide betrokkenen. Dat betekent dat Innovadis, als het gaat om het contact over de informatiebeveiliging, hierin een belangrijke en actieve rol speelt.


      div(v-if='selectedHeader === headers[4]' key="headers[4]")
        h3.dot Aanpak en communicatie bij informatiebeveiligingsincidenten en detectie van informatiebeveiligingsrisico’s
        p Informatiebeveiligingsincidenten kunnen door verschillende interne medewerkers en externe partijen worden waargenomen. Daarbij is het van belang dat de juiste procedure wordt gevolgd in het geval van een incident, zodat de juiste personen zo snel mogelijk worden geïnformeerd over het incident. Van belang hierbij is dat er zo snel mogelijk een analyse van het incident kan worden gemaakt en de juiste maatregelen kunnen worden genomen. Incidenten kunnen daarbij zowel binnen als buiten de organisatie worden gedetecteerd. Zodra het incident intern bekend is wordt de volgende keten voor het melden en afhandelen van een incident gehanteerd:
        ol
          li Ontwikkelaar (lid van een team binnen Innovadis) communiceert met;
          li Product Owner (lid van het betreffende team waar het incident zicht voordoet), waarbij het team communiceert met;
          li Hoofd Ontwikkeling/Security Officer die op zijn beurt dit communiceert met;
          li Management/Directie; die neemt vervolgstappen
        p Alle medewerkers zijn verplicht om bij (het vermoeden) van een informatiebeveiligingsincident of de detectie van een risico in de informatiebeveiliging dit te melden aan de eerstvolgende verantwoordelijke in deze keten om het (mogelijke) incident nader te analyseren en waar nodig actie te ondernemen. Daarnaast zijn alle betrokkenen verplicht alle bewijsmateriaal omtrent het incident te verzamelen en te bewaren.
        p
          strong Procedure voor de analyse van een (mogelijk) informatiebeveiligingsincident:
          ol
            li De medewerker meldt het incident bij de product owner en het incident wordt binnen het team geanalyseerd en waar nodig worden direct maatregelen getroffen, vervolgens wordt er melding gemaakt bij;
            li Het Hoofd Ontwikkeling/Security Officer, deze wordt op de hoogte gebracht van het incident en biedt ondersteuning bij de analyse en de te nemen maatregelen. Daarna wordt er melding gemaakt bij;
            li Het Management, die wordt op de hoogte gebracht van het incident en de genomen maatregelen. Indien nodig worden aanvullende maatregelen getroffen.
        p Bij iedere genomen stap wordt een omschrijving van het incident opgenomen en de daarbij gemaakte analyse. Tevens wordt vastgelegd wie welke genomen maatregelen heeft uitgevoerd.
        p
          strong Communicatie met externe betrokkenen
          ol
            li Indien er sprake is van een incident waarbij een klant betrokken is dan stelt de Directie vast wie de verdere communicatie met de klant op pakt, waarbij de Directie altijd eindverantwoordelijk blijft voor het oppakken van de communicatie richting klant.
            li Indien er actie dient te worden uitgezet bij overige leveranciers of samenwerkende partijen dan stelt de Directie vast wie de verdere communicatie met de klant op pakt waarbij de Directie eindverantwoordelijk blijft voor het oppakken van de communicatie richting klant.
        p
          strong Evaluatie van het incident
          br
          | Als het informatiebeveiligingsincident is verholpen dan komen alle partijen die in de keten betrokken zijn bij het incident bij elkaar voor een evaluatie. Daarbij worden de volgende onderwerpen besproken:
        ol
          li Hoe heeft het incident kunnen ontstaan – beschrijving incident
          li Hoe is het incident opgelost – risicoanalyse - uitgevoerde handelingen om het incident op te lossen - beschrijving van het proces
          li Evaluatie - hoe heeft het incident kunnen ontstaan - hoe gaan we voorkomen dat het incident opnieuw voorkomt


      div(v-if='selectedHeader === headers[5]' key="headers[5]")
        h3.dot Leiderschap
        p Het Management toont zijn betrokkenheid bij het onderwerp informatiebeveiliging. Dit wordt gedaan door regelmatig in bijeenkomsten met medewerkers informatiebeveiliging te bespreken. Verantwoordelijkheden ten aanzien van informatiebeveiliging van medewerkers (op basis van rollen) is vastgelegd in het informatiebeveiligingsbeleid. Het Management overlegt periodiek over het informatiebeveiligingsbeleid en stelt deze bij waar dat nodig is. Ter ondersteuning van het Management en om informatiebeveiliging integraal op te nemen in de processen van Innovadis is een overstijgend teamoverleg voor informatiebeveiliging georganiseerd, waarbij een lid van ieder team samen met de Security Officer onderwerpen met betrekking tot de informatiebeveiliging bespreken.


      div(v-if='selectedHeader === headers[6]' key="headers[6]")
        h3.dot Sanctiebeleid
        p In het geval dat een medewerker zich niet houdt aan het informatiebeveiligingsbeleid dan wel activiteiten verricht die afbreuk doen aan dit beleid, kan het verantwoordelijke Management besluiten om disciplinaire maatregelen te treffen jegens de desbetreffende medewerker.

</template>

<script>

import Multiselect from 'src/../node_modules/vue-multiselect/src/Multiselect'

export default {
  components: {
    Multiselect,
    SelectBox: require('src/components/SelectBox'),
    SwitchBox: require('src/components/SwitchBox')

  },
  data () {
    return {
      selectedHeader: '',
      selectedRole: '',
      headers: ['Beleidsuitgangspunten',
        'Functies en verantwoordelijkheden',
        'Informatiebeveiligingsproces',
        'Externe betrokkenen bij informatiebeveiliging',
        'Aanpak en communicatie bij informatiebeveiligingsincidenten en detectie van beveiligingsrisico’s',
        'Leiderschap',
        'Sanctiebeleid'],
      selectBoxItems: [
        {
          label: 'Support',
          icon: 'customer-support',
          multipleLines: ['Vangt signalen op van de opdrachtgever ten aanzien van de informatiebeveiliging.',
            'Indien signalen binnenkomen speelt support deze door aan de Product Owner/Consultant en het Hoofd Ontwikkeling.',
            'De Product Owner/Consultant of Hoofd Ontwikkeling nemen het contact over van support.'
          ]
        }, {
          label: 'Product Owner/Consultant',
          icon: 'anonymous-user',
          multipleLines: ['Vangt intern en extern (van de opdrachtgever) signalen op ten aanzien van de informatiebeveiliging.',
            'Verantwoordelijk voor het bijhouden van actuele contactgegevens van de opdrachtgever.',
            'Indien signalen binnenkomen bespreekt de Product Owner/Consultant deze met het Hoofd ontwikkeling waarbij wordt besproken of er actie dient te worden ondernomen en welke acties dat zijn.',
            'Indien nodig worden intern andere specialisten ingeschakeld om de situatie te beoordelen (Developer/Directeur/Systeembeheer).',
            'Indien nodig bespreekt de Product Owner/Consultant de situatie met de opdrachtgever en stemt indien nodig af welke acties genomen worden.',
            'Het Hoofd ontwikkeling is verantwoordelijk voor het uitzetten van de juiste technische acties. De Product Owner/Consultant informeert de opdrachtgever en in het geval van crisissituaties wordt de directeur ingeschakeld.'
          ]
        }, {
          label: 'Hoofd Ontwikkeling tevens Security Officer',
          icon: 'user-options',
          multipleLines: ['Vangt intern en extern (van de hostingpartij) signalen op ten aanzien van de informatiebeveiliging.',
            'Verantwoordelijk voor het bijhouden van actuele contactgegevens van de hostingpartij.',
            'Indien signalen binnenkomen bespreekt het Hoofd Ontwikkeling deze met de Product Owner/Consultant waarbij wordt besproken of er actie dient te worden ondernomen en welke acties dat zijn.',
            'Indien nodig worden intern andere specialisten ingeschakeld om de situatie te beoordelen (Developer/Directeur/Systeembeheer).',
            'De Product Owner/Consultant bespreekt de situatie met de opdrachtgever en stemt indien nodig af welke acties genomen worden.',
            'Het Hoofd Ontwikkeling is verantwoordelijk voor het uitzetten van de juiste acties. De Product Owner/Consultant informeert de opdrachtgever en in het geval van crisissituaties wordt de directeur ingeschakeld.'
          ]
        }, {
          label: 'Developer',
          icon: 'developer',
          multipleLines: [
            'Vangt intern signalen op ten aanzien van de informatiebeveiliging. Is alert op mogelijke beveiligingsrisico’s en schakelt de juiste personen in.',
            'Indien signalen binnenkomen of aan het licht komen dan bespreekt het Hoofd Ontwikkeling deze met de Product Owner/Consultant. De Product Owner/Consultant of het Hoofd Ontwikkeling initieert de vervolgstappen.'
          ]
        }, {
          label: 'Directeur',
          icon: 'manager',
          multipleLines: [
            'Vangt intern en extern signalen op ten aanzien van de informatiebeveiliging.',
            'Is intern adviseur als het gaat om de informatiebeveiliging.',
            'Wordt geraadpleegd en is verantwoordelijk voor het nemen van de juiste stappen in crisissituaties.',
            'Is eindverantwoordelijk voor het vaststellen van het informatiebeveiligingsbeleid en de organisatie rondom informatiebeveiliging. '
          ]
        }, {
          label: 'Systeembeheer',
          icon: 'brain-settings',
          multipleLines: [
            'Vangt intern signalen op ten aanzien van de informatiebeveiliging.',
            'Is intern adviseur ten aanzien van de informatiebeveiliging.',
            'Indien signalen binnenkomen bespreekt Systeembeheer deze met de Product Owner/Consultant waarbij wordt besproken of er actie dient te worden ondernomen en welke acties dat zijn.',
            'Indien signalen binnenkomen of aan het licht komen dan bespreekt het Hoofd Ontwikkeling deze met de Product Owner/Consultant. De Product Owner/Consultant of het Hoofd Ontwikkeling initieert de vervolgstappen.'
          ]
        }
      ]
    }
  },
  created () {
    this.selectedHeader = this.headers[0]
    this.selectedRole = this.selectBoxItems[0]
  },
  mounted () {
    const arrows = document.querySelectorAll('.multiselect__select')

    for (const arrow of arrows) {
      const chevron = document.createElement('i')
      chevron.classList.add('multiselect-chevron-down')
      chevron.classList.add('icons8-expand-arrow')

      arrow.parentNode.replaceChild(chevron, arrow)
    }
  }

}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.info-security-policy {
  padding-bottom: 100px;

  p ol {
    margin-top: 0;
  }

  .headers {
    max-width: 480px;
    margin: 20px;

    .header {
      font-size: 16px;
      cursor: pointer;

      &:hover {
        color: $inno-yellow;
      }

      &.selected {
        color: $inno-yellow;
        font-weight: bold;
      }
    }
  }

  .multiselect {
    margin: $gutter 0;

    @include phone {
      margin: 10px 0;
    }
  }
}
</style>


<style lang='scss'>
.info-security-policy {
  .multiselect--active {
    .multiselect-chevron-down {
      transform: rotate(-180deg);
    }
  }

  .multiselect-chevron-down {
    transition: all 0.2s ease-in-out;
  }

  .multiselect {
    &__content-wrapper {
      overflow-x: hidden !important;
    }
    &__content {
      width: 100%;
    }
    &__option {
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .select-box .box {
    max-width: 58% !important;
  }
}
</style>
