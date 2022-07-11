/**
 * @Author: LuoYang
 * @Date: 2021/7/14 3:34 下午
 * @Description: 项目API
 */

import { PAGE_SIZE, Urls } from "@/const";
import axios from "axios";

//获取任务列表
export function getTaskList(pageNum) {
  let data = {
    pageNum: pageNum,
    pageSize: PAGE_SIZE,
  };
  return axios.post(Urls.task.getTaskList, data);
}
