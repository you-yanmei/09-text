import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../components/LoginPage.vue";
import LayoutMenu from "../components/LayoutMenu.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: LoginPage,
    },
    {
      path: "/layout",
      component: LayoutMenu,
    },
  ],
});
export default router;
