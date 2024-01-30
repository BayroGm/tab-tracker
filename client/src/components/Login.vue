<template>
  <div>

    <div class="container mt-5">
      <h1 class="display-4 mb-4 text-primary font-weight-bold">Registro</h1>
      <form>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="text" v-model="email" class="form-control" id="email" name="email" placeholder="Email">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" v-model="password" class="form-control" id="password" name="password" placeholder="Password">
        </div>
          <button @click="login" class="btn btn-primary mb-2">Iniciar Sesión</button>
      </form>
    </div>
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
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
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
