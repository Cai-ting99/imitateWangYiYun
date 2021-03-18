import { createRouter, createWebHashHistory } from 'vue-router'
import NavPage from '../views/nav.vue'
const routes = [{
    path: '/',
    name: 'NavPage',
    component: NavPage,
    redirect: '/Find',
    children: [{
        path: '/Find',
        component: () =>
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            import ( /* webpackChunkName: "find" */ '../views/find.vue')
    }, {
        path: '/My',
        name: 'My',
        component: () =>
            import ( /* webpackChunkName: "my" */ '../views/my.vue')
    }, {
        path: '/Friend',
        name: 'Friend',
        component: () =>
            import ( /* webpackChunkName: "friend" */ '../views/friend.vue')
    }, {
        path: '/Video',
        name: 'Video',
        component: () =>
            import ( /* webpackChunkName: "video" */ '../views/video.vue')
    }]
}, {
    path: '/Login',
    name: 'Login',
    component: () =>
        import ( /* webpackChunkName: "video" */ '../components/login/login.vue')
}]

const router = createRouter({
    linkActiveClass: "actave",
    history: createWebHashHistory(),
    routes
})

export default router