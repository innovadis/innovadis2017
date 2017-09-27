<template lang="pug">
.header
  header.sd-header(:class='{ open: showHeader }')
    .wrapper
      router-link.flex.flex-align-center.cp(:to='{ name: "home" }', tag='div')
        img(src='/static/images/svg/logo.svg')
      ul.sd-menu
        li.sd-menu__item(data-sub="attention"): a(href="#") Aandachtsgebieden
        //- li.sd-menu__item(data-sub="products"): a(href="#") Producten
        li.sd-menu__item(data-sub="about"): a(href="#") Over ons
        li.sd-menu__item: router-link(:to='{ name: "contact" }') Contact
        li.sd-menu__item: inno-button(label='Werken bij.', :to='{ name: "jobs" }', yellow)

      .sd-dropdown-holder
        .sd-dropdown__arrow
        .sd-dropdown__bg
          .sd-dropdown__bg-bottom

        .sd-dropdown__wrap
          .orb
          .sd-dropdown-menu#attention(data-sub="attention")
            .sd-dropdown-menu__content
              .top-section
                .attention-items
                  router-link(:to='{ name: "smart-industry" }') Smart Industry
                  router-link(:to='{ name: "smart-health" }') Smart Health

          //- .sd-dropdown-menu#attention(data-sub="products")
            .sd-dropdown-menu__content
              .top-section
                .attention-items
                  router-link(:to='{ name: "product ellie" }') Ellie

          .sd-dropdown-menu#attention(data-sub="about")
            .sd-dropdown-menu__content
              .top-section
                .attention-items
                  router-link(:to='{ name: "about" }') Onze cultuur
                  router-link(:to='{ name: "world" }') Onze wereld
                  router-link(:to='{ name: "partners" }') Onze partners

                //- .col-2
                  ul
                    li
                      a(href="")
                        h3 Payment
                        p  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    li
                      a(href="")
                        h3 Connect
                        p  consectetur adipisicing elit nesciunt! Assumenda, adipisci.
                    li
                      a(href="")
                        h3 Atlas
                        p  ipsum dolor sit amet, consectetur adipisicing elit. .
                  ul
                    li
                      a(href="")
                        h3 Subscription
                        p  Lorem ipsum dolor sit amet, consectetur
                    li
                      a(href="")
                        h3 Relay
                        p   amet, consectetur adipisicing elit. Nisi, sequi!

              //- .bottom-section
                ul
                  li: a(href="") Payment
                  li: a(href="") Connect
                  li: a(href="") Atlas
                  li: a(href="") Connect
                  li: a(href="") Atlas

          //- .sd-dropdown-menu#developer(data-sub="products")
            .sd-dropdown-menu__content
              .top-section
                .col-2
                  div
                    h2.sd-menu-title Front End
                    ul
                      li: a(href="") Payment
                      li: a(href="") Connect
                      li: a(href="") Atlas
                  div
                    h2.sd-menu-title Back End
                    ul
                      li
                        router-link(to='/layerorbs') Payment
                      li: a(href="") Connect
                      li: a(href="") Atlas
              .bottom-section.info
                p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit totam officia molestias

          //- .sd-dropdown-menu(data-sub="about")
            .sd-dropdown-menu__content
              .top-section
                ul
                  li: a(href="") Payment
                  li: a(href="") Connect
                  li: a(href="") Atlas
              .bottom-section
                ul
                  li: a(href="") Payment
                  li: a(href="") Connect
                  li: a(href="") Atlas

          //- .sd-dropdown-menu#product(data-sub="news")
            .sd-dropdown-menu__content
              .top-section
                .col-2
                  ul
                    li
                      a(href="")
                        h3 Payment
                        p  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    li
                      a(href="")
                        h3 Connect
                        p  consectetur adipisicing elit nesciunt! Assumenda, adipisci.
                    li
                      a(href="")
                        h3 Atlas
                        p  ipsum dolor sit amet, consectetur adipisicing elit. .
                  ul
                    li
                      a(href="")
                        h3 Subscription
                        p  Lorem ipsum dolor sit amet, consectetur
                    li
                      a(href="")
                        h3 Relay
                        p   amet, consectetur adipisicing elit. Nisi, sequi!

              .bottom-section
                ul
                  li: a(href="") Payment
                  li: a(href="") Connect
                  li: a(href="") Atlas
                  li: a(href="") Connect
                  li: a(href="") Atlas
          //- .sd-dropdown-menu#developer(data-sub="contact")
            .sd-dropdown-menu__content
              .top-section
                .col-2
                  div
                    h2.sd-menu-title Front End
                    ul
                      li: a(href="") Payment
                      li: a(href="") Connect
                      li: a(href="") Atlas
                  div
                    h2.sd-menu-title Back End
                    ul
                      li
                        router-link(to='/layerorbs') Payment
                      li: a(href="") Connect
                      li: a(href="") Atlas
              .bottom-section.info
                p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit totam officia molestias


  header.phone-header(:class='{ "open": $store.state.phoneMenuOpen }')
    .icon-menu(@click='togglePhoneMenuState')
    router-link.flex.flex-align-center.cp(:to='{ name: "home" }', tag='div')
      img(src='/static/images/svg/logo.svg')
    .items
      h3.item Aandachtsgebieden (todo)
      router-link.item(:to='{ name: "products" }', tag='h3') Producten
      router-link.item(:to='{ name: "about" }', tag='h3') Over ons
      router-link.item(:to='{ name: "world" }', tag='h3') Onze wereld
      router-link.item(:to='{ name: "contact" }', tag='h3') Contact
      inno-button.item(label='Werken bij.', yellow, :to='{ name: "jobs" }')
