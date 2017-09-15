<template lang="pug">
.page-partners
  .container.pt
    h1.dot Onze partners
    p.intro Bij Innovadis geloven we in samenwerkingen met technology & business partners. Wij werken intensief samen met onze partners om onze klanten daadwerkelijk verder helpen en toegevoegde waarde te bieden.

  .map
    .background
    google-map(:center='partners.umbraco.location', :zoom='6', :options='options', ref='map')
      google-map-marker(
        :position.sync='selectedPartner.location',
        v-if='selectedPartner'
        :opacity='markerOpacityNumber',
        :icon="{ path: 'M0,5a5,5 0 1,0 10,0a5,5 0 1,0 -10,0', fillColor: 'rgba(255, 255, 255, 1)', fillOpacity: 1, strokeWeight: 0, scale: 3 }"
        )
    .gradient
    .radial-gradient
    .partners.flex.flex-align-center
      .names.flex.flex-column
        .name(v-for='partner in partnerObjects', @click='setSelectedPartner(partner.key)', :class='{ selected: selectedPartnerKey === partner.key }') {{ partner.name }}

      transition(name='slidetop', mode='out-in')
        .card.flex.flex-column(v-if='selectedPartner', :key='selectedPartner.key')
          .logo(:style='{ background: "url(" + selectedPartner.logo + ")" }')
          b {{ selectedPartner.lead }}
          p.text {{ selectedPartner.text }}

  send-box-with-slot.pt(flip)
    h2.dot Gewoon even praten of heb je vragen
</template>

<script>
import { load, Map, Marker } from 'vue2-google-maps'

const STEPS = 150     // The number of steps that each panTo action will undergo

load({
  key: 'AIzaSyBqGIVa9BAbTJKqxQrw5uDl8Y36GaUamBk'
  // v: '3.24',                // Google Maps API version
  // libraries: 'places',   // If you want to use places input
})

