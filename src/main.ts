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
import {useErrorsStore} from "@/stores/errorsStore.ts";
import apiClient from "@/api/apiClient.ts";
import EditView from "@/views/EditView.vue";

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
    {
        path: '/users/edit/:id',
        name: 'userEdit',
        component: EditView
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const pinia = createPinia();

router.beforeEach(async (to) => {
    let userStore = useUserStore()
    let errorsStore = useErrorsStore()

    userStore.token = localStorage.getItem('token');
    errorsStore.clearErrors();

    if (!userStore.isAuthenticated()
        && to.name !== 'login'
        && to.name !== 'landing'
        && to.name !== 'register'
    ) {
        return { name: 'landing' }
    }

    if (!userStore.user && userStore.isAuthenticated()) {
        try {
            let response = await apiClient.get('/me');

            userStore.user = response.data.user;
        } catch (err: any) {
            errorsStore.setErrors(err.response.data.errors);
        }

    }

    if (!userStore.user?.admin && to.name === 'users') {
        return { name: 'home' }
    }
})

createApp(App).use(pinia).use(router).mount('#app')
