import { configure } from '@storybook/vue'

import Vue from 'vue'

// import MyButton from '../src/components/Button/index.vue'

// Vue.component('MyButton', MyButton)

function loadStories() {
  require('../src/components/Button/stories.js')
  require('../src/components/ButtonAlternate/stories.js')
  require('../src/components/Orb/stories.js')
}

configure(loadStories, module)
