import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import About from "@/views/About.vue";
import EventDetails from "@/views/EventDetails.vue";

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/event/:id",
    props: true,
    name: "event-details",
    component: EventDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
