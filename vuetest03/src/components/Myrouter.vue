
<template>
    <div id="app">
        <router-view></router-view>
 
        <!-- 这里带参数调用函数 不同参数就匹配不同的路由 -->
        <router-link to="/a">a</router-link>
        <router-link to="/b">b</router-link>
        <router-link to="/c">c</router-link>
    </div>
</template>
<script>
export default {
    name: "Myrouter",
    data() {
        return {}
    }
}
</script>
