<template>
    <Panel title="Users">
        <div class="container">
        <div class="row">
            <div class="col-md-4" v-for="user in users" :key="user.id">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">{{ user.name }}</h5>
                <p class="card-text">{{ user.email }}</p>
                <p class="card-text">{{ formatDate(user.createdAt) }}</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </Panel>
</template>
<script>
import Panel from './Panel.vue'
import AuthenticationService from '../services/AuthenticationService'
import moment from 'moment'
export default{
  data () {
    return {
      users: []
    }
  },
  components: {
    Panel
  },

  async mounted () {
    this.users = (await AuthenticationService.users()).data
    console.log(this.users)
  },
  methods: {
    formatDate (date) {
      return moment(date).format('MMMM D, YYYY') // Puedes ajustar el formato según tus necesidades
    }
  }

}

</script>

<style>
</style>
