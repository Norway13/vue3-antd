import { createApp } from "vue";
import App from "./App.vue";
// import VueGridLayout from 'vue-grid-layout-v3';

import router from "./router";
import antd from "ant-design-vue";
import store from "./store";
import axios from "./axios/index";
// import Vue3DraggableResizable from 'vue3-draggable-resizable'
//需引入默认样式
// import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
// const VueGridLayout = require('vue-grid-layout-v3');
// import VueGridLayout from "vue-grid-layout";
const VueGridLayout = require('vue-grid-layout');

import "ant-design-vue/dist/antd.css"; // or 'ant-design-vue/dist/antd.less'
import "./assets/init.less";

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(store).use(router).use(antd).use(VueGridLayout).mount("#app");
router.beforeEach(() => {
  // store.commit('setLoadding',true)
});
router.afterEach(() => {
  // store.commit('setLoadding',false)
});
