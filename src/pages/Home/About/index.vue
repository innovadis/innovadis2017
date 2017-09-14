<template lang="pug">
.page-about
  .blue(@mousemove='mousemove')
    .orbs
      orb(
        :size='140'
        :initialX='orbLarge.x',
        :initialY='orbLarge.y',
        :targetX='orbLarge.targetX',
        :targetY='orbLarge.targetY',
        :z='-1'
        )
    .layer-lines(:style='layerLinesStyle', ref='layerLines')
    .layer-stars(:style='layerStarsStyle', ref='layerStars')
    .container.text-center
      .vh
        h1 Wij verbinden,
        h1.dot organisaties
        p Sinds 1994 bedenken- en bouwen we samen met onze opdrachtgevers innovatieve internetoplossingen. De kracht zit hem in onze teams die samen met onze opdrachtgevers de best mogelijke oplossing bedenkt die aansluit bij jullie strategie. Onze teams bestaan uit ervaren consultants, ontwikkelaars en designers die periodiek werkende software opleveren. Voorbeelden van onze oplossingen zijn webshops, portalen, PIM/ MDM, apps en maatwerk applicaties.
        p We gaan voor duurzame relaties met al onze opdrachtgevers en partners. Opdrachtgevers waar we al meer dan 10 jaar mee samenwerken zijn geen uitzondering. Wij worden blij wanneer onze oplossingen mensen daadwerkelijk verder helpen en toegevoegde waarde leveren.
        p Innovadis verbindt.

      .flex.vh
        white-orb
        .flex.flex-column
          h3 Vakmanschap
          p We zijn zowel intern als extern informeel en professioneel. Wij gaan een duurzame samenwerking aan met al onze relaties. Wij begrijpen de behoeften van onze opdrachtgevers en vinden een nieuwe route wanneer deze verandert. Enthousiasme is onze drijfveer.

      .flex.vh.flex-row-reverse
        white-orb
        .flex.flex-column
          h3 Persoonlijk
          p We zijn zowel intern als extern informeel en professioneel. Wij gaan een duurzame samenwerking aan met al onze relaties. Wij begrijpen de behoeften van onze opdrachtgevers en vinden een nieuwe route wanneer deze verandert. Enthousiasme is onze drijfveer.

      .flex.vh
        white-orb
        .flex.flex-column
          h3 Innovatie
          p De techniek heeft voor ons geen geheimen. Onze ontwikkelaars gaan geen uitdaging uit de weg, zij zoeken ze op. Ons eeuwige verlangen om te ontdekken brengt ons langs andere werelden en geeft ons nieuwe inzichten. Het stelt ons in staat om innovatieve oplossingen te ontwikkelen voor onze opdrachtgevers en hun klanten.

  .pulse-container
    .pulse

  .bottom-image

  .container.bottom
    h2.dot Wij zijn een partner voor de toekomst
    p Eternity bands are also known as the wedding bands. They are lined with diamonds and look like precious gemstones in a circle. The circular loop of diamonds signifies eternal and unending love. This sentiment is what makes the eternity band a perfect gift for couples on special occasions, such as anniversaries, childbirth or anything that makes a difference to their life.Eternity bands are also known as the wedding bands. They are lined with diamonds and look like precious gemstones in a circle.

    .image

  send-box-with-slot
    h2.dot Gewoon even praten of heb je vragen

</template>

<script>

// TODO see if i can get icons working in storybook

