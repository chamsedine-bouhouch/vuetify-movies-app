// Composables
import { createRouter, createWebHistory } from "vue-router";
// import { useAuthStore } from "@/store/auth";
// const store = useAuthStore();
import { useAuthStore } from "@/store/auth";
const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/MovieDetail/:title",
        name: "MovieDetail",
        component: () => import("@/views/MovieDetail.vue"),
      },
      /**
       * Auth Routes
       */
      {
        path: "/login",
        name: "Login",
        component: () => import("@/views/auth/Login.vue"),
        meta: { guest: true },
      },
      {
        path: "/register",
        name: "Register",
        component: () => import("@/views/auth/Login.vue"),
        meta: { guest: true },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Redirect Unauthorized Users
router.beforeEach((to) => {
  // ✅ This will work because the router starts its navigation after
  // the router is installed and pinia will be installed too
  const store = useAuthStore();

  if (to.meta.requiresAuth && !store.isAuthenticated) return "/login";
});

// Redirect Authorized Users
router.beforeEach((to) => {

  const store = useAuthStore();

  if (to.meta.guest && store.isAuthenticated) return "/";
});
export default router;