</template>

<script>
export default {
  data() {
    return {
      selectedMenu: null,
      lastScrollY: null,
      showHeader: true
    }
  },

  methods: {
    togglePhoneMenuState() {
      this.$store.commit('setPhoneMenuState', !this.$store.state.phoneMenuOpen)
    },

    scroll(e) {
      if (this.lastScrollY === null) {
        this.lastScrollY = window.scrollY
        return
      }

      if (window.scrollY <= 0 || window.scrollY < this.lastScrollY) {
        this.showHeader = true
      } else {
        this.showHeader = false
      }

      this.lastScrollY = window.scrollY
    }
  },

  mounted() {
    window.addEventListener('scroll', this.scroll)

    // This code is the Stripe header menu taken from a codepen
    const menuItems = document.querySelectorAll('.sd-menu__item')
    const menuSubs = document.querySelectorAll('.sd-dropdown-menu')
    const subBg = document.querySelector('.sd-dropdown__bg')
    const subBgBtm = document.querySelector('.sd-dropdown__bg-bottom')
    const subArr = document.querySelector('.sd-dropdown__arrow')
    const subCnt = document.querySelector('.sd-dropdown__wrap')
    const header = document.querySelector('.sd-header')
    let closeDropdownTimeout
    const self = this

    function startCloseTimeout() {
      closeDropdownTimeout = setTimeout(closeDropdown, 50)
    }

    function stopCloseTimeout() {
      clearTimeout(closeDropdownTimeout)
    }

    function openDropdown(el) {
      var header = document.querySelector('.sd-header')
      //  get menu ID
      var menuId = el.getAttribute('data-sub')

      if (!menuId) return

      var menuBg = document.querySelector('.sd-dropdown__bg')

      //  get related sub menu
      var menuSub = document.querySelector('.sd-dropdown-menu[data-sub="' + menuId + '"]')
      //  get menu sub content
      var menuSubCnt = menuSub.querySelector('.sd-dropdown-menu__content')
      //  get bottom section of current sub
      // var menuSubBtm = menuSubCnt.querySelector('.bottom-section').getBoundingClientRect()
      //  get height of top section
      var menuSubTop = menuSubCnt.querySelector('.top-section').getBoundingClientRect()
      //  get menu position
      var menuMeta = el.getBoundingClientRect()
      //  get sub menu position
      var subMeta = menuSubCnt.getBoundingClientRect()

      var menuWrap = document.querySelector('.sd-dropdown__wrap')
      var orb = menuWrap.querySelector('.orb')

      // holder.style.display = 'flex'

      menuBg.style.visibility = 'visible'
      menuWrap.style.visibility = 'visible'
      menuWrap.style['box-shadow'] = '10px 20px 20px 0 rgba(0, 0, 0, 0.1)'
      menuWrap.style['border-top-color'] = '#002a90'
      orb.style.opacity = 1

      //  set selected menu
      self.selectedMenu = menuId

      //  Remove active Menu
      menuItems.forEach(el => el.classList.remove('active'))
      //  Set current menu to active
      el.classList.add('active')

      //  Remove active sub menu
      menuSubs.forEach(el => el.classList.remove('active'))
      //  Set current menu to active
      menuSub.classList.add('active')

      const marginLeft = (window.innerWidth - header.clientWidth) / 2

      //  Set dropdown menu background style to match current submenu style
      subBg.style.opacity = 1
      subBg.style.left = menuMeta.left - ((subMeta.width / 2) - menuMeta.width / 2) - marginLeft + 'px'
      subBg.style.width = subMeta.width + 'px'
      subBg.style.height = subMeta.height + 'px'
      //  Set dropdown menu bottom section background position
      subBgBtm.style.top = menuSubTop.height + 'px'

      //  Set Arrow position
      subArr.style.opacity = 1
      subArr.style.left = menuMeta.left + menuMeta.width / 2 - marginLeft - 10 + 'px'

      //  Set sub menu style
      subCnt.style.opacity = 1
      subCnt.style.left = menuMeta.left - ((subMeta.width / 2) - menuMeta.width / 2) - marginLeft + 'px'
      subCnt.style.width = subMeta.width + 'px'
      subCnt.style.height = subMeta.height + 'px'

      //  Set current sub menu style
      menuSub.style.opacity = 1

      header.classList.add('dropdown-active')
    }

    function closeDropdown() {
      var menuBg = document.querySelector('.sd-dropdown__bg')
      var menuWrap = document.querySelector('.sd-dropdown__wrap')
      var orb = menuWrap.querySelector('.orb')

      //  Remove active class from all menu items
      menuItems.forEach(el => el.classList.remove('active'))
      //  Remove active class from all sub menus
      menuSubs.forEach(el => {
        el.classList.remove('active')
        // el.style.opacity = 0
      })

      //  set sub menu background opacity
      subBg.style.opacity = 0
      //  set arrow opacity
      subArr.style.opacity = 0

      // unset selected menu
      self.selectedMenu = null

      menuBg.style.visibility = 'hidden'
      menuWrap.style.visibility = 'hidden'
      menuWrap.style['box-shadow'] = 'none'
      menuWrap.style['border-top-color'] = 'transparent'
      orb.style.opacity = 0

      header.classList.remove('dropdown-active')
    }

    //  Binding mouse event to each menu items
    menuItems.forEach(el => {
      //  mouse enter event
      el.addEventListener('mouseenter', function() {
        stopCloseTimeout()
        openDropdown(this)
      }, false)

      //  mouse leave event
      el.addEventListener('mouseleave', startCloseTimeout, false)
    })

    //  Binding mouse event to each sub menus
    menuSubs.forEach(el => {
      el.addEventListener('mouseenter', stopCloseTimeout, false)
      el.addEventListener('mouseleave', startCloseTimeout, false)
    })
  },

  destroyed() {
    window.removeEventListener('scroll', this.scroll)
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';
@import 'src/styles/layout';
$transition: 0.3s ease-in-out;

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 5;

  header.sd-header {
    position: relative;
    height: $headerHeight;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    transform: translateY(-100px);
    transition: transform 0.5s cubic-bezier(0.69, 0.4, 0.75, 0.54) 0.2s;
    background: white;
    padding: 0 $gutter;

    .top-section {
      background: white;

      .attention-items {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        a {
          border-bottom: 1px solid $gray1;
          width: 100%;
          text-align: center;
          padding: 25px 0;
          transition: color $transition;

          &:last-child {
            border: none;
          }

          &:hover {
            color: $inno-yellow;
          }
        }
      }
    }

    &.open {
      transform: translateY(0);
      transition-delay: 0s;
    }

    @include phablet {
      display: none;
    }

    .wrapper {
      display: flex;
      justify-content: space-between;
      width: 100vw;
      max-width: $pageWidth;
      margin: 0 auto;
    }

    .sd-menu {
      list-style: none;
      margin: 0;
      padding-left: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        padding: 20px 20px;
        display: block;
        text-decoration: none;
        color: $gray3;
        font-family: Bitter;
        font-size: 18px;
        letter-spacing: 0.3px;
        transition: color $transition;

        &:after {
          content: '.';
          font-weight: bold;
          margin-left: 2px;
        }

        &:hover {
          color: $inno-yellow;
        }
      }

      &__item {
        position: relative;

        &:before {
          content: none;
        }

        &:hover>.sub-menu-shadow {
          display: block;
        }

        .button {
          margin: 0;
          margin-left: $gutter / 4;
          font-size: 18px;
        }
      }

      .sub-menu-shadow {
        position: absolute;
        display: none;
      }
    }

    .sd-dropdown {
      &-holder {
        position: absolute;
        width: 100%;
        left: 0;
        top: 100%;
      }

      &__bg,
      &__arrow {
        position: absolute;
      }

      &__arrow {
        width: 0;
        height: 0;
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent $inno-blue;
        top: -20px;
        opacity: 0;
        transition: opacity .25s ease;
        pointer-events: none;
      }

      &__bg {
        width: 450px;
        height: 0px;
        opacity: 0;
        transition: .25s ease;
        border-radius: 5px;
        overflow: hidden;
        z-index: -1;
        visibility: hidden;

        &-bottom {
          background-color: #fafafa;
          position: absolute;
          width: 100%;
          left: 0;
          top: 300px;
          height: 700px;
          transition: .3s ease;
        }
      }

      &__wrap {
        overflow: hidden;
        position: absolute;
        z-index: 1;
        border-radius: 5px;
        box-shadow: $shadow-large; // Note: set this in JS too (ugly i know)
        transition: all .25s ease;
        visibility: hidden;
        border-top: 4px solid $inno-blue; // Also in JS
        .orb {
          $height: 100px;
          $width: 120px;

          content: '';
          border-radius: 50%;
          height: $height;
          width: $width;
          background: $inno-yellow;
          position: absolute;
          bottom: -$height/2;
          left: -$width/2;
          opacity: 0;
          transition: all .25s ease;
          z-index: 1;
        }

        .top-section,
        .bottom-section {
          // padding: 20px;
        }
      }

      &-menu {
        &__content {
          position: absolute;
          opacity: 0;
          transition: .25s ease;
          min-width: 200px;

          ul {
            list-style: none;
            padding-left: 0;
            margin: 0;
          }

          a {
            color: inherit;
            text-decoration: none;
            display: block;
            padding: 5px 0;

            &:hover {
              color: #333
            }
          }
        }

        &.active {
          .sd-dropdown-menu__content {
            opacity: 1;
          }
        }
      }
    }
    #attention .sd-dropdown-menu__content {
      width: 300px;
    }

    #developer .sd-dropdown-menu__content {
      width: 400px;
    }
    .col-2 {
      display: flex;
      >ul,
      >div {
        flex: 1 0 150px;
      }
    }
    #product {
      .col-2 {
        li {
          display: block;
          padding: 20px 20px 10px;

          h3 {
            font-size: 18px;
            margin: 0 0 10px;
            color: turquoise;
          }
          p {
            color: #999;
            margin: 0;
          }
        }
      }
    }

    .sd-menu-title {
      margin: 0 0 10px;
      font-size: 18px;
      color: #2196F3
    }
    .info {
      line-height: 1.7;
    }
  }

  header.phone-header {
    background: white;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1;
    display: none;
    transition: background $transition;

    @include phablet {
      display: flex;
    }

    .icon-menu {
      $height: 2px;
      $width: 28px;

      height: $height;
      width: $width;
      background: black;
      position: absolute;
      left: 25px;
      top: 35px;
      transition: background $transition;

      &:after,
      &:before {
        height: $height;
        width: $width;
        background: black;
        position: absolute;
        content: '';
        left: 0;
        transition: all $transition;
      }

      &:after {
        top: -10px;
      }

      &:before {
        top: 10px;
      }
    }

    .items {
      position: absolute;
      left: 0;
      top: 75px;
      display: flex;
      flex-direction: column;
      align-items: flex-start; // background: white;
      padding: 20px;
      border-bottom-right-radius: $border-radius;
      opacity: 0;
      transition: all 0.2s ease-in;
      visibility: hidden;

      .item {
        margin: 10px 0;
        opacity: 0;
        transform: translateX(-50px);
        transition: all $transition;
        transition-delay: 0;
      }

      .button {
        margin: 20px 0 0 0;
      }
    }

    &.open {
      background: transparent;

      .icon-menu {
        background: transparent;

        &:after {
          transform: rotate(-45deg);
          top: 0;
        }

        &:before {
          transform: rotate(45deg);
          top: 0;
        }
      }

      .items {
        opacity: 1;
        visibility: visible;

        .item {
          opacity: 1;
          transform: translateX(0);

          $itemCount: 6;
          @for $i from 0 to $itemCount+1 {
            &:nth-child(#{$i}) {
              transition-delay: 0.1s * $i;
            }
          }
        }
      }
    }
  }
}
</style>
