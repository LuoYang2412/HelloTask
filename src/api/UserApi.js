/**
 * @Author: LuoYang
 * @Email: toluoyang@qq.com
 * @Date: 2021/9/15 4:26 下午
 * @Description: 用户相关接口
 */
import axios from "@/axios/index";
import Urls from "@/const/Urls";

export function getUserInfo() {
  return axios.get(Urls.user.info);
}
