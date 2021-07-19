/**
 * @Author: LuoYang
 * @Date: 2021/7/14 3:34 下午
 * @Description: 路由配置
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import GlobalParamsUtil from "@/utils/GlobalParamsUtil";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Login.vue"),
  },
  {
    path: "/TaskDetail",
    name: "TaskDetail",
    component: () => import("@/views/TaskDetail"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // 把参数存入全局,防止刷新页面丢失
  Object.keys(to.params).forEach((key) => {
    GlobalParamsUtil.saveGlobalParams(key, to.params[key]);
  });
  if (to.name !== "Login") {
    if (
      GlobalParamsUtil.getGlobalParams(GlobalParamsUtil.KEY.AUTH_TOKEN_OBJECT)
    ) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
});

export default router;
