import axios from "axios";
// import router from "../router";
// import { message } from "ant-design-vue";
import store from "../store";

axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
const config = {
  baseURL: "",
  timeout: 60 * 1000,
  withCredentials: true,
};
const _axios = axios.create(config);
_axios.interceptors.request.use(
    (config)=>{
        store.commit('setLoading',true)
        if(config.headers['Content-Type'] == ''){
            config.headers['Content-Type'] = 'application/json;chartset=UTF-8'
        }
        return config

    },
    (error)=>{
        return Promise.reject(error)
    }
);
_axios.interceptors.response.use(
    (response)=>{
        store.commit('setLoadding', false)
        // const headers = response.headers
        // 非json直接返回

        return response
     

    },
    (error)=>{
        return Promise.reject(error)

    }
);

export default _axios;
