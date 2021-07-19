/**
 * @Author: LuoYang
 * @Date: 2021-07-14 3:34 下午
 * @Description: 公共的URL常量
 */
export default {
  SERVER_URL: "http://www.api-server.com",
  
  auth: {
    //登录
    login: "/auth/authentication/login",
    //验证码
    code: "/code",
  },
  user: {
    info: "/admin/user/info",
  },

  task: {
    //获取项目列表
    getTaskList: "task/list",
  },
};
