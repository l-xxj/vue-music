<template>

	<div >
		<img src="../../../static/img/u3.png">
		
	<div class="shopcart-list" v-show="listShow" v-if="discList.length"  transition="fold">
		<div class="list-main"  ref="listMain">
		<ul>
		 <li  v-for="item in discList" class="item">
		  <div class="icon">
		  <img width="100%" height="120" :src="item.thumb">
		  </div>
		  <div class="text">
		  <span class="name" v-html="item.name"></span>
		  </div>
		  
		 </li>
		</ul></div>
		
		<div class="list-bottom"></div>
	</div></div>
</template>

<script>
	// import {getlocalhost, getDiscList} from 'api/recommend'
	import Slider from 'base/slider/slider.vue'
	import Scroll from 'base/scroll/scroll.vue'
	import axios from 'axios'
	import BScroll from 'better-scroll'
export default{
	
	 data () {
	    return {
	         discList: [],
			 fold:false
			
	    }
	},
	computed: {
		listShow() {
			let show = !this.fold;
			if(show){
				this.$nextTick(()=> {
				if(!this.scroll){
				 this.scroll = new BScroll(this.$refs.listMain,{
						click: true
					});
					
					}else{
						this.scroll.refresh();
					}
				});
			}
			return show;
		}
	},
	
	
	
	created(){
		this._getlocalhost()
	},
	methods:{
		_getlocalhost() {
			const url = 'http://localhost:8080/static/players.json'
			axios.get(url).then((res) => {
			    this.discList=res.data;
			  });
			},
		
			
			},
			
			
			
		
		 components: {
		    Slider,
		    Scroll		
		}
}
	
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  *{touch-action: none;} 
	.shopcart-list
	  position: absolutu
	  left:0
	  top:0
	  z-index:-1
	  width:100%
	  &.fold-transition
	    transition: all 0.5s
		transform:translated3d(0,-100%,0)
	  &.fold-enter,&.fold-leave
	    transform:translated3d(0,0,0)
	  .list-header
	    height:40px
		line-height:40px
		padding:0 18px
		background:#f3f5f7
		
		.title
		  float:left
		  font-size:14px
		
		 .empty
		  float:right
		  font-size:12px
		
	.list-main
	  display:absolutu
	  top:0
	  bottom:0
	  padding:0 18px
	  max-height:300px
	  overflow: hidden
	  background:#fff
// 	  .food
// 	    position:relative
// 		padding:12px 0
// 		box-sizing:border-box
// 		border-1px(rgba(7,17,27,0.1))
// 	  .name
// 	    line-height:24px
// 		font-size:14px
// 		color:rgb(7,17,27)
</style>



         
          
           