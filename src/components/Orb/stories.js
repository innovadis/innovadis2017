import Vue from 'vue'

import { storiesOf } from '@storybook/vue'

import Orb from './index.vue'

storiesOf('Orb', module)
  .add('empty orb', () => ({
    components: { Orb },
    template: '<orb></orb>'
  }))
  .add('large empty orb', () => ({
    components: { Orb },
    template: '<orb :size="150"></orb>'
  }))
  .add('empty orb with small amount of blur', () => ({
    components: { Orb },
    template: '<orb :blur="2"></orb>'
  }))
  .add('empty orb with large amount of blur', () => ({
    components: { Orb },
    template: '<orb :blur="10"></orb>'
  }))
  .add('orb with icon (nyi)', () => ({
    components: { Orb },
    template: '<orb icon="birthday-cake"></orb>'
  }))
  .add('orb with x/y offset', () => ({
    components: { Orb },
    template: '<orb :initialX="100" :initialY="100"></orb>'
  }))
  .add('orb moving to x/y offset', () => ({
    components: { Orb },
    template: '<orb :targetX="100" :targetY="100"></orb>'
  }))
