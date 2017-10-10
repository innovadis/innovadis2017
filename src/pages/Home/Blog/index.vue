  <template lang="pug">
.page-event(v-if='blogItem')
  .container.pt
    h1.dot {{ blogItem.title }}
    p.intro {{ blogItem.lead }}

  .hero-image(:style='{ background: "url(" + blogItem.heroImage + ")" }')
    .info
      h5.type Blog
      .author Door: {{ blogItem.author }}
      .date Publicatiedatum: {{ date }}

  .content-body.container(v-html='blogItem.body')

  social-share

  send-box-with-slot(flip, :subject='"Reactie op blog artikel: " + this.blogItem.title')
    h2 Vragen over dit artikel?

  simple-feed(
    title='Ook interessant',
    :items='feedItems',
    dark
    )

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

  data() {
    return {
      googleTitle: ''
    }
  },

  computed: {
    blogItem() {
      if (this.$store.state.feed.blog.length === 0) return

      return this.$store.state.feed.blog.find(x => Slug(x.title) === this.$route.params.name)
    },

    date() {
      return Moment(this.blogItem.publish_date).format('DD MMMM YYYY')
    },

    feedItems() {
      return this.$store.getters['feed/contentTags'](this.blogItem.tags, this.blogItem.title)
    }
  },

  head: {
    title: {
      inner: 'Blog'
    },
    meta: [
      // Google+
      { itemprop: 'name', content: this.googleTitle },
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
  },

  mounted() {
    // this.googleTitle  = this.blogItem.title

    this.$emit('updateHead')
  }

  // watch: {
  //   'blogItem': {
  //     handler: function(v) {
  //       console.log('123')
  //       this.$emit('updateHead')
  //     },
  //     immediate: true,
  //     deep: true
  //   }
  // }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

</style>
