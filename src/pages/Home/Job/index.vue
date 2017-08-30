<template lang="pug">
.page-job
  .container
    inno-button-alternate(yellow, label='Naar werken bij', left)
    h1.dot Senior Back-end developer
    p.intro There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.

    .details.flex.flex-align-center.flex-justify-between
      .flex
        .fa.fa-clock-o
        span.hours 40 uur
        .fa.fa-laptop
        span.tech Vue.JS, HTML, CSS, JavaScript
      inno-button(primary, label='Afspraak maken', small)

    .divider

    .padded-container
      h3 Wil jij dit?
      p Slso known as the wedding bands. They are lined with diamonds and look like precious gemstones in a circle. The circular loop of diamonds signifies eternal and unending love. This sentiment is what makes the eternity band a perfect gift for couples on special occasions, such as anniversaries, childbirth or anything that makes a difference to their life.

      h3 Ben jij dit?
      p Slso known as the wedding bands. They are lined with diamonds and look like precious gemstones in a circle. The circular loop of diamonds signifies eternal and unending love. This sentiment is what makes the eternity band a perfect gift for couples on special occasions, such as anniversaries, childbirth or anything that makes a difference to their life.

      ul
        li Also known as the wedding bands.
        li The circular loop of diamonds signifies eternal and unending love. This sentiment is what makes the eternity band a perfect gift for couples on special occasions.
        li Such as anniversaries, childbirth or anything.
        li That makes a difference to their life.
        li They are lined with diamonds and look like precious gemstones in a circle.

      p Also known as the wedding bands. They are lined with diamonds and look like precious gemstones in a circle. The circular loop of diamonds signifies eternal and unending love. This sentiment is what makes the eternity band a perfect gift for couples on special occasions, such as anniversaries, childbirth or anything that makes a difference to their life.

      h3 Onze wereld
      p Also known as the wedding bands. They are lined with diamonds and look like precious gemstones in a circle. The circular loop of diamonds signifies eternal and unending love. This sentiment is what makes the eternity band a perfect gift for couples on special occasions, such as anniversaries, childbirth or anything that makes a difference to their life.

    send-box-with-slot
      h2.dot Laten we elkaar wat beter leren kennen


</template>

<script>
export default {
  components: {
    SendBoxWithSlot: require('src/components/SendBox/SendBoxWithSlot')
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.page-job {
  padding-top: 100px;

  .divider {
    border-bottom: 1px solid $gray1;
    margin: $gutter/2 0 $gutter 0;
    width: 110%;
    left: -5%;
    position: relative;
  }

  .details {
    span,
    .fa {
      color: $gray2;
    }

    .hours {
      margin: 0 20px 0 10px;
    }

    .tech {
      margin-left: 10px;
    }

    .fa {
      font-size: 32px;
    }
  }

  ul {
    li {
      list-style-type: none;
      position: relative;
      margin: 20px 0;

      &:before {
        content: '• ';
        color: $inno-yellow;
        position: absolute;
        left: -22px;
        font-size: 20px;
        top: 2px;
      }
    }
  }

  .sendboxwithslot {
    margin-top: $gutter;
  }
}
</style>
