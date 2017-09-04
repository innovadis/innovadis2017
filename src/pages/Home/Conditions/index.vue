<template lang="pug">
.page-conditions
  .container.pt
    h3.dot Algemene voorwaarden
    p Innovadis maakt gebruik van de leveringsvoorwaarden opgesteld in de ICT~Office Voorwaarden. Onderstaand vindt u een lijst met verschillende modules, waarin de diensten en producten van Innovadis zijn opgenomen.
    p Innovadis zal opdrachtgever de mogelijkheid bieden om kennis te nemen van eventuele prijswijzigingen. Indien Opdrachtgever niet instemt met een prijswijziging is Opdrachtgever slechts gerechtigd de overeenkomst te beëindigen met ingang van de datum dat de prijswijziging van kracht zal zijn, indien de totale prijsverhoging gedurende 1 (één) jaar het door het CBS gepubliceerde inflatiecijfer van het actuele jaar (dan wel het voorafgaande jaar voor prijsverhogingen aangekondigd voor het volgende jaar) met meer dan 5% overschrijdt.

    br
    h3.dot ICT Office Voorwaarden

    .download.flex.flex-align-center
      i.icons8-download
      a(href='/static/documents/ict_office_algemeen.pdf', target='_blank', title='ict_office_Algemeen.pdf') Algemeen
    .download.flex.flex-align-center
      i.icons8-download
      a(href='/static/documents/ict_office_moduleplus5_ontwikkeling_en_onderhoud_van_een_website.pdf', target='_blank', title='ict_office_module+5_ontwikkeling_en_onderhoud_van_een_website.pdf') Ontwikkeling en onderhoud van een website
    .download.flex.flex-align-center
      i.icons8-download
      a(href='/static/documents/ict_office_module-1_licentie_voor_programmateur.pdf', target='_blank', title='ict_office_module 1_licentie_voor_programmateur.pdf') Licentie voor programmatuur
    .download.flex.flex-align-center
      i.icons8-download
      a(href='/static/documents/ict_office_moduleplus6_webhosting.pdf', target='_blank', title='ict_office_module+6_webhosting.pdf') Webhosting
    .download.flex.flex-align-center
      i.icons8-download
      a(href='/static/documents/ict_office_moduleplus2_ontwikkeling_van_programmateur.pdf', target='_blank', title='ict_office_module+2_ontwikkeling_van_programmateur.pdf') Ontwikkeling van programmatuur
    .download.flex.flex-align-center
      i.icons8-download
      a(href='/static/documents/ict_office_moduleplus9_advisering_consultancy_en_project_management.pdf', target='_blank', title='ict_office_module+9_advisering_consultancy_en_project_management.pdf') Advisering, consultancy, projectmanagement
    .download.flex.flex-align-center
      i.icons8-download
      a(href='/static/documents/ict_office_moduleplus3_onderhoud_van_programmateur.pdf', target='_blank', title='ict_office_module+3_onderhoud_van_programmateur.pdf') Onderhoud van programmatuur
    .download.flex.flex-align-center
      i.icons8-download
      a(href='/static/documents/ict_office_moduleplus10_overige_diensten.pdf', target='_blank', title='ict_office_module+10_overige_diensten.pdf') Overige diensten
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.page-conditions {
  padding-bottom: 100px;

  .download {
    line-height: 36px;

    a {
      margin-left: 5px;
      color: $gray3;
    }

    a,
    i {
      transition: color 0.2s ease-in-out;
    }

    &:hover {
      a,
      i {
        color: $inno-yellow;
      }
    }
  }
}
</style>
