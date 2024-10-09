import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../view/LoginPage.vue";
import LayoutMenu from "../view/LayoutMenu.vue";
import MenuPage from "../layout/MenuPage.vue";

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
      children: [
        {
          path: "/layout",
          component: MenuPage,
        },
      ],
    },
  ],
});
export default router;