export default {
  components: {
    Orb: require('src/components/Orb'),
    WhiteOrb: require('./WhiteOrb'),
    SendBoxWithSlot: require('src/components/SendBox/SendBoxWithSlot')
  },

  data() {
    return {
      layerLinesOffsetX: 0,
      layerLinesOffsetY: 0,

      layerStarsOffsetX: 0,
      layerStarsOffsetY: 0
    }
  },

  computed: {
    layerLinesStyle() {
      return {
        'background-position-x': this.layerLinesOffsetX + 'px',
        'background-position-y': this.layerLinesOffsetY + 'px'
      }
    },

    layerStarsStyle() {
      return {
        'background-position-x': this.layerStarsOffsetX + 'px',
        'background-position-y': this.layerStarsOffsetY + 'px'
      }
    },

    orbLarge() {
      if (window.innerWidth < 600) {
        return {
          x: 100, // TODO mobile
          y: 500,
          targetX: 200,
          targetY: -50
        }
      } else {
        return {
          x: 100,
          y: 390,
          targetX: 600,
          targetY: -100
        }
      }
    }
  },

  methods: {
    mousemove(e) {
      const LINES_FACTOR = 0.02
      const STARS_FACTOR = 0.05
      const X_OFFSET = 50 // in .layer-stars and .layer-lines this is $xOffset

      this.layerLinesOffsetX = (e.clientX - this.$refs.layerLines.clientWidth / 2) * LINES_FACTOR - X_OFFSET
      this.layerLinesOffsetY = (e.clientY - this.$refs.layerLines.clientHeight / 2) * LINES_FACTOR

      this.layerStarsOffsetX = (e.clientX - this.$refs.layerStars.clientWidth / 2) * STARS_FACTOR - X_OFFSET
      this.layerStarsOffsetY = (e.clientY - this.$refs.layerStars.clientHeight / 2) * STARS_FACTOR
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';
.vh {
  height: 100vh;
}

.page-about {
  display: flex;
  justify-content: center;
  flex-direction: column;

  .blue {
    width: 100%; // background-color: $inno-blue-dark;
    // background: url('https://placehold.it/500/001d75?text=background');
    background: url('/static/images/about_layer_background.png') no-repeat;
    background-size: cover;
    position: relative;
    padding-top: 140px;
    z-index: 0;

    h1,
    h2,
    h3,
    p {
      color: white;
    }

    .orbs {
      height: 100%;
      width: 100%;
    }

    .layer-lines {
      background: url('/static/images/about_layer_lines.png') no-repeat;
    }

    .layer-stars {
      background: url('/static/images/about_layer_stars.png') no-repeat;
    }

    .layer-lines,
    .layer-stars {
      $xOffset: 50px;

      width: 100%;
      height: 100%;
      background-size: calc(100% + #{$xOffset*2});
      background-origin: center;
      position: absolute;
      top: 0;
      left: 0;
    }

    .culture {
      margin-top: 200px;
    }
  }

  .pulse-container {
    position: relative;

    .pulse,
    &:after {
      $height: 600px;
      $width: 120vw;

      background-color: #00196a; // TODO  not inno dark?
      content: '';
      height: $height;
      width: $width;
      position: absolute;
      bottom: -$height/2;
      left: -($width - 100vw) / 2;
      border-bottom-right-radius: 50%;
      border-bottom-left-radius: 50%;
      z-index: -1; // TODO remove this for cool effect on text
    }

    &:after {
      // background: linear-gradient(to bottom,  #001a6a 60%, rgba(0, 29, 117, 0.56) 90%);
      // filter: blur(5px);
    }

    .pulse {
      filter: blur(10px);
      animation-name: pulse;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
  }

  .bottom-image {
    background: url('https://placehold.it/720x1440') no-repeat center;
    background-size: cover;
    height: 1000px;
    width: 100vw;
    z-index: -3;
  }

  .bottom {
    padding: 100px 0 60px 0;

    .image {
      background: url('https://placehold.it/400x600') no-repeat center;
      background-size: cover;
      height: 400px;
      width: 100%;
      border-radius: $border-radius;
    }
  }
}

@keyframes pulse {
  from {
    opacity: 1;
    transform: scale(1);
    filter: blur(10px);
  }

  to {
    opacity: 0;
    transform: scale(2);
    filter: blur(50px);
  }
}
</style>
