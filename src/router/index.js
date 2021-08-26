import Home from "@/views/Home.vue";
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
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem("vuex")) {
    localStorage.setItem("vuex", "{}");
  } // this was created to squash bug where computed mapState was failing if vuex didn't exist. Probably should explore more and fix this properly.
  const loggedIn = JSON.parse(localStorage.getItem("vuex")).user;

  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next("/login");
  } else next();
});

export default router;
