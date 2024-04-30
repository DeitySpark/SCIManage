import router from "./router.js";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import store from "../store";
NProgress.configure({
  ease: "ease",
  speed: 500,

});

const writeNames = ["/login"];
router.beforeEach((to, from, next) => {
  NProgress.start();
  console.log(store.getters);
  if (sessionStorage.getItem("token")) {
    if (to.path === "/login") {
      next("/");
    }
    return next();
  } else {
    if (writeNames.includes(to.path)) {
      next();
    } else {
      next("/login");
    }
  }
});

router.afterEach((transition) => {
  NProgress.done();
});

export default router;
