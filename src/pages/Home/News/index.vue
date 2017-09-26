  <template lang="pug">
.page-event
  .container.pt
    h1.dot {{ newsItem.title }}
    p.intro {{ newsItem.lead }}

  .container(v-html='newsItem.body')

  .container.pt
    .date Publicatiedatum: {{ date }}

  social-share

  send-box-with-slot(flip, :subject='"Reactie op nieuwsbericht: " + this.newsItem.title')
    h2 Vragen over dit bericht?

  simple-feed(title='Gerelateerd')

</template>

<script>
import Moment from 'moment'

export default {
  components: {
    SendBoxWithSlot: require('src/components/SendBox/SendBoxWithSlot'),
    SimpleFeed: require('src/components/Feed/Simple'),
    SocialShare: require('src/components/SocialShare')
  },

  computed: {
    newsItem() {
      if (this.$store.state.news.all.length === 0) return

      return this.$store.state.news.all[0].content.nl
    },

    date() {
      return Moment(this.newsItem.publish_date).format('DD MMMM YYYY')
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

.intro {
  // font-weight: bold;
  margin-bottom: 40px;
}

.page-event {
  .image {
    width: 100%;
    height: 800px;
    background-position: center !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
  }

  .video {
    background: url('https://placehold.it/600?text=video') no-repeat center;
    background-size: cover;
    height: 450px;
    width: 120%;
    position: relative;
    left: -10%;
    margin-bottom: $gutter;
    border-radius: $border-radius;
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
