  <template lang="pug">
.page-event
  .container.pt
    h1.dot {{ blogItem.title }}
    p.intro {{ blogItem.lead }}

  .image(:style='{ background: "url(" + blogItem.heroImage + ")" }')
    .info
      h5.type Blog
      .author Door: {{ blogItem.author }}
      .date Publicatiedatum: {{ date }}

  .container.pt(v-html='blogItem.body')

  social-share

  send-box-with-slot(flip)
    h2.dot Vragen over dit artikel?

  simple-feed(title='Gerelateerd')

</template>

<script>
export default {
  components: {
    SendBoxWithSlot: require('src/components/SendBox/SendBoxWithSlot'),
    SimpleFeed: require('src/components/Feed/Simple'),
    SocialShare: require('src/components/SocialShare')
  },

  computed: {
    blogItem() {
      if (this.$store.state.blog.all.length === 0) return

      return this.$store.state.blog.all[0].content.nl
    },

    date() {
      return (new Date(this.blogItem.publish_date)).toDateString()
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

.page-event {
  .image {
    // TODO global class?
    width: 100%;
    height: 800px;
    background-position: center !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    position: relative;

    .info {
      position: absolute;
      bottom: 20px;
      left: calc(50vw - 300px);
      padding: 20px;
      display: flex;
      flex-direction: column;

      @include phone {
        left: 0;
      }

      .type {
        border-bottom: 1px solid white;
        padding-bottom: 10px;
        margin-bottom: 10px;
        font-size: 18px;
      }

      .type,
      div {
        color: white;
        text-shadow: 0 0 3px rgba(0, 0, 0, 1);
      }
    }
  }

  .feed {
    padding-top: 0;
  }
}
</style>
