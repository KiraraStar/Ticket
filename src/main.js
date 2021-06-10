import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/lib/theme-chalk/index.css';
// import Mui from 'vue-awesome-mui';
// import './assets/appBack.js'
// Mui框架
// import Mui from 'vue-awesome-mui';

let app = createApp(App);

app.use(store).use(router).use(ElementPlus,{locale}).mount('#app')
