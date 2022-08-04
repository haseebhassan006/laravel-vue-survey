import { createRouter, createWebHashHistory } from "vue-router";

import Dashboard from '../view/Dashboard.vue'
import Login from '../view/Login.vue'
import Register from '../view/Register.vue'

const routes = [
    {
        path:'/',
        name :'dashboard',
        component:Dashboard
    },
    {
        path:'/login',
        name :'login',
        component:Login
    },
    {
        path:'/register',
        name :'register',
        component:Register
    }
];

const router = createRouter({

    history:createWebHashHistory(),
    routes

})

export default router;