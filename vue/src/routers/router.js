// 导入路由创建的相关方法
import {createRouter,createWebHashHistory} from 'vue-router'

// 导入vue组件
import List from '../components/List.vue'
import Operate from '../components/Operate.vue'
import ShowDetail from '../components/router/ShowDetail.vue'
import ShowDetail2 from '../components/router/ShowDetail2.vue'

// 创建路由对象,声明路由规则
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/operate',
            component: Operate
        },
        {
            path: '/list',
            component: List
        },
    ]

})

//全局前置路由守卫
// router.beforeEach((to, from, next) => {
//
//     //to 是目标地包装对象  .path属性可以获取地址
//     //from 是来源地包装对象 .path属性可以获取地址
//
//     //next() 放行,直接到达目标组件
//     //next('/地址')可以转发到其他地址,到达目标组件前会再次经过前置路由守卫
//
//
//     //需要判断，注意避免无限重定向
//     // if (to.path == '/showDetail') {
//     //     next()
//     // } else {
//     //     next('/showDetail')
//     // }
//
// })

//全局后置路由守卫
// router.afterEach((to, from) => {
//     console.log(`路由从 ${from.path} 到 ${to.path}`);
// });

// 对外暴露路由对象
export default router;