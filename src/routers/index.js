import AccountView from "@/views/AccountView.vue";
import ContactView from "@/views/ContactView.vue";
import DashboardView from "@/views/DashboardView.vue";
import DetailView from "@/views/DetailView.vue";
import HeaderView from "@/views/HeaderView.vue";
import HomeAboutView from "@/views/HomeAboutView.vue";
import HomeView from "@/views/HomeView.vue"
import LoginView from "@/views/LoginView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import ProductView from "@/views/ProductView.vue";
import RegisterView from "@/views/RegisterView.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path:"/",
        name:"home",
        component:HomeView
    },
    {
        path:"/contact",
        name:"contact",
        component:ContactView
    },
    {
        path:"/register",
        name:"register",
        component:RegisterView
    },
    {
        path:"/login",
        name:"login",
        component:LoginView
    },
    {
        path:"/NotFound",
        name:"NotFound",
        component:NotFoundView
    },
    {
        path:"/HomeAbout",
        name:"HomeAbout",
        component:HomeAboutView
    },
    {
        path:"/Product",
        name:"Product",
        component:ProductView
    },
    {
        path:"/Detail",
        name:"Detail",
        component:DetailView
    },
    {
        path:"/Header",
        name:"Header",
        component:HeaderView
    },
    {
        path:"/Account",
        name:"Account",
        component:AccountView
    },
    {
        path:"/Dashboard",
        name:"Dashboard",
        component:DashboardView
    }
];
const router = createRouter({
    history:createWebHistory(),
    routes,
});
export default router;