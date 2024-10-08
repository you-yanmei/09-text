<template>
  <div class="flex">
    <div class="flex flex-col">
      <banner />
    </div>
    <div class="flex-1">
      <div class="flex-1 text-center">
        <h2 class="text-[20px] pt-[10vw]">登录，即刻创造您的应用</h2>
        <div class="pt-[8vw]">
          <a-space direction="vertical" class="pb-[30px]">
            <a-input
              v-model:value="userInfo.username"
              placeholder="账号"
              class="h-[40px] w-[250px]"
            />
            <a-input
              v-model:value="userInfo.password"
              placeholder="密码"
              class="h-[40px] w-[250px]"
            /> </a-space
          ><br />
          <a-checkbox v-model:checked="checked" class="pb-[8vw]"
            >我已阅读并同意 <a class="text-[blue]">服务协议 </a>和
            <a href="" class="text-[blue]">隐私政策</a> </a-checkbox
          ><br />
          <a-button
            @click="login"
            type="primary"
            class="pb-[10px] w-[150px] h-[40px]"
            >登录</a-button
          ><br />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import banner from "../components/banner.vue";
import { ref } from "vue";
const userInfo = ref({
  username: "",
  pass: "",
});
const login = () => {
  // 这里应该有验证逻辑，比如调用API验证用户名和密码
  if (username.value === "" && password.value === "") {
    // 登录成功，跳转到目标页面
    router.push("/layout");
  } else {
    // 登录失败，提示用户
    alert("用户名或密码错误");
  }
};
</script>
<style scoped></style>
