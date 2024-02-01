<template>
    <div class="container mt-5">
      <div class="row">
        <!-- Sección "Crear Canciones" -->
        <div class="col-md-4">
          <div class="card">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0">Crear Canciones</h5>
            </div>
            <form action="">
            <div class="card-body">
              <div class="mb-2">
                <input type="text" :requerid="[rules.requerid]" class="form-control" v-model="song.title" placeholder="Titulo"  required oninvalid="this.setCustomValidity('Por favor, rellena este campo')" oninput="this.setCustomValidity('')">
              </div>
              <div class="mb-2">
                <input type="text" class="form-control" v-model="song.artist" placeholder="Artista" required oninvalid="this.setCustomValidity('Por favor, rellena este campo')" oninput="this.setCustomValidity('')" >
              </div>
              <div class="mb-2">
                <input type="text" class="form-control" v-model="song.genre" placeholder="Genero" required oninvalid="this.setCustomValidity('Por favor, rellena este campo')" oninput="this.setCustomValidity('')">
              </div>
              <div class="mb-2">
                <input type="text" class="form-control" v-model="song.album" placeholder="Album" required oninvalid="this.setCustomValidity('Por favor, rellena este campo')" oninput="this.setCustomValidity('')">
              </div>
              <div class="mb-2">
                <input type="text" class="form-control" v-model="song.youtubeId" placeholder="Youtube ID" required oninvalid="this.setCustomValidity('Por favor, rellena este campo')" oninput="this.setCustomValidity('')">
              </div>
              <div>
                <input type="text" class="form-control" v-model="song.albumImageUrl" placeholder="Url de la imagen" required oninvalid="this.setCustomValidity('Por favor, rellena este campo')" oninput="this.setCustomValidity('')">
              </div>
            </div>
            <div class="card-footer text-right">
              <button @click="create" class="btn btn-success">
                <i class="fas fa-plus-circle mr-2"></i> Crear Canción
              </button>
            </div>
        </form>
          </div>
        </div>

        <!-- Sección para otras entradas -->
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              <div class="form-group mb-2">
                <textarea class="form-control" v-model="tab" placeholder="Tab"></textarea>
              </div>
              <div class="form-group">
                <textarea class="form-control" v-model="lyrics" placeholder="Lyrics"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
<script>
import Panel from '@/components/Panel.vue'
import SongsService from '../services/SongsService'
export default {
  data () {
    return {
      song: {
        title: '',
        artist: '',
        album: '',
        albumImageUrl: '',
        youtubeId: '',
        lyrics: '',
        tab: ''
      },
      rules: {
        requerid: (value) => !!value || 'Este campo es requerido'
      }

    }
  },
  methods: {
    async create () {
      try {
        // llamamos la api para crear una nueva canción
        if (!this.song.title || !this.song.artist || !this.song.genre || !this.song.album || !this.song.youtubeId) {
          return
        }
        await SongsService.post(this.song)
        this.$router.push({ name: 'songs' })
      } catch (error) {
        console.error(error)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style>
</style>
