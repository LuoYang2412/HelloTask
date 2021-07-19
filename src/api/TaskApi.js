/**
 * @Author: LuoYang
 * @Date: 2021/7/14 3:34 下午
 * @Description: 项目API
 */
import axios from "@/axios/index";
import { PAGE_SIZE } from "@/const/Other";
import Urls from "@/const/Urls";

//获取任务列表
export function getTaskList(pageNum) {
  let data = {
    pageNum: pageNum,
    pageSize: PAGE_SIZE,
  };
  return axios.post(Urls.task.getTaskList, data);
}
