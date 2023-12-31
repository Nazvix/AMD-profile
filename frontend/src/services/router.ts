import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/services',
            name: 'Layanan',
            component: Portfolio
        },
        {
            path: '/portfolios',
            name: 'Portfolio',
            component: Portfolio
        },
        {
            path: '/contact',
            name: 'Kontak',
            component: Contact
        },
    ]
})

export default router