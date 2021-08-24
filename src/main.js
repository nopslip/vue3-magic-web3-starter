import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import Home from "@/views/Home.vue";
import "./assets/tailwind.css";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "@/views/Profile.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
  },
  {
    path: "/vuex",
    name: "Vuex",
    component: () => import(/* webpackChunkName: "test" */ "@/views/Vuex.vue"),
  },
  {
    path: "/web3",
    name: "Web3",
    component: () => import(/* webpackChunkName: "web3" */ "@/views/Web3.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = JSON.parse(localStorage.getItem("vuex")).user;

  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next("/");
  } else next();
});

export default router;

const bloomApp = createApp(App);

bloomApp.use(store);
bloomApp.use(router);
bloomApp.mount("#app");
