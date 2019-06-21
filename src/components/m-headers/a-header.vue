<template>
	
	<div class="tab">
		<router-link tag="div" class="tab-item" to="/Users">
			<div class="tab-link"></div>
		</router-link>
		<router-link tag="div" class="tab-item" to="/singer">
			<div class="tab-link"></div>
		</router-link>
		<router-link tag="div" class="tab-item" to="/rank">
			<div class="tab-link"></div>
		</router-link>
		
		
	</div>
</template>
<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  
  .tab
    display: flex
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    .tab-item
      display: inline-block
      vertical-align: top
      margin-top: 6px
      width: 45px
      height: 32px
      float: left;
      text-align: center
      .tab-link
        display: inline-block
        vertical-align: top
        margin-top: 6px
        width: 25px
        height: 25px
        float: left;
        bg-image('u0')
        background-size: 25px 25px
      &.router-link-active
        .tab-link
          bg-image('u1')
          
</style>