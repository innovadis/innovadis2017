<template lang="pug">
.page-about
  .blue
    .pulse
    .white.container.text-center
      h1 Wij verbinden,
      h1.dot organisaties
      p Sinds 1994 bedenken- en bouwen we samen met onze opdrachtgevers innovatieve internetoplossingen. De kracht zit hem in onze teams die samen met onze opdrachtgevers de best mogelijke oplossing bedenkt die aansluit bij jullie strategie. Onze teams bestaan uit ervaren consultants, ontwikkelaars en designers die periodiek werkende software opleveren. Voorbeelden van onze oplossingen zijn webshops, portalen, PIM/ MDM, apps en maatwerk applicaties.
      p We gaan voor duurzame relaties met al onze opdrachtgevers en partners. Opdrachtgevers waar we al meer dan 10 jaar mee samenwerken zijn geen uitzondering. Wij worden blij wanneer onze oplossingen mensen daadwerkelijk verder helpen en toegevoegde waarde leveren.
      p Innovadis verbindt.

      h2.dot.culture Cultuur

      .text-left
        .text
          h3 Vakmanschap
          p We zijn zowel intern als extern informeel en professioneel. Wij gaan een duurzame samenwerking aan met al onze relaties. Wij begrijpen de behoeften van onze opdrachtgevers en vinden een nieuwe route wanneer deze verandert. Enthousiasme is onze drijfveer.

        .text.ml
          h3 Persoonlijk
          p We zijn zowel intern als extern informeel en professioneel. Wij gaan een duurzame samenwerking aan met al onze relaties. Wij begrijpen de behoeften van onze opdrachtgevers en vinden een nieuwe route wanneer deze verandert. Enthousiasme is onze drijfveer.

        .text
          h3 Innovatie
          p De techniek heeft voor ons geen geheimen. Onze ontwikkelaars gaan geen uitdaging uit de weg, zij zoeken ze op. Ons eeuwige verlangen om te ontdekken brengt ons langs andere werelden en geeft ons nieuwe inzichten. Het stelt ons in staat om innovatieve oplossingen te ontwikkelen voor onze opdrachtgevers en hun klanten.

  .bottom-image

  .container.bottom
    h2.dot Wij zijn een partner voor de toekomst
    p Eternity bands are also known as the wedding bands. They are lined with diamonds and look like precious gemstones in a circle. The circular loop of diamonds signifies eternal and unending love. This sentiment is what makes the eternity band a perfect gift for couples on special occasions, such as anniversaries, childbirth or anything that makes a difference to their life.Eternity bands are also known as the wedding bands. They are lined with diamonds and look like precious gemstones in a circle.

    .image

  .logos
    img.logo(src='http://cataloniarentals.com/catalonia/images/logo.png')
    img.logo(src='http://cataloniarentals.com/catalonia/images/logo.png')
    img.logo(src='http://cataloniarentals.com/catalonia/images/logo.png')
    img.logo(src='http://cataloniarentals.com/catalonia/images/logo.png')
    img.logo(src='http://cataloniarentals.com/catalonia/images/logo.png')
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.page-about {
  display: flex;
  justify-content: center;
  flex-direction: column;

  .white {
    h1,
    h2,
    h3,
    p {
      color: white;
    }
  }

  .blue {
    width: 100%;
    background-color: $inno-blue-dark; // margin-bottom: 600px;
    position: relative;
    padding-top: 140px;

    .pulse,
    &:after {
      $height: 600px;
      $width: 120vw;

      background-color: $inno-blue-dark;
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

    .pulse {
      filter: blur(10px);
      animation-name: pulse;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }

    .culture {
      margin-top: 200px;
    }

    .text {
      margin: 200px 0;
      max-width: 550px;

      &.ml {
        margin-left: 80px;
      }

      p {
        margin-top: 5px;
      }
    }
  }

  .bottom-image {
    background: url('https://placehold.it/720x1440') no-repeat center;
    background-size: cover;
    height: 1000px;
    width: 100vw;
    z-index: -2;
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

  .logos {
    display: flex;
    justify-content: space-between;
    margin-bottom: $gutter;
    margin: $gutter;

    .logo {
      height: 200px;
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
