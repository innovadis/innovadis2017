<template lang="pug">
.page-partners
  .container.pt
    h1.dot Onze partners
    p.intro Bij Innovadis lopen we graag voorop, maar hoe houd je alle ontwikkelingen nog bij? Wij geloven dat door samen te werken met innovatieve partners, we gezamenlijk de meeste waarde kunnen creëren voor onze opdrachtgevers. Niet alleen praktisch, maar vooral ook leuk!

    p.intro Lees hier meer over onze strategische partners van nu. En denk je dat je zelf een van onze partners van de toekomst kunt worden, aarzel niet om contact op te nemen.

  .map
    .background
    google-map.hidden-phablet(:center='partners.umbraco.location', :zoom='6', :options='options', ref='map')
      google-map-marker(
        :position.sync='selectedPartner.location',
        v-if='selectedPartner'
        :opacity='markerOpacityNumber',
        :icon="{ path: 'M0,18.5c0,8.3,5,13.2,13.6,13.2c11.5,0,18.4-7.2,18.4-18.4c0-8.5-5.1-13.1-13.8-13.1C6.7,0.3,0,7.2,0,18.5', fillColor: 'rgba(255, 255, 255, 1)', fillOpacity: 1, strokeWeight: 0, scale: 0.7 }"
        )
    .gradient.hidden-phablet
    .radial-gradient.hidden-phablet
    .partners.flex.flex-align-center
      .names.flex.flex-column
        .name(v-for='partner in partnerObjects', @click='setSelectedPartner(partner.key)', :class='{ selected: selectedPartnerKey === partner.key }') {{ partner.name }}

      transition(name='slidetop', mode='out-in')
        .card.flex.flex-column(v-if='selectedPartner', :key='selectedPartner.key')
          .logo(:style='{ background: "url(" + selectedPartner.logo + ")" }')
          b(v-if='selectedPartner.lead') {{ selectedPartner.lead }}
          p.text {{ selectedPartner.text }}

  send-box-with-slot.pt(flip)
    h2.dot Gewoon even praten of heb je vragen
</template>

