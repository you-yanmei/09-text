<template>
  <Layout class="h-[100vh]">
    <LayoutSider width="70" style="background-color: #f8f9fc">
      <Menu v-mode="horizontal" :items="items" />
    </LayoutSider>
    <Layout>
      <LayoutHeader class="w-[100vw] h-[4rem] !bg-[#ffffff] border-b-2">
        <div class="w-full h-full leading-[4rem] font-bold">代码仓库</div>
      </LayoutHeader>
      <Layout>
        <LayoutContent class="!p-[10px] !box-border !bg-[#ffffff]">
          <RouterView />
        </LayoutContent>
      </Layout>
    </Layout>
  </Layout>
</template>
<script setup>
import {
  Layout,
  LayoutSider,
  LayoutContent,
  LayoutHeader,
  Menu,
} from "ant-design-vue";
import { RouterView } from "vue-router";
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
