import * as CryptoJS from "crypto-js";

/**
 * @Author: LuoYang
 * @Email: toluoyang@qq.com
 * @Date: 2021/9/15 3:14 下午
 * @Description: 字符串工具类
 */

//随机字符串生成
export function randomLenNum(len, date) {
  let random;
  random = Math.ceil(Math.random() * 100000000000000)
    .toString()
    .substr(0, len || 4);
  if (date) random = random + Date.now();
  return random;
}

/**
 *加密处理
 */
export function encryption(params) {
  let { data, type, param, key } = params;
  const result = JSON.parse(JSON.stringify(data));
  if (type === "Base64") {
    param.forEach((ele) => {
      result[ele] = btoa(result[ele]);
    });
  } else {
    param.forEach((ele) => {
      var data = result[ele];
      key = CryptoJS.enc.Latin1.parse(key);
      var iv = key;
      // 加密
      var encrypted = CryptoJS.AES.encrypt(data, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding,
      });
      result[ele] = encrypted.toString();
    });
  }
  return result;
}
