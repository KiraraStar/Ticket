import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import MainPage from '../components/MainPage.vue';
const routes = [
	// mode: 'hash',
  {
    path: '/',
    name: 'Home',
    component: Home,
	redirect: '/mainpage',
	meta:{
		title:'主页'
	},
	children:[
		{
			path: '/profile',
			name: 'Profile',
			component: () => import('../components/Profile.vue'),
			meta:{
				title:'个人中心'
			},
		},
		{
			path: '/mainpage',
			name: 'MainPage',
			component: () => import('../components/MainPage.vue'),
			meta:{
				title:'主页'
			},
		},
	]
  },
  {
	path: '/test',
	name: 'Test',
	component: ()=>import('../views/Test.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
	path: '/login',
	name: 'Login',
	component: () => import('../components/Login.vue')
  },
  {
	path: '/register',
	name: 'Register',
	component: () => import('../views/Register.vue')
  },
  {
	path: '/purchase',
	name: 'Purchase',
	component: () => import('../views/Purchase.vue'),
  },
  {
	path: '/purchase/time',
	name: 'SelectTime',
	component: () => import('../views/SelectTime.vue'),
  },
  {
	path: '/bus/time',
	name: 'Bustime',
	component: () =>import('../views/SchoolBusTimeLab'),
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
 //  if(to.path == '/mainpage'){
	// document.getElementById('mainPageIndex').style.color = 'green';
	// document.getElementById('profileIndex').style.color = 'black';
 //  }
  // else if(to.path == '/profile'){
	// document.getElementById('mainPage').style.color = 'black';
	// document.getElementById('profile').style.color = 'green';
 //  }
  if (to.meta.title) {
      document.title = to.meta.title
  }
  next()
})

export default router
