import Vue from "vue";
import VueRouter from "vue-router/dist/vue-router";
import App from "@/App";
import login from "@/components/LoginComponent";
import lobby from "@/components/LobbyComponent";

Vue.use(VueRouter);

export default new VueRouter({
    mode:'histroy',
    routes: [{
        path: '/',
        component: App
    }, {
        path: '/login',
        name: 'login',
        component: login,
    }, {
        path: '/lobby',
        name: 'lobby',
        component: lobby
    }]
});