<template>
	<transition name="slide" >
	<div class="user-centers"  ref="rank">

			<div class="hea" ><div class="back"  @click="back">
		    <i class="icon-back"></i>
				
				</div>	<div class="left"> 排行榜</div>

			</div>

		<scroll :data="topList" class="toplist"  ref="toplist">
        <div  class="recommend-list" ref="recommend-list">
					
          <h1 class="list-title">官方榜</h1>
          <ul>
            <li  @click="selectItem(item)"  class="item" v-for="item in topList">
              <div class="icon">
                <img width="110" height="110" v-lazy="item.picUrl">
              </div>
              <ul class="text">
                  <li class="desc" v-for="(song,index) in item.songList">
										<div class="tit">
							    <span>{{index + 1}}</span>
							    <span >{{song.songname}}-{{song.singername}}</span></div>
									  </li>
              </ul>
            </li>
          </ul>
		
        </div></scroll>
		 <div  v-show="!topList.length">
		   <loading></loading>
		 </div>
		 <router-view></router-view>
	</div>  </transition>
</template>

<script type="text/ecmascript-6">
	import {getTopList} from 'api/rank.js'
	import {ERR_OK} from 'api/config.js'
  import Loading from 'base/loading/loading'
	import Scroll from 'base/scroll/scroll.vue'
	import {mapMutations} from 'vuex'
	import {playlistMixin} from 'common/js/mixin'
	export default{
		created(){
			setTimeout(() => {
					this._getTopList()
			},300)
		
		},
		mixins: [playlistMixin],
		data() {
			return {
				topList: []
			}
		},
		methods: {
			handlePlaylist(playlist) {
			  const bottom = playlist.length > 0 ? '60px' : ''
			  this.$refs.rank.style.bottom = bottom
			  this.$refs.toplist.refresh()
			},
			_getTopList() {
				getTopList().then((res) => {
					if(res.code === ERR_OK){
						this.topList = res.data.topList
					}
				})
			},
			selectItem(item){
				this.$router.push({
					path: `/rank/${item.id}`
				})
				this.setTopList(item)
			},
			back() {
			  this.$router.back()
			},
			...mapMutations({
			  setTopList: 'SET_TOP_LIST'
			})
		},
		 components: {
			Loading,
			Scroll
		 }
	}
	
	
	
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
	.hea{
			height:8%;
			width:100%
			background: #D83D34	;
			justify-content: left; /*子元素水平居中*/
      align-items: center; /*子元素垂直居中*/
      display: -webkit-flex;
			}
	.tit{
		text-align:left;
		white-space: nowrap;/*一行显示*/
		overflow: hidden;/*超出部分隐藏*/
		text-overflow: ellipsis;
		font-size:14px;
		color:#000000;
	}
	.tits{overflow: hidden;}
	.desc{
		line-height: 26px	;
	}
		.toplist{
	  height:92%;
		overflow: hidden;}

.user-centers
	 position: fixed
	 top: 0
	 bottom: 0
	 width: 100%
	 background: #ffffff
	 &.slide-enter-active, &.slide-leave-active
	   transition: all 0.1s
	 &.slide-enter, &.slide-leave-to
	   transform: translate3d(0, 100%, 0)
		
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
		.left
		  margin-left:50px
			color:#FFFFFF 
	.recommend-list
	  .toplist
		  height:100%
			overflow:hidden
	  .list-title
	    height: 45px
	    line-height: 65px
	    text-align: left
	    font-size: $font-size-medium
	    color: #000000
			margin-left:5px
	  .item
	    display: flex
	    box-sizing: border-box
	    align-items: center
	    padding: 0 20px 20px 0px
	    .icon
	      flex: 0 0 60px
	      width: 90px
	      padding-right: 25px
	    .text
	      flex: 1
	      display: flex
	      flex-direction: column
	      justify-content: center
	      height: 100px
	      overflow: hidden
	      color: $color-text-d
	      font-size: $font-size-small



</style>
