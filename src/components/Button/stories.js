import Vue from 'vue'

import { storiesOf } from '@storybook/vue'

import InnoButton from './index.vue'

storiesOf('InnoButton', module)
  .add('plain button', () => ({
    components: { InnoButton },
    template: '<inno-button label="my button"></inno-button>'
  }))
  .add('plain button without margin', () => ({
    components: { InnoButton },
    template: '<inno-button label="my button" nomargin></inno-button>'
  }))
  .add('blue button', () => ({
    components: { InnoButton },
    template: '<inno-button label="my button" blue></inno-button>'
  }))
  .add('yellow button', () => ({
    components: { InnoButton },
    template: '<inno-button label="my button" yellow></inno-button>'
  }))
  .add('disabled button', () => ({
    components: { InnoButton },
    template: '<inno-button label="my button" disabled></inno-button>'
  }))
  .add('inactive button', () => ({
    components: { InnoButton },
    template: '<inno-button label="my button" inactive></inno-button>'
  }))
  .add('blue button with icon (icon nyi)', () => ({
    components: { InnoButton },
    template: '<inno-button label="my button" blue icon="refresh"></inno-button>'
  }))
  .add('primary button', () => ({
    components: { InnoButton },
    template: '<inno-button label="Smart Health" primary></inno-button>'
  }))
  .add('primary button small', () => ({
    components: { InnoButton },
    template: '<inno-button label="my button" primary small></inno-button>'
  }))

