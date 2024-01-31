<template>
     <div>
        <nav class="navbar navbar-expand-md navbar-light fixed-top ">
        <div class="collapse navbar-collapse  " id="navbarNav">
            <a class="navbar-brand" @click="navigateTo({name:'root'})" style="padding-left: 15px; cursor: pointer;">TabTracker</a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'songs'})" style="cursor: pointer">Navegar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'login'})" style="cursor: pointer">Entrar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'register'})" style="cursor: pointer">Registrar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-if="$store.state.isUserLoggedIn" @click="logout" style="cursor: pointer">Cerrar Sesion</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  </template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  logout () {
    this.$store.dispatch('setToken', null)
    this.$store.dispatch('setUser', null)
    // TODO: redirect to home
    this.route.push({name: 'root'})
  }
}
</script>

<style scoped>

</style>
