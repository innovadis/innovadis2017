import Vue from 'vue'

import { storiesOf } from '@storybook/vue'

import InnoButtonAlternate from './index.vue'

storiesOf('InnoButtonAlternate', module)
  .add('plain white button', () => ({
    components: { InnoButtonAlternate },
    template: '<inno-button-alternate label="my button"></inno-button-alternate>'
  }))
  .add('yellow button (arrow nyi)', () => ({
    components: { InnoButtonAlternate },
    template: '<inno-button-alternate label="my button" yellow></inno-button-alternate>'
  }))
