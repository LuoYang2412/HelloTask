<!--首页-->
<template>
  <keep-alive>
    <component :is="componentName" />
  </keep-alive>
</template>

<script>
// @ is an alias to /src

import NavBarStore from "@/components/NavBarComponent/store/NavBarStore";
import GlobalParamsUtil from "@/utils/GlobalParamsUtil";
import TaskList from "./TaskList";
import TaskMap from "./TaskMap";
import { getUserInfo } from "@/api/UserApi";

export default {
  name: "Home",
  components: { TaskList, TaskMap },
  data() {
    return {
      componentName: "TaskList",
      taskData: undefined,
    };
  },
  created() {},
  mounted() {
    let userName = GlobalParamsUtil.getGlobalParams(
      GlobalParamsUtil.KEY.USER_OBJECT
    )?.userName;

    NavBarStore.reSetNavBar();
    NavBarStore.setNavBarLeftShow(false);
    NavBarStore.setTitle(userName + "的任务");
    NavBarStore.setRightText("表", () => {
      if (this.componentName === "TaskList") {
        NavBarStore.setRightText("图");
        this.componentName = "TaskMap";
      } else {
        NavBarStore.setRightText("表");
        this.componentName = "TaskList";
      }
    });
  },
  methods: {},
  goIn(vm) {
    vm.$router.replace({
      name: "Home",
    });
  },
};
</script>
