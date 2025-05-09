import { createRouter, createWebHistory } from "vue-router";

import DashboardView from "../views/Dashboard.vue";
import HomeView from "../views/Home.vue";
import AllHabitsView from "../views/AllHabits.vue";
import StatsView from "../views/Stats.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardView,
  },
  {
    path: "/tasks",
    name: "AllHabits",
    component: AllHabitsView,
  },
  {
    path: "/stats",
    name: "Stats",
    component: StatsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
