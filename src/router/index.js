import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		children:[
			{
				path: '/tableList',
				name: 'tableList',
				component: () => import('@/views/tableList')
			},
		]
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
