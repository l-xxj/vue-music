<template>
  <div id="app">
		
		
		
    <drawer :show="drawerShow" 
    :pos="pos" 
    :tran="tran"
    @change-show="changeDrawerShow">
    <div class="layout" slot="drawer" >
     
		 <jintai class="theone"></jintai>
    </div>
    <m-header></m-header>
			<tab></tab>
			<keep-alive>
			<router-view></router-view>
			</keep-alive>
  
  	<player></player>
  </drawer>

</div>
</template>

<script>
 import Drawer from 'components/drawer/drawer.vue'
 import MHeader from 'components/m-header/m-header.vue'
 import Tab from 'components/tab/tab.vue'
 import {mapGetters} from 'vuex'
 import jintai from 'components/jintai/personal.vue'
 import Player from 'components/player/player.vue'
 export default {
   data(){
     return {
       pos: 'left',
       tran: 'overlay',
       drawerShow: this.value,
       navItems: [
       'decide the width u like',
       'Item2',
       'Item3',
       'Item4',
       'Item5'
       ]
     }
   },
	  watch:{
        value(val, oldVal){//普通的watch监听
				    if(this.value==false){
							this.drawerShow=this.value
							this.drawerShow=!this.drawerShow
						}
						else this.drawerShow=this.value
            
						
        }},
   methods: {
     
     changeDrawerShow(state) {
      this.drawerShow=state;
      console.log('drawer was changed from components');
			console.log(this.drawerShow)
    },

 },
  computed: {
    ...mapGetters(
			['value']
     )},
		 
			
	components: {
		 Drawer,
	   MHeader,
		 Tab,
		 jintai,
		 Player}
}
</script>

<style>

  *{
    margin: 0px;
    padding: 0px;
  }
  html {
    height: 100%;

  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  #app {
    color: #2c3e50;
    height: 100%;
    width: 100%;
    /*max-width: 600px;*/
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
    /*background-color: #eee*/
  }

  #app a {
    color: #42b983;
    text-decoration: none;
  }
  .layout{
		
		width: 300px
	
		
		
  }
	.theone{z-index: 250;}

  button, input[type="button"], a.button {
    color: #fff;
    background-color: #3779d0;
    border: 0;
    font-size: 14px;
    border-radius: 4px;
    padding: 0px 8px;
    height: 40px;
    min-width: 40px;
    line-height: 40px;
    overflow: hidden;
    display: inline-block;
    outline: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    -webkit-transition: all;
    -moz-transition: all;
    transition: all;
    -webkit-transition-timing-function: linear;
    -moz-transition-timing-function: linear;
    transition-timing-function: linear;
    -webkit-transition-duration: .2s;
    -moz-transition-duration: .2s;
    transition-duration: .2s;
  }
  button:active{
    color: #fff;
    background-color: #377000;
  }
</style>


