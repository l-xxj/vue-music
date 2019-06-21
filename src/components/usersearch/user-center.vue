<template>
  <transition name="slide">
    <div class="user-centers"ref="searchResult" >
		 <div class="search-box-wrapper">
			<userview ref="userview" @query="onQueryChange"></userview></div>
			<div v-show="!query" >
			<div class="tit"  ><span class="lefts">热门搜索</span></div> 	
			<div class="title">
		    
				<ul>
				  <li  @click="addQuery(item.k)"  class="item" v-for="item in hotKey">
				    <span>{{item.k}}</span>
				  </li>
				</ul>
			
			 		</div>
					<div v-show="searchHistory.length" >
					<div class="tit"  ><span class="lefts">历史纪录</span> <span class="clear"   @click="showConfirm">
                                <i class="icon-clear"></i>
                            </span> </div> 	
					<div class="title">
					  
						<ul>
						  <li  @click="addQuery(item)"  class="item" v-for="item in searchHistory">
						    <span>{{item}}</span>
						  </li>
							
						</ul>
					
					 		</div></div></div>
					
					
			<div  class="tits" v-show="query"  ><suggest :query="query"  ref="suggest" @select="saveSearch" ></suggest>
			
			</div> 				<confirm ref="confirm" text="是否清空所有搜索历史"  confirmBtnText="清空"
                 @confirm="clearSearchHistory"></confirm>
				
					 <router-view></router-view>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import Userview from 'components/user-center/user-center.vue'
import {getHotKey} from 'api/search.js'
import {ERR_OK} from 'api/config.js'
import Suggest from 'components/suggest/suggest.vue'
import {playlistMixin} from 'common/js/mixin'
import Scroll from 'base/scroll/scroll'
import {mapGetters,mapActions} from 'vuex'
import SearchList from 'base/search-list/search-list.vue'
import Confirm from 'base/confirm/confirm'
 export default{
	mixins: [playlistMixin],
	data() {
	   return {
	     hotKey:[],
			 query: ''
	   }
	 },
 	created(){
 		this._getHotKey()
 	},

	 computed: {
	 	...mapGetters([
	 	    'searchHistory'
	 	])
	 },
	   
		
	  
		
 	 methods: {
		handlePlaylist(playlist) {
		   const bottom = playlist.length > 0 ? '60px' : ''
		   this.$refs.searchResult.style.bottom = bottom
		   this.$refs.suggest.refresh()
		 },
		addQuery(query){
			this.$refs.userview.setQuery(query)
		},
		onQueryChange(query){
			this.query=query
		},
 		_getHotKey() {
 		  getHotKey().then((res) => {
 		    if (res.code === ERR_OK) {
 		       this.hotKey =res.data.hotkey.slice(0,10)
 		    }
 		  })
 		},
		saveSearch(){
			this.saveSearchHistory(this.query)
			 	console.log(this.searchHistory )
		},
		showConfirm() {
		  this.$refs.confirm.show()
		},
		...mapActions([
		  'saveSearchHistory',
			'clearSearchHistory'
		])
 	},
	
 	components:{
 		Suggest,
		Userview,
		Scroll,
		SearchList,
		Confirm
 	}
}
	
	 
 
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
	.hea{
			height:8%;
			background: #D83D34	;
			justify-content: left; /*子元素水平居中*/
      align-items: center; /*子元素垂直居中*/
      display: -webkit-flex;
			}
	.box{border-color: #EF9B95; 
border-style: solid; 
border-top-width: 0px;
 border-right-width: 0px; 
border-bottom-width: 1px;
 border-left-width: 0px}
 .title{
	    margin-top:3%;
			margin-left:6px;
		 float:left;
		 width:100%;
		
			}
 .tit{
	 margin-top:2%;
	 margin-left:6px;
	  width:100;
		
 }
 .lefts{
	 float:left;
	 font-size:14px;
	 
	 font-weight: bold;
 }
 .clear{float:right;
    
              extend-click();}
 .icon-clear{
                font-size: $font-size-medium;
                color: #000000;}
 .tits{
	 height:90%;
	 margin-top:10px;
	 margin-left:6px;
	 font-size:14px;
 }
	 .item{
	  display: inline-block;
	  padding: 5px 10px;
	  margin: 0 20px 10px 0;
	  border-radius: 6px;
		float:left;
		
	  background: #EBECEC;
	  font-size: $font-size-medium;
	  color: #3B3D3F;}
  .user-centers
    position: fixed
    top: 0
    bottom: 0
    width: 100%
    background: #ffffff
    &.slide-enter-active, &.slide-leave-active
      transition: all 0.3s
    &.slide-enter, &.slide-leave-to
      transform: translate3d(100%, 0, 0)
		 .search-box
		   .box
		     margin: 20px 60px
		     width:80%
		     background:  #D83D34	
		     color: $color-text
				 letter-spacing:10px
		     font-size: $font-size-medium
		     &::placeholder
		       color: $color-text-d
		   .icon-dismiss
		     font-size: 16px
		     color: $color-background
    .back
      position: absolute
      z-index: 50
      .icon-back
        display: block
        padding: 10px
        font-size: $font-size-large-x
        color: $color-theme
    .switches-wrapper
      margin: 10px 0 30px 0
    .play-btn
      box-sizing: border-box
      width: 135px
      padding: 7px 0
      margin: 0 auto
      text-align: center
      border: 1px solid  $color-text-l
      color: $color-text-l
      border-radius: 100px
      font-size: 0
      .icon-play
        display: inline-block
        vertical-align: middle
        margin-right: 6px
        font-size: $font-size-medium-x
      .text
        display: inline-block
        vertical-align: middle
        font-size: $font-size-small
    .list-wrapper
      position: absolute
      top: 110px
      bottom: 0
      width: 100%
      .list-scroll
        height: 100%
        overflow: hidden
        .list-inner
          padding: 20px 30px
    .no-result-wrapper
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
			
</style>