export default {
  components: {
    SendBoxWithSlot: require('src/components/SendBox/SendBoxWithSlot'),
    GoogleMap: Map,
    GoogleMapMarker: Marker
  },

  data() {
    return {
      options: {
        styles: require('./mapStyle.json'),
        disableDefaultUI: true
      },
      partners: {
        umbraco: {
          location: {
            lat: 55.4130313,
            lng: 10.3323377
          },
          logo: '/static/images/logos/umbraco.png',
          name: 'Umbraco',
          lead: 'Innovadis is Umbraco partner',
          text: `Wij zijn officieel Umbraco Partner. Dat betekend dat wij altijd op de hoogte zijn van de nieuwste ontwikkelingen en kennis op Umbraco gebied. Hiermee heb je de zekerheid van een ervaren partner in het implementeren van Umbraco oplossingen. Wij hebben onder andere  Umbraco implementaties verzorgd voor Ardanta (ASR Verzekeringen), AXA Stenman Industries en DBC. Wil je meer weten over onze Umbraco cases of wil je een demo van de mogelijkheden van Umbraco? Neem dan contact met ons op!`
        },
        dynamicweb: {
          location: {
            lat: 55.7115365,
            lng: 9.7029507
          },
          logo: '/static/images/logos/dynamicweb.png',
          name: 'DynamicWeb',
          lead: 'Innovadis is DynamicWeb partner',
          text: 'todo'
        },
        syncforce: {
          location: {
            lat: 51.3936263,
            lng: 5.4491639
          },
          logo: '/static/images/logos/syncforce.png',
          name: 'SyncForce',
          lead: 'Innovadis is SyncForce partner',
          text: `SyncForce Portfolio Lifecycle Management cloud helpt merkfabrikanten om producten sneller op de markt te brengen in een multichannel wereld. Door alle productinformatie- en digital assets te centraliseren wordt een consistente digitale beschikbaarheid mogelijk over alle kanalen heen. SyncForce is de ‘single source of truth’ als het gaat om product portfolio content. Via one click distributie is het mogelijk om vanuit PIM/DAM direct te publiceren naar digitale kanalen (website, webshop, portals en datapools) en documenten (datasheets, product linecards en catalogi).

Opdrachtgevers die gebruik maken van onze oplossingen zijn onder andere Apollo/ Vredestein, Pentair, AXA Security en Morssinkhof Groep`
        },
        ceecee: {
          location: {
            lat: 52.232979,
            lng: 6.8879623
          },
          logo: '/static/images/logos/ceecee.png',
          name: 'CeeCee Community',
          lead: 'Lid CeeCee Community',
          text: `CeeCee is een inspirerende werk- en ontmoetings- plek voor creatieven in media, technologie, ICT, design en architectuur. Dé plek om succesvolle innovaties te co-creëren en wereldbestormende ideeën te ontwikkelen. Als lid van de CeeCee community versterken we elkaar als creatieve ondernemers in onze activiteiten en vormen we samen een professioneel en uitdagend werkklimaat.`
        },
        inextenso: {
          location: {
            lat: 52.3102499,
            lng: 6.9358725
          },
          logo: '/static/images/logos/inextenso.png',
          name: 'Inextenso',
          lead: 'Innovadis is Inextenso partner',
          text: 'todo'
        },
        microsoft: {
          location: {
            lat: 47.6546391,
            lng: -122.1224031
          },
          logo: '/static/images/logos/microsoft.png',
          name: 'Microsoft',
          lead: 'Innovadis is Microsoft partner',
          text: 'todo'
        },
        saxion: {
          location: {
            lat: 52.2206818,
            lng: 6.8843052
          },
          logo: '/static/images/logos/saxion.png',
          name: 'Saxion',
          lead: 'Innovadis is Saxion partner',
          text: 'todo'
        }
      },

      markerOpacity: 0,
      markerOpacityTimeout: null,
      selectedPartnerKey: 'umbraco',
      panPath: [],   // An array of points the current panning action will use
      panQueue: []  // An array of subsequent panTo actions to take
    }
  },

  computed: {
    partnerObjects() {
      return Object.keys(this.partners).map(x => {
        return {
          key: x,
          name: this.partners[x].name
        }
      })
    },

    selectedPartner() {
      return this.partners[this.selectedPartnerKey]
    },

    markerOpacityNumber() { // Because: https://github.com/juliangarnier/anime/issues/116
      return typeof this.markerOpacity === 'string' ? parseFloat(this.markerOpacity) : this.markerOpacity
    }
  },

  methods: {
    setSelectedPartner(key) {
      this.selectedPartnerKey = null

      this.panTo(this.partners[key].location.lat, this.partners[key].location.lng)
      // this.$refs.map.panTo(this.partners[key].location)

      this.markerOpacity = 0

      this.increaseMarkerOpacity()

      setTimeout(() => {
        this.selectedPartnerKey = key
      }, 300)
    },

    increaseMarkerOpacity() {
      this.markerOpacityTimeout = setTimeout(() => {
        this.markerOpacity += 0.05

        if (this.markerOpacity < 1) this.increaseMarkerOpacity()
      }, 50)
    },

    panTo(newLat, newLng) {
      const { panPath, panQueue } = this
      const map = this.$refs.map

      if (panPath.length > 0) {
        // We are already panning...queue this up for next move
        panQueue.push([newLat, newLng])
      } else {
        // Lets compute the points we'll use
        panPath.push('LAZY SYNCRONIZED LOCK')  // make length non-zero - 'release' this before calling setTimeout
        var curLat = map.$mapObject.getCenter().lat()
        var curLng = map.$mapObject.getCenter().lng()
        var dLat = (newLat - curLat) / STEPS
        var dLng = (newLng - curLng) / STEPS

        for (var i = 0; i < STEPS; i++) {
          panPath.push([curLat + dLat * i, curLng + dLng * i])
        }
        panPath.push([newLat, newLng])
        panPath.shift()      // LAZY SYNCRONIZED LOCK
        setTimeout(this.doPan, 5)
      }
    },

    doPan() {
      const { panPath, panQueue } = this
      const map = this.$refs.map

      var next = panPath.shift()
      if (next != null) {
        // Continue our current pan action
        map.panTo(new google.maps.LatLng(next[0], next[1]))
        setTimeout(this.doPan, 5)
      } else {
        // We are finished with this pan - check if there are any queue'd up locations to pan to
        var queued = panQueue.shift()
        if (queued != null) {
          this.panTo(queued[0], queued[1])
        }
      }
    }
  },

  mounted() {
    setTimeout(() => {
      this.increaseMarkerOpacity()
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.map {
  height: 800px;
  margin-top: 100px;
  position: relative;

  .radial-gradient,
  .background,
  .partners,
  .vue-map-container,
  .gradient {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .background {
    background: $inno-blue-dark;
  }

  .vue-map-container {
    margin-left: 25%;
  }

  .gradient {
    background: linear-gradient(to right, $inno-blue-dark, $inno-blue-dark 30%, transparent 60%);
  }

  .radial-gradient {
    background-image: radial-gradient(circle farthest-corner at 80% center, transparent, $inno-blue-dark 35%);
  }

  .partners {
    .names {
      margin-left: 50px;

      .name {
        color: white;
        margin: 5px 0;
        cursor: pointer;
        transition: color 0.2s ease-in-out;

        &:hover {
          color: $inno-yellow;
        }

        &.selected {
          color: $inno-yellow;
        }
      }
    }

    .card {
      margin-left: 200px;
      padding: $gutter;
      background: white;
      border-radius: $border-radius;
      max-width: 400px;

      .logo {
        background-size: contain !important;
        background-position: left center !important;
        background-repeat: no-repeat !important;
        height: 60px;
        width: 100%;
        margin-bottom: $gutter/2;
      }

      p.text {
        margin-top: 5px;
        white-space: pre-line;
      }
    }
  }
}
</style>

<style lang="scss">
@import 'src/styles/variables';

.gm-style {
  background: $inno-blue-dark;
}

.gmnoprint a,
.gmnoprint span {
  display: none;
}

.gmnoprint div {
  background: none !important;
}
</style>
