<script>
export default {
  props: {
    details: Object
  }
}
</script>

<template>
  <div>
    <ul v-if="details">
      <li v-for="brand in details" :key="brand.id">
        <a :href="brand.manual_url" target="_blank" class="card-link">
          <div class="card">
            <div class="img-thumb">
              <img alt="" :src="brand.img" />
            </div>
            <p class="description">{{ brand.title }}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
p {color: black;}
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
</style>
