import { createWebHistory, createRouter } from "vue-router";
import StartPage from "@/pages/StartPage.vue";
import MainPage from "@/pages/MainPage.vue";

const routes = [
    {
        path: '/',
        component: StartPage
    },
    {
        path: '/main',
        component: MainPage
    }, 
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;