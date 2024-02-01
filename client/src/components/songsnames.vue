<template>
    <panel title="GALERIA DE NOMBRES">
      <div v-for="song in songs" :key="song.title" class="album card mb-3">
        <div class="row g-0 album">
          <div class="col-md-4">
            <!-- Puedes cambiar la imagen a la portada real de la canción -->
          </div>
          <div class="col-md-4">
            <div class="card-body text-center">
                <h5 class="card-title title-style">{{ song.title }}</h5>
            <p class="card-text artist-style">{{ song.artist }}</p>
            </div>
          </div>
        </div>
      </div>
    </panel>
  </template>

<script>
import SongService from '../services/SongsService'
import Panel from '@/components/Panel.vue'

export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: []
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.songs = (await SongService.index()).data
    console.log(this.songs)
  }
}
</script>

  <style scoped>
  /* Puedes agregar estilos personalizados aquí si es necesario */
  .card {
    transition: transform 0.2s;
  }

  .card:hover {
    transform: scale(1.05);
  }
  .title-style {
  font-size: 1.5em; /* Tamaño del título más grande */
  color: #3498db; /* Color azul brillante (puedes cambiarlo según tu preferencia) */
}

.artist-style {
  font-size: 1em; /* Tamaño del artista más pequeño */
  color: #e74c3c; /* Color rojo brillante (puedes cambiarlo según tu preferencia) */
}
.album {
  cursor: pointer;
  transition: transform 0.2s; /* Agrega una transición suave al pasar el ratón */
}

.album:hover {
  transform: scale(1.05);
  color: #3498db;
  text-decoration: none;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
  </style>
