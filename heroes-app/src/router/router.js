import { createRouter, createWebHashHistory } from "vue-router";
import Filter from "../../src/components/Filter.vue";
import NoPageFound from "../components/shared/pages/NoPageFound.vue";

const routes = [
  { path: "/", component: Filter },
  { path: "/:pathMatch(.*)*", component: NoPageFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
