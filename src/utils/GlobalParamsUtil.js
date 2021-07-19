/**
 * @Author: LuoYang
 * @Date: 2021/7/14 5:46 下午
 * @Description: 全局参数工具
 */

export default {
  KEY: {
    AUTH_TOKEN_OBJECT: "AUTH_TOKEN_OBJECT",
    USER_OBJECT: "USER_OBJECT",
    OTHER: "OTHER",
    TASK_OBJ: "TASK_OBJ",
  },
  saveGlobalParams(key, value) {
    let mValue = value;
    if (typeof value === "object") {
      mValue = JSON.stringify(value);
    }
    sessionStorage.setItem(key, mValue);
  },
  getGlobalParams(key) {
    let value = sessionStorage.getItem(key);
    try {
      value = JSON.parse(value);
    } catch (e) {
      console.log("❤️❤️️不是JSON字符串❤️❤️");
    }
    return value;
  },
  removeGlobalParams(key) {
    sessionStorage.removeItem(key);
  },
  clearGlobalParams() {
    sessionStorage.clear();
  },
};
