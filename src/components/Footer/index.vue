<template lang="pug">
footer(v-if='!$route.meta.hideFooter')
  .top
    .container.flex.flex-justify-between.flex-align-baseline.flex-column-phablet
      .quote.flex.flex-column.text-left
        h2.title.dot innovadis
        p Innovadis is een vooruitstrevende technische organisatie die oplossingen bouwt voor de sectoren Smart Health en Smart Industry.

      .info.flex.flex-column.text-left
        h3.title.dot Gegevens
        .flex.flex-justify-between.flex-column-phablet
          .flex.flex-column
            span Brouwerijstraat 1
            span 7523 XC Enschede
          .contact.flex.flex-column
            span: a(href='tel:+31538507500') +31 (0)53 850 7500
            span: a(href='mailto:info@innovadis.com') info@innovadis.com

      .social.flex.flex-column.text-left
        h3.title.dot Blijf op de hoogte
        a(href='https://www.facebook.com/Innovadis/', target='_blank') Facebook
        a(href='https://www.instagram.com/innovadis/', target='_blank') Instagram
        a(href='https://www.linkedin.com/company/55680/', target='_blank') LinkedIn

  .bottom
    .container.flex.flex-justify-between.flex-column-reverse-phablet
      .left
        router-link(:to='{ name: "conditions" }') Algemene voorwaarden

      .right
        .links.flex.flex-justify-between
          router-link(:to='{ name: "world" }') Nieuws.
          router-link(:to='{ name: "jobs" }') Werken bij.
          router-link(:to='{ name: "contact" }') Contact.

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';
@import 'src/styles/layout';

footer {
  width: 100vw;
  max-width: 100%;

  .container {
    max-width: $pageWidth;
  }

  .top {
    background: url('/static/images/svg/footer_orbs.svg'), linear-gradient(270deg, $inno-blue 0%, $inno-blue-dark 100%);
    background-repeat: no-repeat;
    background-size: 100% contain;
    background-position: center bottom;
    padding: 100px $gutter * 2 100px $gutter;

    @include phablet {
      padding: 60px 20px;
      background-size: contain;
      background-position: bottom right;
    }

    * {
      color: white;
    }

    .quote {
      max-width: 280px;

      @include phablet {
        margin-bottom: 40px;
      }

      .title {
        margin: 0;
        font-size: 30px;
      }

      p {
        margin-top: 0;
      }
    }

    .info {
      width: 350px;

      @include phablet {
        margin-bottom: 60px;
        width: auto;
      }

      .title {
        margin-bottom: 10px;
      }

      .contact {
        @include phablet {
          margin-top: 20px;
        }
      }

      span {
        line-height: 30px;
      }
    }

    .social {
      a {
        line-height: 30px;
      }

      .title {
        margin-bottom: 10px;
      }
    }
  }

  .bottom {
    padding: 25px $gutter;

    @include phablet {
      padding: 20px;
    }

    a {
      color: $gray3;
    }

    .left {
      @include phablet {
        margin-top: $gutter/2;
        text-align: center;
      }

      a {
        font-size: 14px;
      }
    }

    .right {
      a {
        font-family: 'Bitter';
        font-weight: 600;
        margin: 0 20px;

        &:last-child {
          margin-right: 0;
        }

        @include phone {
          margin: 0;
          font-size: 12px;
        }
      }
    }
  }

  a {
    transition: all 0.2s ease-in-out;

    &:hover {
      color: $inno-yellow;
    }
  }
}
</style>
