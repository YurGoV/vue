<template>
  <!-- <button @click="increment">Рахунок: {{ count }}</button> -->
  <div style="border: 1px dotted #000; padding: 5px; min-width: 800px; min-height: 180px;">
    <form action="#" method="get">
      <div>
        <p>Введіть номер місяця:</p>
        <input v-model="monthNumber" type="number" />
        <p>Рекомендований одяг: {{recommendedClothing}}</p>
        <img alt='' :src='imgPath' style="max-width: 50px">
        <!-- <img alt='' src='../../../public/summer.png'> -->
        <!-- <p>{{ busesAmount }} автобусів</p> -->
      </div>
    </form>
  </div>
</template>

<script>
const baseImgPath = '../../../public/'

export default {
  data() {
    return {
      monthNumber: ""
    }
  },
  computed: {
    seasonCount() {
      const result =
        this.monthNumber >= 3 && this.monthNumber <= 5
          ? 'spring'
          : this.monthNumber >= 6 && this.monthNumber <= 8
          ? 'summer'
          : this.monthNumber >= 9 && this.monthNumber <= 11
          ? 'autumn'
          : (this.monthNumber ===
              12 || (this.monthNumber >= 1 && this.monthNumber <= 2)
                ? 'winter'
                : this.monthNumber === "" ? ""
                : 'error')

      return result
    },

    recommendedClothing() {
      const result =
      this.seasonCount === 'spring' ? 'куртка'
      : this.seasonCount === 'summer' ? 'футболка'
      : this.seasonCount === 'autumn' ? 'плащ'
      : this.seasonCount === 'winter' ? 'пуховик'
      : this.seasonCount === "" ? ''
      : 'число має бути від 1 до 12'
      
      return result
    },
    imgPath() {
      if (this.seasonCount === '' || this.seasonCount === 'error') {
        return ''
      }
      
      return baseImgPath + this.seasonCount + '.png'
    }
  }
}
</script>
