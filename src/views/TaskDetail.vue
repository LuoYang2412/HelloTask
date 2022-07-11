<!--任务详情-->
<template>
  <h3>{{ taskName }}详情</h3>
</template>

<script>
import NavBarStore from "@/components/NavBarComponent/store/NavBarStore";
import { TASK_NAME, TASK_OBJ } from "@/const";

export default {
  name: "TaskDetail",
  data() {
    return {
      taskName: undefined,
    };
  },
  created() {
    this.taskName = sessionStorage.getItem(TASK_NAME);
    NavBarStore.reSetNavBar();
    NavBarStore.setTitle(this.taskName);
  },
  goIn(vm, taskName) {
    vm.$router.push({
      name: "TaskDetail",
      params: { [TASK_OBJ]: taskName },
    });
  },
};
</script>

<style scoped></style>
