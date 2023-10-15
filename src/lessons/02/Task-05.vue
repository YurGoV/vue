<template>
  <!-- <div class="background"> -->
  <div class="task-section">
    <ul>
      <li v-for="item in jsTechnologies" :key="item.id">
        <div style="display: flex; padding: 5px">
          <a :href="item.homepage" target="_blank" rel="noopener noreferrer">
            <img :alt="`${item.name} icon`" :src="item.avatar_url" />
          </a>
          <p>{{ item.name }}</p>
        </div>
        <p>{{ item.description }}</p>
        <p>watchers: {{ item.watchers }}</p>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
import { jsTechnologies } from './data/jsTechsArray'
export default {
  data() {
    return { jsTechnologies }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.background {
  display: flex;
  padding: 5px;
  border: 1px dotted #000;
  min-width: 800px;
  min-height: 180px;
}
img {
  display: inline-block;
  width: 20px;
  height: 20px;
}
p {
  display: inline-block;
  padding-left: 5px;
  vertical-align: middle;
  margin: 0;
}
</style>
