import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.afterEach(async (_, __, failure) => {
  if (!failure) setTimeout(() => window.HSStaticMethods.autoInit(), 100);
});

export default router;
