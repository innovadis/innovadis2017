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

  .container.pt(v-html='eventItem.body')

  .container.pt(v-if='eventItem.program.length > 0')
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

  simple-feed(title='Ook interessant', feedGetter='contentAll')

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
        { itemprop: 'description', content: this.eventItem.lead },

        // Twitter
        { name: 'twitter:title', content: this.eventItem.title },
        { name: 'twitter:description', content: this.eventItem.lead },

        // Facebook
        { property: 'og:title', content: this.eventItem.title },
        { property: 'og:description', content: this.eventItem.lead }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.page-event {
  .video {
    margin: $gutter 0;
    display: flex;
    justify-content: center;
  }

  .share {
    margin: 80px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid $gray1;
    width: 120%;
    position: relative;
    left: -10%;

    .button {
      margin: 10px 10px;
      color: white;
      border-radius: 3px;
      padding: 10px 20px;
      font-family: Bitter;
      font-weight: bold;
      transition: all 0.2s ease-in-out;
      cursor: pointer;

      &:hover {
        box-shadow: $shadow;
      }
    }

    .facebook {
      background-color: #33599A;

      &:hover {
        background-color: lighten(#33599A, 5%);
      }
    }

    .linkedin {
      background-color: #0079B8;

      &:hover {
        background-color: lighten(#0079B8, 5%);
      }
    }
  }

  .feed {
    padding-top: 0;
  }
}
</style>
