import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import LandingView from "@/views/LandingView.vue";
import LogInView from "@/views/LogInView.vue";
import RegisterView from "@/views/RegisterView.vue";
import UsersView from "@/views/UsersView.vue";
import { createPinia } from "pinia";
import {useUserStore} from "@/stores/userStore.ts";

const routes = [
    {
        path: '/',
        name: 'landing',
        component: LandingView
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'login',
        component: LogInView
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView
    },
    {
        path: '/users',
        name: 'users',
        component: UsersView
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const pinia = createPinia();

// Global Before Guards
// If user not registered, needs to redirect to landing page
// If user not admin, redirect to user Home Page

router.beforeEach(async (to, from) => {
    let userStore = useUserStore()
    userStore.token = localStorage.getItem('token');

    if (!userStore.isAuthenticated() && to.name !== 'login' && to.name !== 'landing') {
        return { name: 'landing' }
    }
})

createApp(App).use(pinia).use(router).mount('#app')
