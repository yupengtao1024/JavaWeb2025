import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

//导入router模块
import router from './routers/router.js'

// 导pinia
import {createPinia} from 'pinia'
// 创建pinia对象
let pinia = createPinia()

let app = createApp(App)
app.use(router)

// app中使用pinia功能
app.use(pinia)
app.mount('#app')