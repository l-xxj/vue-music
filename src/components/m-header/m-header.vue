<template>
  <div class="m-header">
		
    <div class="icon" v-on:click="tranFlip" ></div>


    <MHeaders class="conss"></MHeaders>
    <router-link tag="div" class="mine" to="/user">
      <i class="icon-mine"></i>
    </router-link>
  </div>
</template>

<script >
	import MHeaders from 'components/m-headers/a-header'
	import {mapMutations} from 'vuex'
	
  export default {
		
		  data(){
		  return {
		    drawerShow: false,
		  }
		},
		
		methods:{
			  tranFlip() {
			   this.drawerShow=!this.drawerShow
			   this.setSinger(this.drawerShow)
				 
			 },
			 
			...mapMutations({
			  setSinger: 'SET_VALUE'
			})
		},
		components:{
			MHeaders
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .m-header
    height: 44px
    color: $color-theme
    font-size: 0
    .icon{
      display: inline-block
			float: left;
			vertical-align: top
      width: 25px
			height: 25px
      margin-left: 9.5px
			margin-top: 9.5px
      bg-image('logo')
      background-size: 25px 25px}
		.conss{
				position:absolute
				left: 36.5%
			}
				
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: inline-block
        padding: 12px
        font-size: 20px
				float:right
        color: $color-theme
</style>