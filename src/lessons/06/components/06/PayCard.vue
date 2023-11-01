<template>
  <div class="card">
    <div>
      <p>CARD NUMBER</p>
      <input type="text" v-model="formattedCardNumber" maxlength="19" />
    </div>
    <div class="additional-data">
      <div class="additional-section">
        <p>EXPIRY DATE</p>
        <input type="string" v-model="formattedExpiryDate" placeholder="MM / YY" maxlength="7" />
      </div>
      <div class="additional-section">
        <p>SECURE CODE</p>
        <input type="password" v-model="localCardData.secureCode" maxlength="3" placeholder="###" />
      </div>
    </div>
  </div>
</template>
<script>
import { getFormattedCardNumber, getFormattedExpireDate } from '../../utils/utils'
export default {
  props: {
    modelValue: {
      type: Object,
      required: true
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      localCardData: {
        cardNumber: this.modelValue.cardNumber,
        expiryDate: this.modelValue.expiryDate,
        secureCode: this.modelValue.secureCode
      }
    }
  },
  computed: {
    formattedExpiryDate: {
      get() {
        return getFormattedExpireDate(this.localCardData.expiryDate)
      },
      set(value) {
        this.localCardData.expiryDate = getFormattedExpireDate(value)
      }
    },
    formattedCardNumber: {
      get() {
        return getFormattedCardNumber(this.localCardData.cardNumber)
      },
      set(value) {
        this.localCardData.cardNumber = getFormattedCardNumber(value)
      }
    }
  },
  watch: {
    localCardData: {
      handler(newValue) {
        this.$emit('update:modelValue', newValue)
      },
      deep: true
    }
  }
}
</script>
<style scoped>
input {
  max-width: 300px;
}
.card {
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 200px;
  border: 1px solid black;
}
.additional-data {
  display: flex;
}
.additional-section {
  display: flex;
  flex-direction: column;
}
</style>
