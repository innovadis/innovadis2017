<template lang="pug">
.page-job(v-if='job')
  .container.pt
    inno-button-alternate(yellow, label='Naar werken bij', left, :to='{ name: "jobs" }')
    h1.dot {{ job.title }}
    p.intro {{ job.lead }}

    .job-details.flex.flex-align-center.flex-justify-between.flex-column-phone.flex-align-start-phone
      .flex.flex-column-phone
        .hours.flex.flex-align-center
          i.mr.icons8-clock
          span {{ job.hours }} uur
        .tech.flex.flex-align-center
          i.mr.icons8-fantasy
          span {{ job.tech }}
      inno-button(primary, label='Afspraak maken', small, @click='scrollToSendbox')

    .divider

    .padded-container(v-html='job.body')

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
  },

  computed: {
    job() {
      if (this.$store.state.jobs.all.length === 0) return

      return this.$store.state.jobs.all[0].content.nl
    }
  },

  head: {
    title: {
      inner: 'test'
    },
    meta: [
      // Google+
      { itemprop: 'name', content: 'Content Title' },
      { itemprop: 'description', content: 'Content Title' },
      { itemprop: 'image', content: 'Content Title' },

      // Twitter
      { name: 'twitter:title', content: 'Content Title' },
      { name: 'twitter:description', content: 'Content Title' },
      { name: 'twitter:image', content: 'Content Title' },

      // Facebook
      { property: 'og:title', content: 'Content Title' },
      { property: 'og:description', content: 'short intro' },
      { property: 'og:locale', content: 'nl_NL' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'todo' }, // only if you want to overwrite default
      { property: 'og:url', content: 'todo' }
    ]

    // TODO meta tags, og, twitter, etc
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
