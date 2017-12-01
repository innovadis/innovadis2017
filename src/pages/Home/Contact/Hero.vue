<template lang="pug">
.flex.flex-align-center.flex-justify-end.flex-column.flex-justify-center-phone
  .container.pt
    h1.dot Contact
    p.intro Als echte IT-professionals kunnen we alles automatiseren, maar uiteindelijk vinden ook wij persoonlijk contact leuker. Heb je ondersteuning nodig, een supportvraag, een (IT)-uitdaging waar we ons in vast mogen bijten of wil je een van onze medewerkers spreken?

  .hero

  navigate.hidden-phone(
    :address='address',
    :postalCode='postalCode',
    :phoneNumber='phoneNumber',
    :phoneNumberLabel='phoneNumberLabel'
    :email='email'
    )
  navigate-phone(
    :address='address',
    :postalCode='postalCode',
    :phoneNumber='phoneNumber',
    :phoneNumberLabel='phoneNumberLabel'
    :email='email'
    )
</template>

<script>
export default {
  components: {
    Navigate: require('src/components/Navigate'),
    NavigatePhone: require('src/components/Navigate/NavigatePhone')
  },

  data() {
    return {
      address: 'Brouwerijstraat 1',
      postalCode: '7523 XC Enschede',
      phoneNumber: '+31538507500',
      phoneNumberLabel: '053 - 850 75 00',
      email: 'info@innovadis.com'
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';
@import 'src/styles/layout';

.hero {
  background-image: url('/static/images/cover/contact.jpg');
  width: 100vw;
  margin-bottom: -200px;
}

.carcrash {
  box-shadow: 0 10px 20px 0 $gray1;
}

</style>
