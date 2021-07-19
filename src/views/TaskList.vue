<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <task-list-item
        v-for="(item, index) in list"
        :data="item"
        :key="index"
        @itemClick="itemClick"
      />
    </van-list>
  </van-pull-refresh>
</template>

<script>
import TaskListItem from "./TaskListItem";
import { List, PullRefresh } from "vant";
import TaskDetail from "./TaskDetail";
import { getTaskList } from "@/api/TaskApi";

export default {
  name: "TaskList",
  components: {
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    TaskListItem,
  },
  data() {
    return {
      refreshing: false,
      loading: false,
      finished: false,
      list: [],
      pageNum: 1,
    };
  },
  methods: {
    onRefresh() {
      // 清空列表数据
      this.list = [];
      this.pageNum = 1;
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    onLoad() {
      getTaskList(this.pageNum)
        .then((res) => {
          this.loading = false;
          this.refreshing = false;
          if (res.data && res.data.length > 0) {
            res.data.forEach((value) => {
              this.list.push(value);
            });
            this.finished = this.list.length >= 50;
            // this.finished = res.data.length < Other.PAGE_SIZE;
            this.pageNum++;
          }
        })
        .catch(() => {
          this.finished = true;
          this.loading = false;
          this.refreshing = false;
        });
    },
    itemClick(item) {
      TaskDetail.goIn(this, item.taskName);
    },
  },
};
</script>

<style scoped></style>
