import { createRouter, createWebHistory } from "vue-router";
import SearchView from "@/views/SearchView.vue"
import DocumentView from "@/views/DocumentView.vue"
import AboutView from "../views/AboutView.vue";
import HomeView from "@/views/HomeView.vue"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/search/",
      name: "search",
      component: SearchView,
      props: (route) => ({
        q: route.query.q,
        category: route.query.category,
        min_year: route.query.min_year ? Number(route.query.min_year): "",
        max_year: route.query.max_year ? Number(route.query.max_year) : ""
      }),
    },
    {
      path: "/document/:id",
      name: "document",
      component: DocumentView,
      props: true
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },

  ],
});

export default router;
