/**
 * @Author: LuoYang
 * @Date: 2021/7/14 3:34 下午
 * @Description: 用户验证API
 */
import Urls from "@/const/Urls";
import axios from "axios";

const clientId = "wap123456";
const grantType = "account_wap";

export function login(data) {
  data.clientId = clientId;
  data.grantType = grantType;
  return axios.post(Urls.auth.login, null, {
    headers: {
      isToken: false,
      Authorization: "Basic 123456==",
    },
    params: data,
  });
}

/**
 * 获取验证码url
 * @param randomStr
 * @return {string}
 */
export function getCodeUrl(randomStr) {
  return (
    Urls.SERVER_URL +
    axios.getUri({
      url: Urls.auth.code,
      params: {
        randomStr: randomStr,
      },
    })
  );
}

export async function refreshToken(refreshToken) {
  const grantType = "refresh_token";
  return axios.post(Urls.auth.login, null, {
    headers: {
      isToken: false,
      Authorization: "Basic 123456==",
    },
    params: { refreshToken, grantType, clientId },
  });
}
