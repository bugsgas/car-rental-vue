import { createRouter, createWebHistory } from "vue-router";

import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Home from "../views/Home.vue";
import Testimonials from "../views/Testimonials.vue";
import VehicleList from "../views/VehicleList.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Car Rental",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "About",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: "Contact",
    },
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component: Testimonials,
    meta: {
      title: "Testimonials",
    },
  },
  {
    path: "/vehicle-list",
    name: "Vehicle-List",
    component: VehicleList,
    meta: {
      title: "Vehicle List",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // Update document title based on route meta information
  document.title = to.meta.title || "Your Default Title"; // Set a default title if meta title is not defined
  next();
});

export default router;
