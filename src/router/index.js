import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


const Recommend = (resolve) => {
  import('components/recommend/recommend.vue').then((module) => {
    resolve(module)
  })
}

const Singer = (resolve) => {
  import('components/singer/singer.vue').then((module) => {
    resolve(module)
  })
}

const Rank = (resolve) => {
  import('components/rank/rank.vue').then((module) => {
    resolve(module)
  })
}

const Search = (resolve) => {
  import('components/usersearch/user-center.vue').then((module) => {
    resolve(module)
  })
}

const theone = (resolve) => {
  import('components/singer-detail/singer-detail.vue').then((module) => {
    resolve(module)
  })
}

const Disc = (resolve) => {
  import('components/disc/disc.vue').then((module) => {
    resolve(module)
  })
}

const TopList = (resolve) => {
  import('components/top-list/top-list.vue').then((module) => {
    resolve(module)
  })
}

const Users = (resolve) => {
  import('components/users/users.vue').then((module) => {
    resolve(module)
  })
}




export default new Router({
  routes: [
	{
		path:'/',
		redirect:'/recommend'
	},
    {
      path: '/recommend',
      component: Recommend,
			children:[
				{
					path: ':id',
					component: Disc
				}
			]
    },
		{
			path:'/singer',
			component: Singer
		},
		{
			path:'/rank',
			component:Rank,
			children:[
				{
					path: ':id',
					component: TopList
				}
			]
		},
		{
		  path: '/user',
		  component: Search,
		       children: [
		        {
		          path: ':id',
		          component: theone
		        }
		     ]
		},
		{
		  path: '/Users',
		  component: Users
		}
  ]
})
