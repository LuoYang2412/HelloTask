/**
 * @Author: LuoYang
 * @Date: 2021/7/14 3:34 下午
 * @Description: axios配置
 */
import axios from "axios";
import { Toast } from "vant";
import Urls from "@/const/Urls";
import router from "@/router/index.js";
import GlobalParamsUtil from "@/utils/GlobalParamsUtil";
import { TIME_OUT } from "@/const/Other";
import { refreshToken } from "@/api/AuthApi";

// 默认超时设置
axios.defaults.baseURL = Urls.SERVER_URL;
axios.defaults.timeout = TIME_OUT;

//没有响应的请求数量
let noResponseRequestCount = 0;
//http request 拦截器
axios.interceptors.request.use(
  (config) => {
    if (noResponseRequestCount === 0) {
      Toast.loading({ duration: 0, forbidClick: true });
    }
    noResponseRequestCount++;
    // 获取token
    let tokenObj = GlobalParamsUtil.getGlobalParams(
      GlobalParamsUtil.KEY.AUTH_TOKEN_OBJECT
    );
    const token = tokenObj?.access_token;
    // 添加token到headers
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    // 设置参数格式
    /*if (!config.headers["Content-Type"]) {
      config.headers["Content-Type"] =
        "application/json; charset=UTF-8";
        // "application/x-www-form-urlencoded;charset=UTF-8";
      // 修改参数设置
      if (config.method === "get") {
        //get请求下 参数在params中，其他请求在data中
        // let json = JSON.parse(JSON.stringify(config.params));
        //一些参数处理
        // console.log(json);
      } else {
        config.data = qs.stringify(config.data) || {};
        //一些参数处理
      }
    }*/
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

//http response 拦截器
axios.interceptors.response.use(
  (response) => {
    noResponseRequestCount--;
    if (noResponseRequestCount === 0) {
      Toast.clear();
    }
    //一些统一code的返回处理
    let data = response.data;
    if (data && data.code === 501) {
      // 登录验证
      //做了个示例跳转项目中登录，并记录下相对路径
      /*router.push({
        name: "login", //从哪个页面跳转
        query: {
          retUrl: window.location.href.split("#")[1] || "",
          is_new_user_url: 1,
        },
      });*/
    }
    if (data.code == 1003) {
      router.replace({
        name: "Login",
      });
    } else if (!data.success) {
      Toast.fail(data.msg);
    }
    return data ?? response;
  },
  (error) => {
    noResponseRequestCount--;
    if (noResponseRequestCount === 0) {
      Toast.clear();
    }
    let response = error.response;
    let msg = undefined;
    if (response) {
      let data = response.data;
      if (data) {
        if (data.code === 401) {
          // 登录验证
          //做了个示例跳转项目中登录，并记录下相对路径
          let refresh_token = GlobalParamsUtil.getGlobalParams(
            GlobalParamsUtil.KEY.AUTH_TOKEN_OBJECT
          )?.refresh_token;
          if (refresh_token) {
            refreshToken(refresh_token).then((res) => {
              if (res.success) {
                GlobalParamsUtil.saveGlobalParams(
                  GlobalParamsUtil.KEY.AUTH_TOKEN_OBJECT,
                  res.data
                );
              }
            });
          } else {
            router.replace({
              name: "Login",
            });
          }
        } else {
          if (data.msg) {
            msg = data.msg;
          } else {
            msg = data.error;
          }
        }
      }
    } else {
      msg = error.message;
    }
    if (msg) {
      Toast.fail(msg);
    }
    return Promise.reject(error);
  }
);

export default axios;
