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

  simple-feed(title='Gerelateerd', feedGetter='contentAll')

</template>

<script>
import Moment from 'moment'
import Slug from 'slug'

export default {
  components: {
    SendBoxWithSlot: require('src/components/SendBox/SendBoxWithSlot'),
    SimpleFeed: require('src/components/Feed/Simple'),
    SocialShare: require('src/components/SocialShare')
  },

  computed: {
    newsItem() {
      if (this.$store.state.feed.news.length === 0) return

      return this.$store.state.feed.news.find(x => Slug(x.title) === this.$route.params.name)
    },

    date() {
      return Moment(this.newsItem.publish_date).format('DD MMMM YYYY')
    }
  },

  head: {
    title: {
      inner: 'Nieuws'
    },
    meta() {
      return [
        // Google+
        { itemprop: 'name', content: this.newsItem.title },
        { itemprop: 'description', content: this.newsItem.lead },

        // Twitter
        { name: 'twitter:title', content: this.newsItem.title },
        { name: 'twitter:description', content: this.newsItem.lead },

        // Facebook
        { property: 'og:title', content: this.newsItem.title },
        { property: 'og:description', content: this.newsItem.lead }
      ]
    }
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
