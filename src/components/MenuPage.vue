<template>
  <a-menu v-mode="horizontal" :items="items" class="" />
</template>
<script setup>
import { h, ref } from "vue";
import {
  FormOutlined,
  RobotOutlined,
  AppstoreOutlined,
  StockOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
const items = ref([
  {
    key: "RobotOutlined",
    icon: () => h(RobotOutlined),
    label: "工作台",
  },
  {
    key: "app",
    icon: () => h(AppstoreOutlined),
    label: "项目",
  },
  {
    key: "sub1",
    icon: () => h(SettingOutlined),
    label: "AI",
  },
  {
    key: "FormOutlined",
    icon: () => h(FormOutlined),
    label: "事项",
  },
  {
    key: "FormOutlined",
    icon: () => h(FormOutlined),
    label: "代码",
  },
  {
    key: "FormOutlined",
    icon: () => h(FormOutlined),
    label: "制品",
  },
  {
    key: "StockOutlined",
    icon: () => h(StockOutlined),
    label: "洞察",
  },
  {
    key: "FormOutlined",
    icon: () => h(FormOutlined),
    label: "知识",
  },
  {
    key: "FormOutlined",
    icon: () => h(FormOutlined),
    label: "自动化",
  },
]);
</script>
