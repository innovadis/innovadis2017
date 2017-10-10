<template lang="pug">
.vision.container
  h2.dot.short Onze visie voor de zorg
  p TODO More and more people are opting to live the herbal life: moving away from chemicals and scientific medicines, and taking traditional herbs to do everything from losing weight to relieving pain.

  .select-box
    .options
      inno-button(label='Zelfredzaamheid verhogen', icon='refresh' blue, :inactive='selectedOption !== 0', @click='selectedOption = 0')
      inno-button(label='Efficiency verbeteren', icon='router', blue, :inactive='selectedOption !== 1', @click='selectedOption = 1')
      inno-button(label='Eenzaamheid verminderen', icon='database-view', blue, :inactive='selectedOption !== 2', @click='selectedOption = 2')

    transition(name='fade', mode='out-in')
      .box(v-if='selectedOption === 0', key='box0')
        p Met smart-homes en intelligente toepassingen laten we mensen zolang mogelijk de regie over het eigen leven behouden.
        //- inno-button-alternate(label='Lees er meer over...', yellow)

      .box(v-if='selectedOption === 1', key='box1')
        p Met praktische apps en door het koppelen van systemen, verlichten we de administratieve last van de zorgverleners, waardoor er meer tijd is voor contact met de cliënt.
        //- inno-button-alternate(label='Lees er meer over...', yellow)

      .box(v-if='selectedOption === 2', key='box2')
        p Met toegankelijke en gebruikersvriendelijke portalen de communicatie tussen cliënten onderling en tussen cliënten en zorgverleners stimuleren.
        //- inno-button-alternate(label='Lees er meer over...', yellow)

  h2.dot.margin-top Smart health in de praktijk
  p Dat Smart health bij Innovadis niet bij een visie blijft, bewijzen de ervaringen van onze opdrachtgevers. Voor veel bedrijven binnen de sector zijn wij gesprekspartner, adviseur maar bovenal leverancier van hoogwaardige technologische oplossingen die bijdragen aan hun succes.

  p Wij geloven in de kracht van samenwerken, bundelen en delen van kennis en samen tot de beste oplossing komen. Binnen de zorg werken we o.a. voor Livio en De Vriezenhof.
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
    font-family: Bitter;
  }

  .select-box {
    display: flex;

    .box {
      max-width: 40%;
      margin-left: $gutter;
      display: flex;
      align-items: center;
    }
  }
}
</style>
