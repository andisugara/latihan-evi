export const routes = [
  {
    path: "/",
    component: () => import("../layout/MainLayout.vue"),
    children: [
      { path: "", component: () => import("../views/Home.vue") },
      { path: "about-us", component: () => import("../views/AboutUs.vue") },
    ],
  },
];
