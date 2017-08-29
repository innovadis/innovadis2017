<template lang="pug">
svg(width='40px', height='70px', viewbox='0 0 40 70', version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink')
  g#Ontwerp(stroke='none', stroke-width='1', fill='none', fill-rule='evenodd')
    g#Contact(transform='translate(-725.000000, -701.000000)', :fill='fill')
      g#Group-8(transform='translate(342.000000, 488.000000)')
        g#Boom(transform='translate(383.000000, 213.000000)')
          path#Combined-Shape(d='M23.902805,36.282349 C22.3503956,36.7491483 20.7044926,37 19,37 C16.9272091,37 14.9410626,36.6290308 13.1043315,35.9498632 C12.7406679,35.9830444 12.3723141,36 12,36 C5.372583,36 0,30.627417 0,24 C0,21.7799352 0.602873003,19.700679 1.65383577,17.9170145 C1.23011195,16.6894219 1,15.3715837 1,14 C1,7.372583 6.372583,2 13,2 C13.7155197,2 14.4164129,2.06262355 15.0974976,2.18268873 C17.0497464,0.807549753 19.4305665,0 22,0 C27.1256903,0 31.5007913,3.21365512 33.2203507,7.73601321 C36.6852927,9.84039817 39,13.6498847 39,18 C39,18.6382371 38.9501737,19.2648366 38.8541988,19.8761209 C39.5890271,21.4300145 40,23.1670133 40,25 C40,31.627417 34.627417,37 28,37 C26.5610666,37 25.1812865,36.7467346 23.902805,36.282349 Z')
          rect#Rectangle-3(x='16', y='35', width='7', height='35')
</template>

<script>
export default {
  props: {
    fill: {
      type: String,
      default: '#ffca28'
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

</style>
