<template lang="pug">
footer
  .top.flex.flex-justify-between.flex-align-baseline.flex-column-phone
    .quote.flex.flex-column.text-left
      h2.title.dot innovadis
      p Innovadis is een vooruitstrevende technische organisatie die oplossingen bouwt voor de sectoren Smart Health en Smart Industry.

    .info.flex.flex-column.text-left
      h3.title.dot Gegevens
      .flex.flex-justify-between.flex-column-phone
        .flex.flex-column
          span Brouwerijstraat 1
          span 7523 XC Enschede
        .contact.flex.flex-column
          span +31 (0)53 850 7500
          span info@innovadis.com

    .social.flex.flex-column.text-left
      h3.title.dot Blijf op de hoogte
      a(href='', target='_blank') Facebook
      a(href='', target='_blank') Instagram
      a(href='', target='_blank') LinkedIn

  .bottom.flex.flex-justify-between.flex-column-reverse-phone
    .left
      router-link(to='/todo') Algemene voorwaarden

    .right
      .links.flex.flex-justify-between
        router-link(to='/todo') Nieuws.
        router-link(to='/todo') Contact.
        router-link(to='/todo') Werken bij.
        router-link(to='/todo') Support.

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

  .top {
    background: url('/static/images/svg/footer_orbs.svg'), linear-gradient(270deg, $inno-blue 0%, $inno-blue-dark 100%);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center bottom;
    padding: 100px $gutter * 2 100px $gutter;

    @include phone {
      padding: 60px 20px;
      background-size: contain;
      background-position: bottom right;
    }

    * {
      color: white;
    }

    .quote {
      max-width: 380px;

      @include phone {
        margin-bottom: 40px;
      }

      .title {
        margin: 0;
        font-size: 30px;
      }

      p {
        margin-top: 10px;
      }
    }

    .info {
      width: 350px;

      @include phone {
        margin-bottom: 60px;
      }

      .title {
        margin-bottom: 10px;
      }

      .contact {
        margin-top: 20px;
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

    @include phone {
      padding: 20px;
    }

    a {
      color: $gray3;
    }

    .left {
      @include phone {
        margin-top: $gutter/2;
        text-align: center;
      }

      a {
        font-size: 14px;
      }
    }

    .right {
      width: 350px;

      @include phone {
        width: auto;
      }

      a {
        font-family: 'Bitter';
        font-weight: 600;

        @include phone {
          font-size: 12px;
        }
      }
    }
  }

  a {
    transition: all 0.2s ease-in-out;
    transform-origin: left;

    &:hover {
      transform: scale(1.2);
      color: $inno-yellow;
    }
  }
}
</style>
