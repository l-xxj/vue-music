<template>

	
	<div class="shopcart-list" v-show="listShow" v-if="discList.length"  transition="fold">
		
		
		<div class="list-main"  ref="listMain">
			
		<ul>	<img width="100%" height="150px" src="../../../static/img/87.jpg">
		 <li  v-for="item in discList" class="item">
		  <div class="icon">
		  <img width="20%" height="30px" :src="item.thumb">
			 <span class="name" v-html="item.name"></span>
		  </div>
		
		  
		 </li>
		</ul></div>
		
		<div class="list-bottom">11111</div>
	</div>
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
						click: true,
						bounce:false
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
	  position:absulate
	  left:0
	  top:0
	  z-index: 250
	  width:100%
	  &.fold-transition
	    transition: all 0.5s
		transform:translated3d(0,-100%,0)
	  &.fold-enter,&.fold-leave
	    transform:translated3d(0,0,0)

		
	 .list-main
	   position:absulate
	   top:0
	   bottom:0
	   padding:0 
	   max-height:600px
	   overflow: hidden
	   background:#fff
		 .item
		   .icon
		     text-align:left
		 
			  
	
	   
		 
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



         
          
           