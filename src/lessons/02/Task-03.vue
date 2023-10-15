<template>
  <div class="task-section">
    <div class="translate-box" :class="[boxBorder]">
      <p class="translated-word">{{ wordToTranslate }}</p>
      <p class="translation-lable">англійською:</p>
      <input class="translate-input" v-model="translateInput" type="text" />
      <button type="button" @click="checkAnswer">Перевірити</button>
      <p v-if="checkResultMessage">{{ checkResultMessage }}</p>
    </div>
  </div>
</template>

<script>
// TODO: make clean on imput empty
// TODO: make array of objects
const dictionary = {
  яблуко: 'apple'
}
export default {
  data() {
    return {
      translateInput: null,
      boxBorder: 'translate-box-border-default',
      checkResultMessage: null
    }
  },
  computed: {
    wordToTranslate() {
      // TODO: make random from array of objects
      return Object.keys(dictionary)[0]
    }
  },
  methods: {
    checkAnswer() {
      if (this.translateInput === dictionary[this.wordToTranslate]) {
        this.boxBorder = 'translate-box-border-right'
        this.checkResultMessage = 'Супер! Молодець!!'
      } else {
        this.boxBorder = 'translate-box-border-wrong'
        this.checkResultMessage = 'Невірно, спробуйте ще раз'
      }
    }
  }
}
</script>

<style scoped>
.custom-error-color {
  color: blue;
}
.default-error-color {
  color: red;
}
.background-business {
  background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),
    url('/02-business-class.png');
}
.background-econom {
  background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),
    url('/02-illuminators.png');
}

.translate-box {
  display: flex;
  flex-direction: column;
  width: 170px;
  height: 170px;
  background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),
    url('02-apple.png');
}
.translate-box-border-default {
  border: 3px solid black;
}
.translate-box-border-right {
  border: 3px solid green;
}
.translate-box-border-wrong {
  border: 3px solid red;
}
.translated-word {
  margin-top: 30px;
  margin-bottom: 0;
}
.translation-lable {
  margin: 0;
}
.translate-input {
  width: 70%;
  margin-bottom: 5px;
}
button {
  width: 75%;
}
</style>
