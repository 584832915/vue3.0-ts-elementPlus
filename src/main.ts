import { createApp } from 'vue'
import ElementPlus from 'element-plus';
// import '@/styles/element-variables.scss';
import 'element-plus/lib/theme-chalk/index.css';
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(ElementPlus, { locale }).use(store).use(router).mount('#app')
