<template lang="pug">
footer(v-if='!$route.meta.hideFooter')
  .top
    .container.flex.flex-justify-between.flex-align-baseline.flex-column-phablet
      .quote.flex.flex-column.text-left
        .flex
          img.logo(src='/static/images/svg/logo_white.svg')
        p Voor de industry en health bouwen en koppelen we smart systemen waardoor routinetaken verdwijnen en er tijd overblijft voor zaken die echt belangrijk zijn. 

      .info.flex.flex-column.text-left
        h3.title Gegevens.
        .flex.flex-justify-between.flex-column-phone
          .contact.flex.flex-column
            span Brouwerijstraat 1
            span 7523 XC Enschede
            br
            span: a(href='tel:+31538507500') +31 (0)53 850 7500
            span: a(href='mailto:info@innovadis.com') info@innovadis.com

      .social.flex.flex-column
        .flex.flex-column
          h3.title Blijf op de hoogte.
          .item.flex.flex-align-center
            i.icons8-facebook
            a(href='https://www.facebook.com/Innovadis/', target='_blank') Facebook

          .item.flex.flex-align-center
            i.icons8-instagram
            a(href='https://www.instagram.com/innovadis/', target='_blank') Instagram

          .item.flex.flex-align-center
            i.icons8-linkedin
            a(href='https://www.linkedin.com/company/55680/', target='_blank') LinkedIn

        router-link.conditions(:to='{ name: "conditions" }') Algemene voorwaarden
        router-link.privacy-statement(:to='{ name: "privacy statement" }') Privacy Statement

  //- .bottom
    .container.flex.flex-justify-end.flex-column-reverse-phablet
      .right
        .links.flex.flex-justify-between
          router-link(:to='{ name: "world" }') Onze wereld.
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
    background: url('/static/images/svg/footer.svg'), linear-gradient(270deg, $inno-blue 0%, $inno-blue-dark 100%);
    background-repeat: no-repeat;
    background-size: 100% contain;
    background-position: center bottom;
    padding: 100px $gutter 100px $gutter;

    @include phablet {
      padding: 60px 20px;
      background-size: contain;
      background-position: bottom right;
    }

    * {
      color: white;
    }

    .quote {
      max-width: 300px;

      @include phablet {
        margin-bottom: 40px;
      }

      @include tablet {
        max-width: 500px;
      }

      .logo {
        margin-bottom: 20px;
      }

      p {
        margin-top: 0;
        line-height: 28px;
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

      .contact {}

      span {
        line-height: 30px;
      }
    }

    .social {
      .title {
        margin-bottom: 10px;
      }

      .item {
        i {
          font-size: 24px;
          margin-right: 10px;
        }

        a {
          line-height: 30px;
        }

        .title {
          margin-bottom: 10px;
        }
      }

      .conditions {
        margin-top: 30px;
        font-size: 14px;
      }

      .privacy-statement {
        margin-top: 5px;
        font-size: 14px;
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

    .right {
      a {
        font-family: 'Bitter';
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
