<template>
  <!-- <button @click="increment">Рахунок: {{ count }}</button> -->
  <div style="border: 1px dotted #000; padding: 5px; min-width: 800px; min-height: 180px">
    <form @submit.prevent='loginCheck' action="#" method="get">
      <div>
        <p>Логін:</p>
        <input v-model.trim="login" type="string" />
        <p>Пароль:</p>
        <input v-model.trim="password" type="string" />
        <button @click="loginCheck">Перевірити</button>
        <p>
          <span :style="{ color: loginResultColor }"> {{ loginResultMessage }} </span>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
const usersData = [
  { login: 'userOne', password: 'user1Passwd' },
  { login: 'userTwo', password: 'user2Passwd' },
  { login: 'userThree', password: 'user3Passwd' },
  { login: 'userFour', password: 'user4Passwd' }
]

export default {
  data() {
    return {
      login: null,
      password: null,
      loginResultMessage: null,
      loginResultColor: null
    }
  },
  methods: {
    loginCheck() {
      if (!this.login || !this.password) {
        this.loginResultMessage = 'Мають бути заповнені обидва поля'
        this.loginResultColor = 'red'
      } else {
        const searchLoginResult = usersData.find((user) => user.login === this.login)
        const checkPasswordResult = searchLoginResult?.password === this.password
        this.loginResultMessage =
          searchLoginResult && checkPasswordResult ? 'логін успішний' : 'помилка авторизації'
        this.loginResultColor = searchLoginResult && checkPasswordResult ? 'green' : 'red'
      }
    }
  }
}
</script>
