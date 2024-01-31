<template>
  <div class="container mt-5">
    <panel title="Galería de Discos">
       <router-link :to="{name: 'songs-create'}">
        <button class="btn btn-primary" type="submit">Agregar Canciones</button>
      </router-link>
      <div class="album-gallery">
        <div v-for="song in songs" :key="song.title" class="album" @click="navigateTo({name: 'song', params: {songId: song.id}})">
          <img :src="song.albumImageUrl" class="album-image" alt="Album Cover">
          <div class="album-details">
            <div class="album-title">{{ song.title }}</div>
            <div class="album-artist">{{ song.artist }}</div>
            <div class="album-genre">{{ song.genre }}</div>
          </div>
        </div>
      </div>
    </panel>
  </div>
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
  }
}
</script>

<style scoped>
.album-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.album {
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  cursor:pointer;
}

.album:hover {
  transform: scale(1.1);
}

.album-image {
  width: 100%;
  height: auto;
}

.album-details {
  padding: 10px;
  text-align: center;
}

.album-title {
  font-size: 1.2em;
  font-weight: bold;
}

.album-artist {
  font-size: 1em;
  color: #666;
}

.album-genre {
  font-size: 1em;
  color: #666;
}
</style>
