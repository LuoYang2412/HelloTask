/**
 * @Author: LuoYang
 * @Date: 2021/7/14 3:34 下午
 * @Description: axios配置
 */
import axios from "axios";
import { Toast } from "vant";
import { TIME_OUT } from "@/const";

// 默认超时设置
axios.defaults.baseURL = serverConfig.SERVER_URL;
axios.defaults.timeout = TIME_OUT;

//没有响应的请求数量
let noResponseRequestCount = 0;
//http request 拦截器
export const tokenDataKey = "tokenData";
axios.interceptors.request.use((config) => {
  if (noResponseRequestCount === 0) {
    Toast.loading({ duration: 0, forbidClick: true });
  }
  noResponseRequestCount++;

  // console.log("requestFulfilled", config);
  /*if (config.headers.noToken) {
    // 不需要请求token
  } else {
    let tokenData = JSON.parse(sessionStorage.getItem(tokenDataKey));
    config.headers.Authorization = `${tokenData.token_type} ${tokenData.access_token}`;
  }
  delete config.headers.noToken;*/
  return config;
});

//http response 拦截器
axios.interceptors.response.use(
  (response) => {
    noResponseRequestCount--;
    if (noResponseRequestCount === 0) {
      Toast.clear();
    }

    let data = response.data;
    // token接口
    /*if (response.config.url === Urls.auth.login) {
      // 刷新token的字符串失效
      if (data.code === 1003) {
        sessionStorage.removeItem(tokenDataKey);
        router.push("/login");
      } else if (data.success) {
        // 获取token成功
        sessionStorage.setItem(tokenDataKey, JSON.stringify(data.data));
      } else {
        Toast.fail(data.msg);
      }
    }*/
    return data ?? response;
  },
  (error) => {
    noResponseRequestCount--;
    if (noResponseRequestCount === 0) {
      Toast.clear();
    }

    // console.log("responseRejected:", error);
    // token过期
    if (error.response.status === 401) {
      /*let tokenData = JSON.parse(sessionStorage.getItem(tokenDataKey));
      refreshToken(tokenData.refresh_token);*/
    } else {
      Toast.fail(error.message ?? error.data.msg ?? error.data.error);
    }

    return Promise.reject(error);
  }
);

export default axios;
