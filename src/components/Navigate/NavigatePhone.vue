<template lang="pug">
.navigate-phone.text-left
  h3 Innovadis
  span {{ address }}
  span {{ postalCode }}
  br
  .contact
    a.flex.flex-align-center(:href='"tel:" + phoneNumber ')
      i.icons8-phone
      | {{ phoneNumberLabel }}
    a.flex.flex-align-center(:href='"mailto:" + email ')
      i.icons8-email-2
      | {{ email }}

  .navigate.flex.flex-column.flex-align-center
    orb(:size='60', icon='driver', :initialX='-50', :initialY='-90', :shadow='false')
    .flex.flex-align-center
      a(href='https://www.google.com/maps?f=d&daddr=Innovadis+Enschede', target='_blank') Routebeschrijving
      i.icons8-advance

</template>

<script>
export default {
  components: {
    Orb: require('src/components/Orb')
  },

  props: ['address', 'postalCode', 'phoneNumber', 'phoneNumberLabel', 'email']
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";
@import "src/styles/layout";

.navigate-phone {
  background: $inno-yellow-light;
  border-radius: $border-radius;
  padding: $gutter/2;
  width: calc(100vw - #{$gutter*2});
  display: none;
  flex-direction: column;
  margin-top: 160px;

  @include phone {
    display: flex;
  }

  .contact {
    a {
      margin: 5px 0;

      i {
        font-size: 28px;
        margin-right: 8px;
      }
    }
  }

  .navigate {
    margin-top: 100px;

    .orb {
      background: $inno-blue;
      color: white;
      padding: 10px;
      border-radius: 45%;
      transform: skewX(-5deg);
      margin-right: 10px;
    }

    a {
      margin-right: 10px;
    }

    i {
      font-size: 36px;
    }
  }
}

a {
  color: $gray3;
  transition: all 0.2s ease-in-out;
  display: table;
}
</style>
