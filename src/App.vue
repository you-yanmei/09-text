<script setup>
import { ConfigProvider } from "ant-design-vue";
</script>

<template>
  <ConfigProvider
    :theme="{
      token: {
        colorPrimary: '#032bec',
      },
    }"
  >
  </ConfigProvider>
  <RouterView />
</template>

<style scoped></style>
