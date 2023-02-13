import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import antd from 'ant-design-vue'
import store from './store'
import axios from './axios/index'
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
import './assets/init.less'


const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(store).use(router).use(antd).mount('#app')
router.beforeEach(()=>{
    // store.commit('setLoadding',true)
})
router.afterEach(()=>{
    // store.commit('setLoadding',false)
})
