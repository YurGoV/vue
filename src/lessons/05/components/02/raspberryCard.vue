<template>
  <div class="card">
    <div class="img-thumb">
      <img alt="" :src="icon" />
    </div>
    <div class="company-details">
      <div class="logo-thumb">
        <img alt="" :src="logo" />
      </div>
      <p class="company-title">{{ companyTitle }}</p>
    </div>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    icon: String,
    logo: String,
    companyTitle: String,
    description: String
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  border: 1px dotted blue;
  background-color: white;
  border-radius: 10px;
}
.img-thumb {
  width: 150px;
  height: 150px;
}
.img-thumb > img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 5px;
}
.company-details {
  display: flex;
  align-items: center;
  padding-top: 5px;
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
