<template>
  <div class="task-section">
    <form @submit.prevent="loginCheck" action="#" method="get">
      <div>
        <p>Логін:</p>
        <input v-model.trim="login" type="string" />
        <p>Пароль:</p>
        <input v-model.trim="password" type="string" />
        <button @click="loginCheck">Перевірити</button>
        <p v-if="isLoggedIn === undefined">
          <span :class="errorColor">Authorization error!</span>
        </p>
        <p>
          <img v-show="isLoggedIn" alt="" src="/smile.png" style="max-width: 50px" />
        </p>
      </div>
    </form>
  </div>
</template>

<script>
const usersData = [
  { login: 'Ioann', password: '111' },
  { login: 'Mukuta', password: '222' },
  { login: 'Sashko', password: '333' }
]

const favoriteUser = usersData[0].login

export default {
  data() {
    return {
      login: null,
      password: null,
      isLoggedIn: null,
      errorColor: null
    }
  },
  methods: {
    loginCheck() {
      this.isLoggedIn = usersData.find(
        (user) => user.login === this.login && user.password === this.password
      )
      this.errorColor =
        !this.isLoggedIn && this.login === favoriteUser
          ? 'custom-error-color'
          : 'default-error-color'
    }
  }
}
</script>
<style>
.task-section {
  border: 1px dotted #000;
  padding: 5px;
  min-width: 800px;
  min-height: 180px;
}
</style>
<style scoped>
.custom-error-color {
  color: blue;
}
.default-error-color {
  color: red;
}
</style>
