<template>
	<div class="search">
		
		
		
	</div>
</template>

<script type="text/ecmascript-6">
	import {getHotKey} from 'api/search.js'
	import {ERR_OK} from 'api/config.js'
	import Searchs from 'components/user-center/user-center.vue'
	export default{
		created(){
			this._getHotKey()
		},
		 methods: {
			_getHotKey() {
			  getHotKey().then((res) => {
			    if (res.code === ERR_OK) {
			      console.log(res.data.hotkey)
			    }
			  })
			}
		},
		components:{
			Searchs
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	
  .search{
	position: fixed;
	top: 0;
	bottom: 0;
	z-index: 100;
	width: 100%;
	background: #ffffff;}
</style>
