import Vue from 'vue'
import VueRouter from 'vue-router'
// import i18n from '@/i18n'

const Index = () => import('@/views/index')
const Exception404 = () => import("@/views/exception/404");
const ImageIndication = () => import("@/views/temperatureIndication/ImageIndication");
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'index',
		component: Index,
		redirect: '/imageIndication',
		children: [{
			path: '/imageIndication',
			name: 'ImageIndication',
			component: ImageIndication,
			meta: {
				title: 'ImageIndication',
				noAuth: true
			}
		}]
	},
	{
		path: '/exception404',
		name: 'Exception404',
		component: Exception404,
		meta: {
			title: 'Exception404',
			noAuth: true
		}
	}
]

const router = new VueRouter({
	base: process.env.BASE_URL,
	routes
})

export default router
