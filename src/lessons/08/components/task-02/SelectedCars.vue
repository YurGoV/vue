<script>
export default {
  props: {
    cars: Array
  },
  computed: {
    formattedPrice() {
      return (price) => {
        const priceString = price.toString()
        if (priceString.length > 3) {
          return `${priceString.slice(0, -3)}` + ',' + `${priceString.slice(-3)}`
        }
        return priceString
      }
    }
  }
}
</script>

<template>
  <div class="main">
    <div v-for="car in cars" :key="car.id" class="card">
      <div class="img-thumb">
        <img alt="" :src="car.image" />
      </div>
      <div class="item-details">
        <p>
          <a :href="car.link" target="_blank" rel="noopener noreferrer">{{ car.title }}</a>
        </p>
        <p>{{ car.description }}</p>
        <p>body type: {{ car.bodyType }}</p>
        <p>price: {{ formattedPrice(car.price) }} USD</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  margin: 3px;
}
.main {
  display: flex;
  flex-direction: column;
}
.card {
  display: flex;
  width: 400px;
  height: 220px;
  border: 1px solid grey;
  border-radius: 10px;
}
.img-thumb > img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-top-left-radius: 10px;
}
.item-details {
  display: flex;
  max-width: 250px;
  flex-direction: column;
  padding-top: 10px;
  padding-left: 5px;
}
</style>
