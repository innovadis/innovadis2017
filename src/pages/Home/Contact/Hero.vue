<template lang="pug">
.hero.flex.flex-align-center.flex-justify-end.flex-column.flex-justify-center-phone
  h1.dot Contact
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
  background: url('https://placehold.it/720x1440');

  @include phone {
    position: relative;
    margin-bottom: 180px;

    .navigate-phone {
      position: absolute;
      top: 140px;
    }
  }

  h1 {
    color: white;
  }
}

</style>
