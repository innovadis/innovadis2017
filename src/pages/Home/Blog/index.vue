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

  computed: {
    blogItem() {
      if (this.$store.state.feed.blog.length === 0) return

      return this.$store.state.feed.blog.find(x => Slug(x.title).toLowerCase() === this.$route.params.name.toLowerCase())
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
    meta() {
      return [
        // Google+
        { itemprop: 'name', content: this.blogItem.title },
        { itemprop: 'description', content: this.blogItem.meta_description },

        // Twitter
        { name: 'twitter:title', content: this.blogItem.title },
        { name: 'twitter:description', content: this.blogItem.meta_description },

        // Facebook
        { property: 'og:title', content: this.blogItem.title },
        { property: 'og:description', content: this.blogItem.meta_description }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';
</style>
