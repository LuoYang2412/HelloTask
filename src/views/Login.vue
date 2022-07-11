<!--登录-->
<template>
  <div class="login">
    <!--    <img :src="require('@/assets/text_login.png')" width="40%" />-->
    <van-form class="form" @submit="login">
      <van-field
        v-model="loginForm.username"
        :border="false"
        clearable
        name="username"
        placeholder="请输入用户昵称"
        :rules="[{ required: true }]"
        style="margin-top: 48px"
      />
      <van-field
        v-model="loginForm.password"
        :border="false"
        :type="seePassword ? 'text' : 'password'"
        clearable
        name="password"
        placeholder="请输入不低于6位登录密码"
        :right-icon="seePassword ? 'eye-o' : 'closed-eye'"
        :rules="[
          {
            required: true,
            validator(value) {
              return value.length > 5;
            },
          },
        ]"
        @click-right-icon="seePassword = !seePassword"
        style="margin-top: 24px"
      />
      <van-field
        v-model="loginForm.code"
        center
        clearable
        name="code"
        placeholder="请输入验证码"
        :rules="[
          {
            required: true,
          },
        ]"
        @click-right-icon="getCodeUrl"
      >
        <template #right-icon>
          <van-image :src="codeImgUrl" width="80px" height="28px" />
        </template>
      </van-field>
      <div style="margin: 48px 16px">
        <van-button
          round
          block
          native-type="submit"
          color="linear-gradient(to bottom, #7AC3E6, #04ACE1)"
          text="登录"
        />
      </div>
    </van-form>
  </div>
</template>

<script>
import { Button, Form, Image as VanImage } from "vant";
import NavBarStore from "@/components/NavBarComponent/store/NavBarStore";
import Home from "./Home";
import { getCodeUrl, login } from "@/api/AuthApi";
import { encryption, randomLenNum } from "@/utils/StringUtil";
import { getUserInfo } from "@/api/UserApi";
import { USER_OBJECT } from "@/const";

export default {
  name: "Login",
  components: {
    [Button.name]: Button,
    [Form.name]: Form,
    [VanImage.name]: VanImage,
  },
  data() {
    return {
      codeImgUrl: "",
      seePassword: false,
      loginForm: {
        code: "",
        password: "",
        randomStr: "",
        username: "",
      },
    };
  },
  created() {
    NavBarStore.reSetNavBar();
    NavBarStore.setNavBarShow(false);
    this.getCodeUrl();
  },
  methods: {
    getCodeUrl() {
      this.loginForm.randomStr = randomLenNum(4, true);
      this.codeImgUrl = getCodeUrl(this.loginForm.randomStr);
    },
    login() {
      const user = encryption({
        data: this.loginForm,
        key: "ituzhi.com,micro",
        param: ["password"],
      });
      login(user).then((res) => {
        if (res.success) {
          this.$toast.success(res.msg);
          this.getUserInfo();
        } else {
          this.$toast.fail(res.msg);
          this.getCodeUrl();
        }
      });
    },
    getUserInfo() {
      getUserInfo().then((res) => {
        if (res.success) {
          sessionStorage.setItem(USER_OBJECT, res.data);
          setTimeout(() => {
            Home.goIn(this);
          }, 200);
        } else {
          this.$toast.fail(res.msg);
        }
      });
    },
  },
};
</script>

<style scoped>
.form {
  background-color: rgba(255, 255, 255, 0.5);
  margin-top: 48px;
  width: 90%;
  box-shadow: 0 10px 27px 0 rgba(0, 95, 142, 0.69);
  border-radius: 10px;
}

>>> .van-field__body {
  height: 50px;
  background: #f7f7f7;
  border-radius: 10px;
  padding: 0 8px;
  font-size: 18px;
}

>>> .van-field__control::placeholder {
  color: #5e5e5e;
}

.login {
  height: 100%;
  /*background-image: url("@/assets/bg_login.png");*/
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.van-cell {
  background-color: transparent;
}

.van-button--normal {
  text-indent: 10px;
  letter-spacing: 10px;
  font-size: 20px;
}
</style>
