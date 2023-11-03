import {createApp} from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from '@/store'
import router from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入全局样式
import '../public/css/global.less'

const app = createApp(App)

app.config.globalProperties.axios = axios

app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')

