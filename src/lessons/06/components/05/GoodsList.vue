<template>
  <div class="main">
    <div v-for="notebook in notebooksList" :key="notebook.id" class="card">
      <div class="img-thumb">
        <img alt="" :src="notebook.img" />
      </div>
      <div class="item-details">
        <p>
          <a :href="notebook.href" target="_blank" rel="noopener noreferrer">{{
            notebook.title
          }}</a>
        </p>
        <p>{{ notebook.price }} грн.</p>
        <p>placed in: {{ notebook.city }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    notebooksList: Array
  }
}
</script>
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
  /* flex-direction: column; */
  width: 400px;
  height: 220px;
  border: 1px dotted blue;
  background-color: white;
  border-radius: 10px;
}
.img-thumb {
  width: 150px;
  height: 150px;
  padding-left: 5px;
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
.logo-thumb {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.logo-thumb > img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.company-title {
  margin: 0;
}
.description {
  margin: 0;
  padding-left: 5px;
}
</style>
