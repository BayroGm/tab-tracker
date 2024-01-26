<template>
  <div>
    <h1>Register</h1>
    <input type="text"  v-model="email" name="email" placeholder="Email">
    <br>
    <input type="password" v-model="password" name="password" placeholder="Password">
    <br>
    <button @click="register">Register</button>
    
  </div>
  
</template>

<script>

import AuthenticationService from '../services/AuthenticationService'
import axios from 'axios'
export default {
  
  data () {
    return {
      email: '',
      password: ''
    }
  },
  watch:{
    email(value) {
      console.log('email has changed',value)
    }
  },
  methods: {
    async register(){
       await AuthenticationService.register({
        email: this.email,
         password: this.password
      })
      
    },
    
},
  
    mounted() {
      setTimeout(() => {
        this.email = 'new email'
      }, 2000)
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
