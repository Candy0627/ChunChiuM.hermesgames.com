import axios from "axios";
// import { Message } from "element-ui";

const http = axios.create({
    timeout: 10000,
    baseURL: process.env.BASE_FRONT_URL
});

// 请求拦截
http.interceptors.request.use(config => {
    if (localStorage.getItem("token")) {
        config.headers["Authorization"] = "Bearer " + localStorage.getItem("token");
    }
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    return config;
}, error => {
    Promise.reject(error);
});

// 响应拦截
http.interceptors.response.use(response => {
    // console.log('拦截器中————无论get/post服務器自身自带的状态码为response.status',response,response.status);
    if (response.status !== 200) {
        console.log("服務器請求超時,請稍後重試!");
        // Toast("服務器請求超時,請稍後重試!");
        // Message({
        //     type: 'warning',
        //     duration: 1500,
        //     message: '服務器請求超時,請稍後重試！'
        // })
    }
    if (response.data.status === 4003) {
        console.log("登入已過期，請重新登入!");
        // Toast("登入已過期，請重新登入!");
        // Message({
        //     type: 'warning',
        //     duration: 1500,
        //     message: '登入已過期，請重新登入！'
        // })

        setTimeout(() => {
            localStorage.removeItem("token");
            localStorage.removeItem("userInfo");
        }, 800);
    }
    return response.data;
}, error => {
    console.log("服務器錯誤，請檢查!");
    // Toast("服務器錯誤，請檢查!");
    // Message({
    //     type: 'error',
    //     message: '服務器錯誤，請檢查！'
    // })
    setTimeout(() => {
        return Promise.reject(error);
    }, 1000);
});

export default http;
