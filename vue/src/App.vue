<script setup type="module">

import {useRouter} from 'vue-router'

//创建动态路由对象
let router = useRouter()

let showList = () => {

  // 编程式路由————直接push一个路径
  //router.push('/list')  或者  push一个带有path属性的对象
  router.push({path: '/list'})
}
</script>

<template>
  <div>
    <h1>App页面</h1>

    <!-- 1. 路由跳转链接 -->
    <router-link to="/home">home页</router-link>
    <br/>
    <router-link to="/list">list页</router-link>
    <br/>
    <router-link to="/showAll">showAll页</router-link>
    <br>
    <router-link to="/add">add页</router-link>
    <br/>
    <router-link to="/update">update页</router-link>
    <br/>

    <!-- 动态输入路径,点击按钮,触发单击事件的函数,在函数中通过编程是路由切换页面 -->
    <button @click="showList()">showList</button>

    <!-- 路由连接对应视图的展示位置 -->
    <hr/>
    默认路由展示:
    <router-view></router-view>
    <hr/>
    Home视图展示:
    <router-view name="homeView"></router-view>
    <hr/>
    List视图展示:
    <router-view name="listView"></router-view>
    <hr/>
    Add视图展示:
    <router-view name="addView"></router-view>
    <hr/>
    Update视图展示:
    <router-view name="updateView"></router-view>
  </div>
</template>

<style scoped>
</style>