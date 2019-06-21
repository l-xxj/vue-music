<template>
  <transition name="slide">
		<MusicList :title="title" :bg-image="bgImage" :songs="songs"></MusicList>
   
  </transition>
</template>

<script type="text/ecmascript-6">
  import MusicList from 'components/music-list/music-list.vue'
  import {getSongList} from 'api/recommend'
  import {ERR_OK} from 'api/config'
  import {mapGetters} from 'vuex'
	import {createSongs} from 'common/js/song'
	import {getSongVkey} from 'api/rank'
 

  export default {
    computed: {
      title() {
        return this.disc.dissname
      },
      bgImage() {
        return this.disc.imgurl
      },
      ...mapGetters([
        'disc'
      ])
    },
    data() {
      return {
        songs: [],
			  key: 1
				
				
      }
    },
    created() {
      this._getSongList()
    },
    methods: {
      _getSongList() {
        if (!this.disc.dissid) {
          this.$router.push('/recommend')
          return
        }
        getSongList(this.disc.dissid).then((res) => {
          if (res.code === ERR_OK) {
            this.songs = this._normalizeSongs(res.cdlist[0].songlist)
			
          }
        })
      },
      _normalizeSongs(list) {
        let ret = []
        list.forEach((musicData) => {
					 let item = musicData
					
          if (item.songid && item.albummid) {
						getSongVkey(musicData.songmid).then((res) => {
							if (res.code === ERR_OK) {
							 const svley = res.data.items
							 const songVkey = svley[0].vkey
							 const newSong = createSongs(musicData, songVkey)
							 ret.push(newSong)}
						})
						
					
						
						  
          }
        })
        return ret
      }
    },
    components: {
      MusicList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>