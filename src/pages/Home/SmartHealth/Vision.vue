<template lang="pug">
.vision.container
  h2.dot.short Onze visie voor de zorg
  p More and more people are opting to live the herbal life: moving away from chemicals and scientific medicines, and taking traditional herbs to do everything from losing weight to relieving pain.

  .select-box
    .options
      inno-button(label='Lore ipsum dolar', icon='refresh' blue, :inactive='selectedOption !== 0', @click='selectedOption = 0')
      inno-button(label='Lore ipsum dolar', icon='router', blue, :inactive='selectedOption !== 1', @click='selectedOption = 1')
      inno-button(label='Lore ipsum dolar', icon='database-view', blue, :inactive='selectedOption !== 2', @click='selectedOption = 2')

    transition(name='fade', mode='out-in')
      .box(v-if='selectedOption === 0', key='box0')
        p Have seen an explosion in the popularity of herbs and alternative medicine in general, as people increasingly seek miracle cures that can help them when their doctor or regular pharmacy cannot. The connection to traditional communities also appeals to those who want to go back to a more spiritual
        inno-button-alternate(label='Lees er meer over...', yellow)

      .box(v-if='selectedOption === 1', key='box1')
        p 2Have seen an explosion in the popularity of herbs and alternative medicine in general, as people increasingly seek miracle cures that can help them when their doctor or regular pharmacy cannot. The connection to traditional communities also appeals to those who want to go back to a more spiritual
        inno-button-alternate(label='Lees er meer over...', yellow)

      .box(v-if='selectedOption === 2', key='box2')
        p 3Have seen an explosion in the popularity of herbs and alternative medicine in general, as people increasingly seek miracle cures that can help them when their doctor or regular pharmacy cannot. The connection to traditional communities also appeals to those who want to go back to a more spiritual
        inno-button-alternate(label='Lees er meer over...', yellow)

  h2.dot.margin-top Innovadis in de zorg
  p Eternity bands are a classy and stylish innovation to storm the market. These are often gifted for a marriage anniversary or at the time of giving birth to a child. These eternity bands need no occasion to be gifted and can be given as gifts whenever one wishes to.

  p Eternity bands are also known as the wedding bands. They are lined with diamonds and look like precious gemstones in a circle. The circular loop of diamonds signifies eternal and unending love. This sentiment is what makes the eternity band a perfect gift for couples on special occasions, such as anniversaries, childbirth or anything that makes a difference to their life.
</template>

<script>
export default {
  data() {
    return {
      selectedOption: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.vision {
  padding-top: 100px;
  padding-bottom: 100px;

  h2.short {
    max-width: 400px;
  }

  .margin-top {
    margin-top: 80px;
  }

  .button {
    font-family: 'OpenSans', sans-serif;
  }

  .select-box {
    display: flex;

    .box {
      max-width: 50%;
      margin-left: $gutter;
    }
  }
}

</style>
