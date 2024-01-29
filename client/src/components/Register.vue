<template>
  <div>
    <h1>Register</h1>
    <input type="text"  v-model="email" name="email" placeholder="Email">
    <br>
    <input type="password" v-model="password" name="password" placeholder="Password">
    <br>
    <div class="error" v-html="error"></div>
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>

import AuthenticationService from '../services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
