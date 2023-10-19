<template>
  <div class="task">
    <div class="choise-section">
      <div class="column">
        <h2>Shops</h2>
        <ul>
          <li v-for="shop in shopsData" :key="shop.shopId" class="items-list">
            {{ shop.shopName }}
            <button @click="selectShop(shop.shopId)">look for goods</button>
          </li>
        </ul>
      </div>
      <div v-if="selectedShop" class="column">
        <h2>{{ selectedShopName }}</h2>
        <ul v-if="selectedGoods.length" class="goods">
          <div class="goods">
            <li v-for="goods in selectedGoods" :key="goods.id" class="items-list">
              <div>
                <!-- <div style="display: flex; min-width: 400px"> -->
                {{ goods.name }}: {{ goods.price }} USD
              </div>
              <button @click="addToOrder(goods)">add</button>
            </li>
          </div>
        </ul>
      </div>
    </div>
    <div v-if="order" class="order">
      <h1>Your order:</h1>
      <ul>
        <li v-for="(item, key) in order" :key="key">
          <span class="shop-name"> {{ key }}: </span>
          <p v-for="goods in item" :key="goods.id">
            <span class="shop-item"
              >{{ goods.name }}, qty: {{ goods.quantity }}, amount: {{ goods.price }} $USD</span
            >
          </p>
        </li>
      </ul>
      <p>
        <span class="shop-name">Total Amount: {{ orderTotalAmount }} USD</span>
      </p>
      <p>{{ testProp }}</p>
    </div>
  </div>
</template>

<script>
import { shopsData } from './data/shopsData'

export default {
  data() {
    return {
      shopsData,
      selectedShop: '',
      orderRawData: []
    }
  },
  computed: {
    selectedGoods() {
      const selectedShop = this.shopsData.find((el) => el.shopId === this.selectedShop)
      return selectedShop?.shopGoods || []
    },
    order() {
      const order = {}
      for (const item of this.orderRawData) {
        const shopName = shopsData.find((el) => el.shopId === item.shopId).shopName
        const orderItem = { ...item }
        if (!order[shopName]) {
          order[shopName] = [orderItem]
        } else {
          if (!order[shopName].find((el) => el.id === orderItem.id)) {
            order[shopName].push(orderItem)
          } else {
            const itemIndex = order[shopName].findIndex((el) => el.id === orderItem.id)
            order[shopName][itemIndex].quantity += 1
            order[shopName][itemIndex].price += orderItem.price
          }
        }
      }
      if (!Object.keys(order).length) return null
      return order
    },
    orderTotalAmount() {
      return this.orderRawData.reduce((acc, item) => acc + item.price, 0)
    },
    selectedShopName() {
      return shopsData.find((el) => el.shopId === this.selectedShop)?.shopName || ''
    }
  },
  methods: {
    selectShop(id) {
      this.selectedShop = id
    },
    addToOrder(goods) {
      // TODO: there we change shopData - is in normal?
      goods.shopId = this.selectedShop
      this.orderRawData.push(goods)

      // or, better is create a new items:
      // const orderRawItem = {...goods, shopId: this.selectShop}
      // this.orderRawData.push(orderRawItem)
    }
  }
}
</script>
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  /* display: flex; */
  /* flex-direction: column */
}
.items-list {
  display: flex;
  justify-content: space-between;
}
.goods {
  display: flex;
  flex-direction: column;
  min-width: 300px;
}
.shop-name {
  font-weight: 700;
}
.shop-item {
  padding-left: 10px;
}
.task {
  border: 1px dotted #000;
  padding: 5px;
  min-width: 800px;
  min-height: 180px;
}
.choise-section {
  display: flex;
  flex-direction: row;
}
.column {
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 10px;
}
.order {
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 10px;
}
</style>
