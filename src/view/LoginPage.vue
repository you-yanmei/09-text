<template>
  <div class="flex items-center">
    <div class="w-[550px] h-[100vh]">
      <Carousel autoplay>
        <img
          src="../assets/images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png"
          class="h-[100vh]"
        />
        <img
          src="../assets/images/appzx4bpYR9rpFdZULrF9EFycs2l-416.png"
          class="h-[100vh]"
        />
        <img
          src="../assets/images/app9KTBmXHMK2mtI9RHyzPDs-h0NXne1.png"
          class="h-[100vh]"
        />
      </Carousel>
    </div>
    <div class="flex-1 h-[100vh] flex justify-center items-center">
      <div class="flex flex-col justify-center items-center w-[500px]">
        <h1 class="text-[27px] font-bold mb-[3rem]">登录，即刻创造您的应用</h1>
        <Space direction="vertical" size="large">
          <Input
            v-model:value="userInfo.username"
            placeholder="账号"
            class="h-[50px] w-[350px]"
          >
          </Input>
          <Input.Password
            v-model:value.lazy="userInfo.password"
            placeholder="密码"
            class="h-[50px] w-[350px]"
          />
        </Space>
        <div class="mb-[2rem]">
          <Radio v-model:checked="checked">
            我已阅读并同意<Button type="link">服务协议</Button>和
            <Button type="link">隐私政策</Button>
          </Radio>
        </div>
        <Button @click="fn" type="primary" class="h-[50px] w-[350px]"
          >登录</Button
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { Carousel, Button, Space, Input, Radio } from "ant-design-vue";
import { getAccToken } from "../service/api";
import to from "await-to-js";
import { ref } from "vue";
import router from "../router";
const checked = ref();
const userInfo = ref({
  username: "3389272241@qq.com",
  password: "you20031111",
});
const fn = async () => {
  const LoginData = {
    grant_type: "password",
    username: userInfo.value.username,
    password: userInfo.value.password,
    client_id:
      "25bc8a3ff0e04b0e13f969b731dd10584ee0e8bed4e64af21a8c1121b22e81c4",
    client_secret:
      "731013769d23b46c104dca5fe6f98739e064a61350464b9e18b6e66a08406ae4",
    scope:
      "user_info projects pull_requests issues notes keys hook groups gists enterprises",
  };
  const [err, res] = await to(getAccToken(LoginData));
  console.log(err, res);
  try {
    //成功后跳转页面
    router.push("/layout");
  } catch (error) {
    console.error("获取密码失败:", error);
  }
};
</script>
