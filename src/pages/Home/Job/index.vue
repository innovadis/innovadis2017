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

    send-box-with-slot(ref='sendbox', :subject='"Reactie op vacature: " + this.job.title')
      h2.dot Laten we elkaar wat beter leren kennen

</template>

<script>
import SmoothScroll from 'smooth-scroll'
import Slug from 'slug'

export default {
  components: {
    SendBoxWithSlot: require('src/components/SendBox/SendBoxWithSlot')
  },

  data() {
    return {
      job: null
    }
  },

  methods: {
    scrollToSendbox() {
      const scroll = new SmoothScroll()
      scroll.init({
        speed: 1000
      })

      scroll.animateScroll(this.$refs.sendbox.$el.offsetTop - 180)
    }
  },

  created() {
    if (this.$store.state.jobs.all.length === 0) return

    const job = this.$store.state.jobs.all.find(x => Slug(x.content.nl.title) === this.$route.params.slug)

    if (!job) {
      // Note: this is the preferred way but it causes the target router-view to be empty for unknown reason. So workaround with window.location
      // this.$router.push({
      //   name: 'jobs'
      // })

      window.location = '/werkenbij'
    } else {
      this.job = job.content.nl
    }
  },

  head: {
    title: {
      inner: 'Vacature'
    },
    meta() {
      return [
        // Google+
        { itemprop: 'name', content: this.job.title },
        { itemprop: 'description', content: this.job.lead },

        // Twitter
        { name: 'twitter:title', content: this.job.title },
        { name: 'twitter:description', content: this.job.lead },

        // Facebook
        { property: 'og:title', content: this.job.title },
        { property: 'og:description', content: this.job.lead }
      ]
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
