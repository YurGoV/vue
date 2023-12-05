<template>
  <!-- <button @click="increment">Рахунок: {{ count }}</button> -->
  <div style="border: 1px dotted #000; padding: 5px; min-width: 800px; min-height: 180px">
    <form action="#" method="get">
      <div>
        <p>Введіть номер місяця:</p>
        <input v-model="monthNumber" type="number" />
        <p>Рекомендований одяг: {{ recommendedClothing }}</p>
        <img alt="" :src="imgPath" style="max-width: 50px" />
      </div>
    </form>
  </div>
</template>

<script>
// const baseImgPath = '../../../public/'
const baseImgPath = '/'

export default {
  data() {
    return {
      monthNumber: ''
    }
  },
  computed: {
    recommendedClothing() {
      const result = seasonsData.seasonsCloth[seasonsData.seasons[this.monthNumber - 1]]
      if (!result && this.monthNumber !== '') {
        return 'число має бути від 1 до 12'
      }
      return result
    },
    imgPath() {
      return baseImgPath + seasonsData.seasons[this.monthNumber - 1] + '.png'
    }
  }
}
const seasonsData = {
  seasons: [
    'winter',
    'winter',
    'spring',
    'spring',
    'spring',
    'summer',
    'summer',
    'summer',
    'autumn',
    'autumn',
    'autumn',
    'winter'
  ],
  seasonsCloth: { spring: 'jacket', summer: 't-shirt', autumn: 'cloak', winter: 'down jacket' }
}
</script>
