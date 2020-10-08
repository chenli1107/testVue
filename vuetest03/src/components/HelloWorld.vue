<template>
  <div class="hello">
  link:
  <router-link to="/tofirstrouter">my test router</router-link>
  <Myrouter></Myrouter>
  <!--<Myaaaa></Myaaaa>-->
  
  <!--
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      
    </ul>
   --> 
  </div>
</template>

<script>
import Myaaaa from "./Myaaaa.vue"
import Myrouter from "./Myrouter.vue"

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
      Myaaaa,
      Myrouter
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>



<!--
//局部定义路由
<script>
    var Foo = { template: '<div>foo</div>' }
    var Home= { template: '<div>Home</div>' }
    var Bar = { template: '<div>bar</div>' }

    // 2. 定义路由
    // 每个路由应该映射一个组件。 其中"component" 可以是
    // 通过 Vue.extend() 创建的组件构造器，
    // 或者，只是一个组件配置对象。
    // 我们晚点再讨论嵌套路由。
    var routes = [
        { path: '/', component: Home},
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar }
    ]

    // 3. 创建 router 实例，然后传 `routes` 配置
    // 你还可以传别的配置参数, 不过先这么简单着吧。
    var router = new VueRouter({
        routes // （缩写）相当于 routes: routes
    })

    // 4. 创建和挂载根实例。
    // 记得要通过 router 配置参数注入路由，
    // 从而让整个应用都有路由功能
    var app = new Vue({
        router,
        el:'#app'
    })
</script>
-->