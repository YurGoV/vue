<script>
import { mapGetters } from 'vuex'
export default {
  name: 'GoodsItems',
  computed: {
    ...mapGetters('lesson09', ['goodsByCategory']),
    goodsCategoryName() {
      return this.$route.params.goodsName
    },
    goodsList() {
      return this.goodsByCategory(this.goodsCategoryName)
    }
  },
  methods: {
    goToMain() {
      this.$router.push({
        name: 'LessonTenHome'
      })
    }
  }
}
</script>

<template>
  <div>
    <p>{{ goodsCategoryName }}</p>
    <div>
      <ul >
        <li v-for="goods in goodsList" :key="goods.id">
          <a :href="goods.manual_url" target="_blank" class="card-link">
            <div class="card">
              <div class="img-thumb">
                <img alt="" :src="goods.img" />
              </div>
              <p class="description">{{ goods.title }}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <p @click="goToMain" class="go-to-main">Go to lesson home page</p>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  min-width: 800px;
  justify-content: flex-start;
}
.card {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  border: 1px dotted black;
  background-color: white;
  border-radius: 10px;
  margin-left: 5px;
  cursor: pointer;
}
.img-thumb > img {
  display: block;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 5px;
}
.go-to-main {
  color: blue;
}
.go-to-main:hover {
  color: green;
  cursor: pointer;
}
</style>
