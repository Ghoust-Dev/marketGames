import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../Home'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import Product from '../components/Product'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { 
            path: '/',
            name: 'Home',
            component: Home 
        },
        { 
            path: '/Auth/Login',
            name: 'login',
            component: Login 
        },
        { 
            path: '/Auth/Register',
            name: 'register',
            component: Register 
        },
        { 
            path: '/product',
            name: 'product',
            component: Product 
        }

    ]
})

export default router