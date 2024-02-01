<template>
 <Panel title="Song Metadata" >
  {{ song.title }}
  {{ song.artist }}
  {{ song.album }}
  </Panel>
</template>
<script>
// import SongsService from '../services/SongsService.js'
import Panel from './Panel.vue'
export default{
  data () {
    return {
      song: []
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    console.log(songId)
    // this.song = (await SongsService.show(songId)).data
    // console.log(this.song)
  },
  components: {
    Panel
  }
}

</script>

<style scoped>
</style>
