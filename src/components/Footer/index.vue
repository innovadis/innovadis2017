<template lang="pug">
footer
  .top.flex.flex-justify-between.flex-align-baseline
    .quote.flex.flex-column.text-left
      h2.title.dot innovadis
      p Innovadis is een vooruitstrevende technische organisatie die oplossingen bouwt voor de sectoren Smart Health en Smart Industry.

    .info.flex.flex-column.text-left
      h3.title.dot Gegevens
      .flex.flex-justify-between
        .flex.flex-column
          span Brouwerijstraat 1
          span 7523 XC Enschede
        .flex.flex-column
          span +31 (0)53 850 7500
          span info@innovadis.com

    .social.flex.flex-column.text-left
      h3.title.dot Blijf op de hoogte
      a(href='', target='_blank') Facebook
      a(href='', target='_blank') Instagram
      a(href='', target='_blank') LinkedIn

  .bottom.flex.flex-justify-between
    .left
      router-link(to='/todo') Algemene voorwaarden

    .right
      .links.flex.flex-justify-between
        router-link(to='/todo') Nieuws.
        router-link(to='/todo') Contact.
        router-link(to='/todo') Werken bij.

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

footer {
  width: 100vw;
  max-width: 100%;

  .top {
    background: url('/static/images/svg/footer_orbs.svg'), linear-gradient(270deg, $inno-blue 0%, $inno-blue-dark 100%);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center bottom;
    padding: 100px $gutter * 2 100px $gutter;

    * {
      color: white;
    }

    .quote {
      max-width: 380px;

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

      .title {
        margin-bottom: 10px;
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

    a {
      color: $gray3;
    }

    .left {
      a {
        font-size: 14px;
      }
    }

    .right {
      width: 350px;

      a {
        font-family: 'Bitter';
        font-weight: 600;
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
