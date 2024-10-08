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
              v-model:value="userInfo.text"
              placeholder="账号"
              class="h-[40px] w-[250px]"
            />
            <a-input
              v-model:value="userInfo.pass"
              placeholder="密码"
              class="h-[40px] w-[250px]"
            /> </a-space
          ><br />
          <a-checkbox v-model:checked="checked" class="pb-[8vw]"
            >我已阅读并同意 <a class="text-[blue]">服务协议 </a>和
            <a href="" class="text-[blue]">隐私政策</a> </a-checkbox
          ><br />
          <a-button @click="login" type="primary" class="pb-[10px] w-[150px]"
            >登录</a-button
          ><br />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import banner from "./banner.vue";
import { ref } from "vue";
const userInfo = ref({
  text: "",
  pass: "",
});
</script>
<style scoped></style>
