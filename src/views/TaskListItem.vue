<template>
  <van-cell @click="itemClick">
    <template #title>
      <h3>{{ data.taskName }}</h3>
    </template>
  </van-cell>
</template>

<script>
import { Cell } from "vant";

export default {
  name: "TaskListItem",
  components: { [Cell.name]: Cell },
  props: {
    data: {
      type: Object,
      default: () => {
        return null;
      },
    },
  },
  methods: {
    itemClick() {
      this.$emit("itemClick", this.data);
    },
  },
};
</script>

<style scoped></style>
