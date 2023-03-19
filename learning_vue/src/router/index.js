import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/BookSearch.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      alias: "/home",
    },
    {
      path: "/h",
      redirect: "/home",
    },
    {
      path: "/books",
      name: "books",
      component: () => import("@/views/BookList.vue"),
      alias: encodeURI("/книги"),
    },
    {
      path: "/addbook",
      name: "addBook",
      component: () => import("@/views/AddBook.vue"),
      alias: encodeURI("/добавление-книги"),
    },
    {
      path: "/authors",
      name: "authors",
      component: () => import("@/views/AuthorsList.vue"),
      alias: encodeURI("/авторы"),
    },
    {
      path: "/addauthor",
      name: "addAuthor",
      component: () => import("@/views/AddAuthor.vue"),
      alias: encodeURI("/добавить-автора"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue"),
      alias: encodeURI("/o-дз"),
    },
    {
      path: "/:patchMatch(.*)*",
      name: "not-found",
      component: () => import("@/views/NotFound.vue"),
      alias: "/404",
    },
  ],
});

export default router;
