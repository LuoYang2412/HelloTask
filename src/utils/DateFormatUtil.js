/**
 * @Author: LuoYang
 * @Date: 2021/7/20 3:30 下午
 * @Description: date格式化工具类
 */

// Date转String，输出格式 yyyy-MM-dd
export function dateToString1(date) {
  let fullYear = date.getFullYear();
  let month = date.getMonth() + 1;
  let monthStr = month < 10 ? "0" + month : month;
  let day = date.getDate();
  let dayStr = day < 10 ? "0" + day : day;
  return fullYear + "-" + monthStr + "-" + dayStr;
}
