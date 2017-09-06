<template lang="pug">
.page-job
  .container.pt
    inno-button-alternate(yellow, label='Naar werken bij', left, :to='{ name: "jobs" }')
    h1.dot Senior Back-end developer
    p.intro There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.

    .job-details.flex.flex-align-center.flex-justify-between.flex-column-phone.flex-align-start-phone
      .flex.flex-column-phone
        .hours.flex.flex-align-center
          i.mr.icons8-clock
          span 40 uur
        .tech.flex.flex-align-center
          i.mr.icons8-fantasy
          span Vue.JS, HTML, CSS, JavaScript
      inno-button(primary, label='Afspraak maken', small, @click='scrollToSendbox')

    .divider

    .padded-container
      h3 Wil jij dit?
      p Slso known as the wedding bands. They are lined with diamonds and look like precious gemstones in a circle. The circular loop of diamonds signifies eternal and unending love. This sentiment is what makes the eternity band a perfect gift for couples on special occasions, such as anniversaries, childbirth or anything that makes a difference to their life.

      h3 Ben jij dit?
      p Slso known as the wedding bands. They are lined with diamonds and look like precious gemstones in a circle. The circular loop of diamonds signifies eternal and unending love. This sentiment is what makes the eternity band a perfect gift for couples on special occasions, such as anniversaries, childbirth or anything that makes a difference to their life.

      ul.list
        li Also known as the wedding bands.
        li The circular loop of diamonds signifies eternal and unending love. This sentiment is what makes the eternity band a perfect gift for couples on special occasions.
        li Such as anniversaries, childbirth or anything.
        li That makes a difference to their life.
        li They are lined with diamonds and look like precious gemstones in a circle.

      p Also known as the wedding bands. They are lined with diamonds and look like precious gemstones in a circle. The circular loop of diamonds signifies eternal and unending love. This sentiment is what makes the eternity band a perfect gift for couples on special occasions, such as anniversaries, childbirth or anything that makes a difference to their life.

      h3 Onze wereld
      p Also known as the wedding bands. They are lined with diamonds and look like precious gemstones in a circle. The circular loop of diamonds signifies eternal and unending love. This sentiment is what makes the eternity band a perfect gift for couples on special occasions, such as anniversaries, childbirth or anything that makes a difference to their life.

    send-box-with-slot(ref='sendbox')
      h2.dot Laten we elkaar wat beter leren kennen


</template>

<script>
import SmoothScroll from 'smooth-scroll'

export default {
  components: {
    SendBoxWithSlot: require('src/components/SendBox/SendBoxWithSlot')
  },

  methods: {
    scrollToSendbox() {
      const scroll = new SmoothScroll()
      scroll.init({
        speed: 1000
      })

      scroll.animateScroll(this.$refs.sendbox.$el.offsetTop)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.page-job {
  @include phone {
    padding-top: 0;
  }

  .divider {
    border-bottom: 1px solid $gray1;
    margin: $gutter/2 0 $gutter 0;
    width: 110%;
    left: -5%;
    position: relative;
  }

  @include phone {
    .job-details {
      .tech {
        margin: 15px 0;
        margin-left: 5px;
      }
    }
  }

  .sendboxwithslot {
    margin-top: $gutter;
  }
}

i.mr {
  margin-right: 10px;
}
</style>
