<template>
 
    <div class="user-center">
			
			<div class="hea" ><div class="back"  @click="back">
        <i class="icon-back"></i>
				
				</div>	 <div class="search-box">
			  <input ref="query" v-model="query" class="box" :placeholder="placeholder"/>
			  
			</div>
		<div @click="clear" v-show="query" ><img  width="70%" height="70%" src="../../../static/img/u12.png"></div>
			</div>
       
    </div>

</template>

<script type="text/ecmascript-6">
  import {debounce} from 'common/js/util'
 export default {
   props: {
     placeholder: {
       type: String,
       default: '搜索歌曲、歌手'
     }
   },
   data() {
     return {
       query: ''
     }
   },
   methods: {
     clear() {
       this.query = ''
     },
		 back() {
		   this.$router.back()
		 },
		 
     setQuery(query) {
       this.query = query
     },
     blur() {
       this.$refs.query.blur()
     }
   },
   created() {
     this.$watch('query', debounce((newQuery) => {
       this.$emit('query', newQuery)
     }, 200))
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
	.box{

border-color: #EF9B95; 
border-style: solid; 
border-top-width: 0px;
 border-right-width: 0px; 
border-bottom-width: 1px;
 border-left-width: 0px}

	
  .user-center
    top: 0
    bottom: 0
    width: 100%
		height:2
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


