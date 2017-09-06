<template lang="pug">
.orb-wrapper(v-inview:once.enter='showOrb')
  transition(name='showorb')
    .orb(:class='{ visible: show }')
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },

  methods: {
    showOrb() {
      this.show = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.orb {
  background: white;
  border-radius: 50%;
  height: 100px;
  min-width: 100px;
  margin: 50px;
  filter: blur(1px);
  animation: pulse infinite 6s;
  animation-timing-function: ease-in-out;
  opacity: 0;
  transition: opacity 2s ease-in-out 0.5s;

  &.visible {
    opacity: 1;
  }
}

@keyframes pulse {
  0% {
    // opacity: 1;
    transform: scale(1);
  }

  50% {
    // opacity: 0.2;
    transform: scale(1.5);
    filter: blur(20px);
  }

  100% {
    // opacity: 1;
    transform: scale(1);
  }
}

.showorb-enter-active,
.showorb-leave-active {
  transition: all 1s ease-in-out 0.5s;
}
.showorb-enter,
.showorb-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
