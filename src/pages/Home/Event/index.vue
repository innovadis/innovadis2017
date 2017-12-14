  <template lang="pug">
.page-event
  .container.pt
    h1.dot {{ eventItem.title }}
    p.intro {{ eventItem.lead }}

  .hero-image(:style='{ background: "url(" + eventItem.heroImage + ")" }')
    .info
      h5.type Evenement
      .author Door: {{ eventItem.author }}
      .date Publicatiedatum: {{ date }}

  .content-body.container(v-html='eventItem.body')

  .container(v-if='eventItem.program.length > 0')
    h2.dot Programma
    p {{ eventItem.programLead }}
    program(:data='eventItem.program')

  .container.pt(v-if='eventItem.bottomTitle')
    h2.dot {{ eventItem.bottomTitle }}
    p {{ eventItem.bottomText }}


  .video: youtube(:video-id='youtubeId', player-width='800px', player-height='450px')

  social-share

  send-box-with-slot(flip, :subject='"Aanmelding voor evenement: " + this.eventItem.title')
    h2.dot Aanmelden voor het event

  simple-feed(
    title='Ook interessant',
    :items='feedItems',
    dark
    )

</template>

<script>
import Vue from 'vue'
import VueYoutubeEmbed, { YouTubePlayer as Youtube, getIdFromURL } from 'vue-youtube-embed'
import Moment from 'moment'
import Slug from 'slug'

Vue.use(VueYoutubeEmbed, { global: false })

export default {
  components: {
    Program: require('./Program'),
    SendBoxWithSlot: require('src/components/SendBox/SendBoxWithSlot'),
    SimpleFeed: require('src/components/Feed/Simple'),
    SocialShare: require('src/components/SocialShare'),
    Youtube
  },

  computed: {
    eventItem() {
      if (this.$store.state.feed.events.length === 0) return

      return this.$store.state.feed.events.find(x => Slug(x.title) === this.$route.params.name)
    },

    date() {
      return Moment(this.eventItem.publish_date).format('DD MMMM YYYY')
    },

    youtubeId() {
      return getIdFromURL(this.eventItem.video)
    },

    feedItems() {
      return this.$store.getters['feed/contentTags'](this.eventItem.tags, this.eventItem.title)
    }
  },

  head: {
    title: {
      inner: 'Evenement'
    },
    meta() {
      return [
        // Google+
        { itemprop: 'name', content: this.eventItem.title },
        { itemprop: 'description', content: this.eventItem.meta_description },

        // Twitter
        { name: 'twitter:title', content: this.eventItem.title },
        { name: 'twitter:description', content: this.eventItem.meta_description },

        // Facebook
        { property: 'og:title', content: this.eventItem.title },
        { property: 'og:description', content: this.eventItem.meta_description }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.page-event {
  .content-body {
    margin-bottom: 60px;
  }

  .video {
    margin: $gutter 0;
    display: flex;
    justify-content: center;
  }
}
</style>
