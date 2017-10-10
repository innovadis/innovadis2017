<template lang="pug">
.share.flex.flex-align-center.flex-column
  b Deel dit bericht.
  .flex.flex-justify-center
    a.button.facebook(@click='sharePopup($event, "facebook")') Facebook
    a.button.linkedin(@click='sharePopup($event, "linkedin")') LinkedIn
</template>

<script>
const networks = {
  facebook: { width: 600, height: 300, link: 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href },
  // twitter: { width: 600, height: 254 },
  // google: { width: 515, height: 490 },
  linkedin: { width: 600, height: 473, link: 'https://www.linkedin.com/cws/share?url=' + window.location.href }
}

export default {
  methods: {
    sharePopup(e, network) {
      e.preventDefault()

      var popup = function(network) {
        const options = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,'

        const height = networks[network].height
        const width = networks[network].width
        var y = window.top.outerHeight / 2 + window.top.screenY - (height / 2)
        var x = window.top.outerWidth / 2 + window.top.screenX - (width / 2)

        window.open(networks[network].link, '', options + 'height=' + height + ',width=' + width + ',top=' + y + ',left=' + x)
      }

      popup(network)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.share {
  padding: $gutter 0 60px 0;
  margin-bottom: 80px;
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
</style>
