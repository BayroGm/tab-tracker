<template>
     <div>
        <nav class="navbar navbar-expand-md navbar-light fixed-top ">
        <div class="collapse navbar-collapse  " id="navbarNav">
            <a class="navbar-brand" @click="navigateTo({name:'root'})" style="padding-left: 15px; cursor: pointer;">TabTracker</a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'login'})" style="cursor: pointer">Entrar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'register'})" style="cursor: pointer">Registrar</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- El resto de tu contenido aquí -->
  </div>
  </template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>

</style>
