import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import http from "../../utils/config";
import {
    Message
} from "element-ui";
import "../../assets/styles/pc-index.css";

import animated from "animate.css";
Vue.use(animated);

Vue.config.productionTip = false;
Vue.prototype.$message = Message;

Vue.prototype.$http = axios;
Vue.prototype.$axios = http;
var querystring = require("querystring");
var baseUrl = "https://admin.csback.gamemorefun.net"; // 接口前缀地址

/*
 * 封装ajax
 * obj : 全局this
 * data : ajax传入后台data数据
 * address : ajax接口地址
 * fn : 成功返回方法  带参数  obj,data  obj:this, data:response
 * */

Vue.prototype.postHttp = function (obj, data, address, fn) {
    http.post(baseUrl + address, querystring.stringify(data)).then(response => {
        // console.log('status', response);
        fn(obj, response);
    }, response => {

    });
};

Vue.prototype.getHttp = function (obj, data, address, fn) {
    http.get(baseUrl + address, {
        params: data
    }).then(function (response) {
        fn(obj, response);
    }).catch(function (response) {
        // console.log(response);
    });
};

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#index");
