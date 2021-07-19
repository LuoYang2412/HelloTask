/**
 * @Author: LuoYang
 * @Date: 2021/7/14 3:34 下午
 * @Description: Vant配置
 */
import Vue from "vue";
import { Field, Toast } from "vant";

Vue.component(Toast.name);

//Field输入空格时去掉空格
Vue.component(Field.name, {
  extends: Field,
  props: {
    formatter: {
      type: Function,
      default: function (value) {
        return value.replace(/\s+/g, "");
      },
    },
  },
});
