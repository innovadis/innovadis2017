  <template lang="pug">
.page-event
  .container.pt
    h1.dot Innovadis en partners lanceren een Smart Industry event
    p.intro There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.

  .image(:style='{ background: "url(https://placehold.it/720?text=image)" }')

  .container.pt
    h2.dot Tijd voor een doorbraak
    p Eternity bands are a classy and stylish innovation to storm the market. These are often gifted for a marriage anniversary or at the time of giving birth to a child. These eternity bands need no occasion to be gifted and can be given as gifts whenever one wishes to.
    p Eternity bands are also known as the wedding bands. They are lined with diamonds and look like precious gemstones in a circle. The circular loop of diamonds signifies eternal and unending love. This sentiment is what makes the eternity band a perfect gift for couples on special occasions, such as anniversaries, childbirth or anything that makes a difference to their life.
    ul.list
      li Eternity bands are a classy and stylish
      li Innovation to storm the market.
      li These are often gifted for a marriage anniversary or at the time of giving birth to a child.
      li These are often gifted for a marriage anniversary or at the time of giving birth to a child.

    p Eternity bands are a classy and stylish innovation to storm the market. These are often gifted for a marriage anniversary or at the time of giving birth to a child. These eternity bands need no occasion to be gifted and can be given as gifts whenever one wishes to.

    h2.dot Programma

    p Eternity bands are a classy and stylish innovation to storm the market. These are often gifted for a marriage anniversary or at the time of giving birth to a child. These eternity bands need no occasion to be gifted and can be given as gifts whenever one wishes to.

    //- TODO send data to program component
    program

  .container.pt
    h2.dot Tijd voor een doorbraak
    p Eternity bands are a classy and stylish innovation to storm the market. These are often gifted for a marriage anniversary or at the time of giving birth to a child. These eternity bands need no occasion to be gifted and can be given as gifts whenever one wishes to.

    .video

    //- TODO connect
    social-share

  send-box-with-slot(flip)
    h2.dot Aanmelden voor het event

  simple-feed(title='Gerelateerd')

</template>

<script>
export default {
  components: {
    Program: require('./Program'),
    SendBoxWithSlot: require('src/components/SendBox/SendBoxWithSlot'),
    SimpleFeed: require('src/components/Feed/Simple'),
    SocialShare: require('src/components/SocialShare')
  },

  computed: {
    eventItem() {
      if (this.$store.state.events.all.length === 0) return

      return this.$store.state.events.all[0].content.nl
    },

    date() {
      return (new Date(this.eventItem.publish_date)).toDateString() // TODO ?
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
