<template>
  <div>

    <div class="container mt-5">
      <Panel title="Register">
      <form name="tab-tracker-form" autocomplete="off">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="text" v-model="email" class="form-control" id="email" name="email" placeholder="Email">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" v-model="password" class="form-control" id="password" name="password" placeholder="Password" autocomplete="new-password">
        </div>
          <button @click="register" class="btn btn-primary mb-2">Registrar</button>
      </form>
    </Panel>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
import Panel from './Panel.vue'
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
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
