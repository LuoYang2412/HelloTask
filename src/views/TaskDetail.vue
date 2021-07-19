<!--任务详情-->
<template>
  <h3>{{ taskName }}详情</h3>
</template>

<script>
import GlobalParamsUtil from "@/utils/GlobalParamsUtil";
import NavBarStore from "@/components/NavBarComponent/store/NavBarStore";

export default {
  name: "TaskDetail",
  data() {
    return {
      taskName: undefined,
    };
  },
  created() {
    this.taskName = GlobalParamsUtil.getGlobalParams(
      GlobalParamsUtil.KEY.TASK_NAME
    );
    NavBarStore.reSetNavBar();
    NavBarStore.setTitle(this.taskName);
  },
  goIn(vm, taskName) {
    vm.$router.push({
      name: "TaskDetail",
      params: {[GlobalParamsUtil.KEY.TASK_OBJ]: taskName},
    });
  },
};
</script>

<style scoped></style>
