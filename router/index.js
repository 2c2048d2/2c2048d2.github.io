import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    { path: '/', component: () => import('../src/pages/main/index.vue') },
    { path: '/about', component: () => import('../src/pages/about/index.vue') },
    { path: '/blog', component: () => import('../src/pages/blog/index.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router;
