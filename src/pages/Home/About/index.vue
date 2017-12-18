<template lang="pug">
.page-about
  .top
    .container.pt.text-center
      h1.dot Wie wij zijn
      p.intro Sinds 1994 bedenken- en bouwen we samen met onze opdrachtgevers innovatieve internetoplossingen. Onze kracht zit in onze team-aanpak. Samen met onze opdrachtgevers bedenken en creëren we de best mogelijke oplossing, die aansluit bij hun strategie en doelen. Onze teams bestaan uit ervaren consultants, ontwikkelaars en designers die periodiek werkende software opleveren. Voorbeelden van onze oplossingen zijn webshops, portalen, PIM/ MDM, apps en maatwerk applicaties.
      p.intro We gaan voor duurzame relaties met al onze opdrachtgevers en partners. Opdrachtgevers waar we al meer dan 10 jaar mee samenwerken zijn geen uitzondering. Wij worden blij wanneer onze oplossingen mensen daadwerkelijk verder helpen en toegevoegde waarde leveren.
      p.intro Innovadis verbindt.

  .yellow
    switch-box(:content='switchboxContents', :height='750')

  .container.pt
    h2.dot Een partner voor de toekomst
    p Innovadis combineert kennis van techniek met kennis van de wereld van haar opdrachtgevers en legt verbindingen tussen techniek en bedrijfsprocessen. Innovadis is kennispartner en helpt haar opdrachtgevers stap voor stap naar succes.

  .flex.flex-justify-center
    img(src='/static/images/cover/meeting1.png')

</template>

<script>
export default {
  components: {
    SwitchBox: require('src/components/SwitchBox')
  },

  data () {
    return {
      switchboxContents: [
        {
          title: 'Vakmanschap',
          text: 'Jarenlange ervaring en intensief speurwerk heeft ons veel kennis gebracht. Onze oplossingen zijn niet vanzelfsprekend. Ze ontstaan door onze passie om de wereld te verbeteren met creativiteit en techniek. Kwaliteit is voor ons geen cijfer maar een blije relatie waarmee we aan het einde van de reis een groot stuk taart eten.',
          imageUrl: '/static/images/cover/cultuur_vakmanschap.jpg',
          iconUrl: '/static/images/svg/innovadis_vakmanschap_icon.svg',
          backgroundIconUrl: '/static/images/svg/innovadis_vakmanschap_icon_black.svg'
        },
        {
          title: 'Persoonlijk',
          text: 'We zijn zowel intern als extern informeel en professioneel. Wij gaan een duurzame samenwerking aan met al onze relaties. Wij begrijpen de behoeften van onze opdrachtgevers en vinden een nieuwe route wanneer deze verandert. Enthousiasme is onze drijfveer.',
          imageUrl: '/static/images/cover/cultuur_persoonlijk.jpg',
          iconUrl: '/static/images/svg/innovadis_persoonlijk_icon.svg',
          backgroundIconUrl: '/static/images/svg/innovadis_persoonlijk_icon_black.svg'
        },
        {
          title: 'Innovatie',
          text: 'De techniek heeft voor ons geen geheimen. Onze ontwikkelaars gaan geen uitdaging uit de weg, zij zoeken ze op. Ons eeuwige verlangen om te ontdekken brengt ons langs andere werelden en geeft ons nieuwe inzichten. Het stelt ons in staat om innovatieve oplossingen te ontwikkelen voor onze opdrachtgevers en hun klanten.',
          imageUrl: '/static/images/cover/cultuur_collegas.jpg',
          iconUrl: '/static/images/svg/innovadis_innovatie_icon.svg',
          backgroundIconUrl: '/static/images/svg/innovadis_innovatie_icon_black.svg'
        }
      ],

      title: 'Cultuur',
      description: 'Wij worden blij wanneer onze oplossingen mensen daadwerkelijk verder helpen en toegevoegde waarde leveren.'
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

.page-about {
  .top {
    $curveSize: 8%;

    background: white;
    width: 100% + $curveSize;
    margin-left: -$curveSize/2;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    padding-bottom: 50px;

    @include phablet {
      width: auto;
      margin-left: 0;
    }

    &:before {
      background: $inno-yellow-light;
      content: "";
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;

      @include phablet {
        content: none;
      }
    }
  }

  .yellow {
    padding: 100px 0 60px 0;
    position: relative;
    z-index: 0;
    background: linear-gradient(
      to top,
      $inno-yellow 0%,
      $inno-yellow-light 100%
    );

    &:before {
      background: url("/static/images/about_corner_top.svg") no-repeat top left;
      content: "";
      height: 100%;
      width: 100%;
      position: absolute;
      top: -100px;
      left: 0;
      z-index: -1;

      @include phablet {
        display: none;
      }
    }

    &:after {
      background: url("/static/images/about_corner_bottom.svg") no-repeat bottom
        right;
      content: "";
      height: 100%;
      width: 100%;
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: -1;

      @include phone {
        display: none;
      }
    }
  }

  img {
    height: 450px;
    margin: $gutter 0 100px 0;

    @include phone {
      height: 200px;
    }
  }
}
</style>

