<template lang="pug">
.page-about
  .top
    .container.pt.text-center
      h1.dot Wie wij zijn
      p.intro Sinds 1994 bedenken- en bouwen we samen met onze opdrachtgevers innovatieve internetoplossingen. De kracht zit hem in onze teams die samen met onze opdrachtgevers de best mogelijke oplossing bedenkt die aansluit bij jullie strategie. Onze teams bestaan uit ervaren consultants, ontwikkelaars en designers die periodiek werkende software opleveren. Voorbeelden van onze oplossingen zijn webshops, portalen, PIM/ MDM, apps en maatwerk applicaties.
      p.intro We gaan voor duurzame relaties met al onze opdrachtgevers en partners. Opdrachtgevers waar we al meer dan 10 jaar mee samenwerken zijn geen uitzondering. Wij worden blij wanneer onze oplossingen mensen daadwerkelijk verder helpen en toegevoegde waarde leveren.
      p.intro Innovadis verbindt.

  .yellow.flex.flex-justify-center
    switch-box

  .container.pt
    h2.dot Wij zijn een partner voor de toekomst
    p Eternity bands are also known as the wedding bands. They are lined with diamonds and look like precious gemstones in a circle. The circular loop of diamonds signifies eternal and unending love. This sentiment is what makes the eternity band a perfect gift for couples on special occasions, such as anniversaries, childbirth or anything that makes a difference to their life.Eternity bands are also known as the wedding bands. They are lined with diamonds and look like precious gemstones in a circle.

  .flex.flex-justify-center
    img(src='/static/images/cover/meeting1.png')

</template>

<script>
export default {
  components: {
    SwitchBox: require('./SwitchBox')
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
    padding: 100px 0 140px 0;
    position: relative;
    z-index: 0;
    height: 660px; // because switchbox is absolute due to animation
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
      top: -200px;
      left: 0;
      z-index: -1;
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
    }
  }

  img {
    height: 450px;
    margin: $gutter 0 100px 0;
  }
}
</style>

