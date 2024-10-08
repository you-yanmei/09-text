import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../view/LoginPage.vue";
import LayoutMenu from "../view/LayoutMenu.vue";
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