<script>
import { load, Map, Marker } from 'vue2-google-maps'

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

  data () {
    return {
      options: {
        styles: require('./mapStyle.json'),
        disableDefaultUI: true
      },
      partners: {
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
        dynamicweb: {
          location: {
            lat: 55.7115365,
            lng: 9.7029507
          },
          logo: '/static/images/logos/dynamicweb.png',
          name: 'DynamicWeb',
          lead: '',
          text: 'Dynmicweb en Innovadis werken al sinds 2006 samen. Als premium sollution partner ontwikkelen wij een deel van onze oplossingen op het Dynamicweb All-in-one business platform. Dit platform combineert e-commerce, marketing en content management en vormt voor veel van onze klanten het fundament voor hun online omgeving. Dynamicweb is een Deens softwarebedrijf met wereldwijd meer dan 200 partners die gebruik maken van de software.'
        },
        inextenso: {
          location: {
            lat: 52.3102499,
            lng: 6.9358725
          },
          logo: '/static/images/logos/inextenso.png',
          name: 'Inextenzo',
          lead: '',
          text: 'Inextenzo en Innovadis hebben samen een unieke propositie gecreëerd. Gezamenlijk helpen we onze opdrachtgever bij het verbeteren van klantwaarde, door op basis van duidelijke doelen en strategie slimme online oplossingen te ontwikkelen. Daarmee helpen de specialisten van Inextenzo onze opdrachtgevers om meer waarde te halen uit relaties. Zo worden klantrelaties gebouwd, gevierd, verlengd en worden klanten ambassadeurs.'
        },
        microsoft: {
          location: {
            lat: 47.6546391,
            lng: -122.1224031
          },
          logo: '/static/images/logos/microsoft.png',
          name: 'Microsoft',
          lead: '',
          text: 'Bij de meeste oplossingen die we realiseren maken we gebruik van tooling en systemen van Microsoft. Dankzij onze aantoonbare ervaring en onze gecertificeerde medewerkers zijn wij al meer dan tien jaar Silver Partner van Microsoft. Daardoor krijgen we uit eerste hand de nieuwste informatie en middelen en beschikken onze opdrachtgevers over een stevig fundament voor hun oplossingen.'
        },
        saxion: {
          location: {
            lat: 52.2206818,
            lng: 6.8843052
          },
          logo: '/static/images/logos/saxion.png',
          name: 'Saxion & UT',
          lead: '',
          text: `De Universiteit en Saxion zijn belangrijke partners voor Innovadis. Afstudeerders en stagiaires van verschillende opleidingen maken deel uit van ons team. Ze leren ons over de nieuwste ontwikkelingen en technieken. Daarnaast werken we samen met de Universiteit in een Europees innovatieproject op het gebied van logistiek en Big Data. Met Saxion werken we aan een onderzoeksproject op het gebied van Smart Industry en Internet of Things.

Onze praktijkervaring delen we met studenten door gastcolleges te geven.`
        },
        syncforce: {
          location: {
            lat: 51.3936263,
            lng: 5.4491639
          },
          logo: '/static/images/logos/syncforce.png',
          name: 'SyncForce',
          lead: '',
          text: `Met de digitalisering van de wereld, stijgt ook de vraag naar goede content en efficiënte content distributie. Bij een groot deel van onze oplossingen is content key. Met SyncForce bieden we onze klanten een goede basis voor dit vraagstuk. SyncForce Portfolio Lifecycle Management cloud helpt merkfabrikanten om producten sneller op de markt te brengen in een multichannel wereld. Door alle productinformatie- en digital assets te centraliseren wordt een consistente digitale beschikbaarheid mogelijk over alle kanalen heen. Via one click distributie is het mogelijk om vanuit PIM/DAM direct te publiceren naar digitale kanalen (website, webshop, portals en datapools), documenten en catalogi.`
        },
        umbraco: {
          location: {
            lat: 55.4130313,
            lng: 10.3323377
          },
          logo: '/static/images/logos/umbraco.png',
          name: 'Umbraco',
          lead: '',
          text: `Wij zijn officieel Umbraco Partner. Dat betekend dat wij altijd op de hoogte zijn van de nieuwste ontwikkelingen en kennis op Umbraco gebied. Hiermee heb je de zekerheid van een ervaren partner in het implementeren van Umbraco oplossingen. Wij hebben onder andere  Umbraco implementaties verzorgd voor Ardanta (ASR Verzekeringen), AXA Stenman Industries en DBC. Wil je meer weten over onze Umbraco cases of wil je een demo van de mogelijkheden van Umbraco? Neem dan contact met ons op!`
        }
      },

      markerOpacity: 0,
      markerOpacityTimeout: null,
      lastSelectedPartnerKey: null,
      selectedPartnerKey: 'ceecee',
      panPath: [],   // An array of points the current panning action will use
      panQueue: [],  // An array of subsequent panTo actions to take

      title: 'Onze Partners',
      description: 'Wij geloven dat door samen te werken met innovatieve partners, we gezamenlijk de meeste waarde kunnen creëren voor onze opdrachtgevers.'
    }
  },

  computed: {
    partnerObjects () {
      return Object.keys(this.partners).map(x => {
        return {
          key: x,
          name: this.partners[x].name
        }
      })
    },

    selectedPartner () {
      return this.partners[this.selectedPartnerKey]
    },

    markerOpacityNumber () { // Because: https://github.com/juliangarnier/anime/issues/116
      return typeof this.markerOpacity === 'string' ? parseFloat(this.markerOpacity) : this.markerOpacity
    }
  },

  methods: {
    setSelectedPartner (key) {
      this.selectedPartnerKey = key

      this.panTo(this.partners[key].location.lat, this.partners[key].location.lng)

      this.markerOpacity = 0

      this.increaseMarkerOpacity()

      this.lastSelectedPartnerKey = this.selectedPartnerKey
    },

    increaseMarkerOpacity () {
      this.markerOpacityTimeout = setTimeout(() => {
        this.markerOpacity += 0.05

        if (this.markerOpacity < 1) this.increaseMarkerOpacity()
      }, 50)
    },

    panTo (newLat, newLng) {
      const { panPath, panQueue } = this
      const map = this.$refs.map

      let steps = 150 // Amount of steps between 2 panning points

      if (this.selectedPartnerKey === 'microsoft' || this.lastSelectedPartnerKey === 'microsoft') {
        steps = 50 // Because Microsoft is so far away from the rest, speed it up
      }

      if (panPath.length > 0) {
        // We are already panning...queue this up for next move
        panQueue.push([newLat, newLng])
      } else {
        // Lets compute the points we'll use
        panPath.push('LAZY SYNCRONIZED LOCK')  // make length non-zero - 'release' this before calling setTimeout
        var curLat = map.$mapObject.getCenter().lat()
        var curLng = map.$mapObject.getCenter().lng()
        var dLat = (newLat - curLat) / steps
        var dLng = (newLng - curLng) / steps

        for (var i = 0; i < steps; i++) {
          panPath.push([curLat + dLat * i, curLng + dLng * i])
        }
        panPath.push([newLat, newLng])
        panPath.shift()      // LAZY SYNCRONIZED LOCK
        setTimeout(this.doPan, 5)
      }
    },

    doPan () {
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

  mounted () {
    setTimeout(() => {
      this.increaseMarkerOpacity()
    }, 1000)
  },

  head: {
    title () {
      return {
        inner: this.title
      }
    },
    meta () {
      return [
        { name: 'description', content: this.description },

        // Google+
        { itemprop: 'name', content: this.title },
        { itemprop: 'description', content: this.description },

        // Twitter
        { name: 'twitter:title', content: this.title },
        { name: 'twitter:description', content: this.description },

        // Facebook
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.map {
  height: 800px;
  margin-top: 100px;
  position: relative;
  overflow: hidden;

  @include phablet {
    height: 1000px;
  }

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
    background: linear-gradient(
      to right,
      $inno-blue-dark,
      $inno-blue-dark 30%,
      transparent 60%
    );
  }

  .radial-gradient {
    background-image: radial-gradient(
      circle farthest-corner at 80% center,
      transparent,
      $inno-blue-dark 35%
    );
  }

  .partners {
    display: flex;

    @include phablet {
      flex-direction: column;
      margin: $gutter 0;
    }

    .names {
      margin-left: 50px;

      @include phablet {
        margin-left: 0;
      }

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

      @include phablet {
        margin-left: 0;
        margin: $gutter;
      }

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
@import "src/styles/variables";

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
