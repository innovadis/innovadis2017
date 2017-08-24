<template lang="pug">
h1.underscore.typing-text {{ typingText }}
</template>

<script>
const INTERVAL = 100
const REMOVE_INTERVAL = 50
const WAIT_TIME = 2000
const INITIAL_DELAY = 500

const typingTexts = [
  'Mensen',
  'Organisaties',
  'Systemen',
  'Apparaten'
]

export default {
  data() {
    return {
      typingCurrentIndex: -1,
      typingText: '',
      typingTimeout: null
    }
  },

  methods: {
    updateTypingText(remove) {
      this.typingTimeout = setTimeout(() => {
        const currentText = typingTexts[this.typingCurrentIndex]

        if (currentText === this.typingText) {
          this.typingCurrentIndex = this.typingCurrentIndex === typingTexts.length - 1 ? 0 : this.typingCurrentIndex + 1

          this.typingTimeout = setTimeout(() => {
            this.updateTypingText(true)
          }, WAIT_TIME)

          return
        }

        if (remove) {
          this.typingText = this.typingText.slice(0, this.typingText.length - 1)
        } else {
          this.typingText = currentText.slice(0, this.typingText.length + 1)
        }

        if (this.typingText === '') return this.updateTypingText(false)

        this.updateTypingText(remove)
      }, remove ? REMOVE_INTERVAL : INTERVAL)
    }
  },

  mounted() {
    this.typingCurrentIndex = this.typingCurrentIndex === typingTexts.length - 1 ? 0 : this.typingCurrentIndex + 1

    this.typingTimeout = setTimeout(() => {
      this.typingText = typingTexts[this.typingCurrentIndex][0]

      this.updateTypingText()
    }, INITIAL_DELAY)
  },

  destroyed() {
    clearTimeout(this.typingTimeout)
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.underscore {
  &:after {
    content: '|';
    color: $inno-yellow;
    animation: blink-animation 1s steps(2, start) infinite;
  }
}

@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}

@-webkit-keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
</style>
