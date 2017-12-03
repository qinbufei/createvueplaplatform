# y

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

安装步骤：
1,在硬盘上创建一个文件夹，在终端中进入该目录。 cd 目录路径;
2,创建项目，在命令行输入vue init webpack-simple  (use sass)
3,安装项目依赖：npm install
4,安装路由模块和网络请求模块：npm install vue-router vue-resource –save
5,启动项目：npm run dev;
6，在工程目录/src下创建一个新文件夹component,并在component文件夹下创建一个firstcomponent.vue并仿照App.vue的格式和前面学到的知识写一个组件：
  <template>
    <div id="firstcomponent">
      <h1>this is first component.</h1>
      <a>written by {{author}}</a>
    </div>
  </template>

  <script type="text/javascript">
    export default{
      data(){
        return {
          author:"Li Jing",
        }
      }
    }
  </script>

  <style>

  </style>
7，然后在 App.vue 使用组件 ( 因为在 index.html 里面定义了所以就以这个组件作为主入口，方便。不过怎样把一个组件作为主入口？)，第一步，引入。在<script></script>标签内的第一行写import firstcomponent from ‘./component.vue’；第二步，注册。在<script></script>标签内的data代码块后面加上components:{firstcomponent}。如果{}内加新的组件，记得中间加英文逗号。第三步，使用。在<template></template>内加上：
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <firstcomponent></firstcomponent>
  </div>
</template>
8，再按之前写firstcomponent.vue的方法再写一个secondcomponent.vue：
<template>
    <div id="firstcomponent">
      <h1>this is second component.</h1>
      <a>written by {{author}}</a>
      <p>感谢<a href="https://jinkey.ai/post/tech/vue2.0-xin-shou-wan-quan-tian-keng-gong-lue-cong-huan-jing-da-jian-dao-fa-bu">Jinkey intelligence</a>的技术指导</p>
    </div>
  </template>

  <script type="text/javascript">
    export default{
      data(){
        return {
          author:"Li Jing",
        }
      }
    }
  </script>

  <style>

  </style>

9，引入并注册vue-router：
import VueRouter from "vue-router";
Vue.use(VueRouter);
并且配置路由规则和app启动配置项加上router,修改后的main.js如下：
import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

// 定义组件, 也可以像教程之前教的方法从别的文件引入
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
import secondcomponent from './component/secondcomponent.vue'

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: secondcomponent
    }
  ]
})
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

10，App.vue的内容如下：
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <firstcomponent></firstcomponent>
    <secondcomponent></secondcomponent>
    <ul>
      <li><router-link to="/first">点我跳转到第一页</router-link></li>
      <li><router-link to="/second">点我跳转到第二页</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import firstcomponent from './component/firstcomponent.vue';
import secondcomponent from './component/secondcomponent.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{firstcomponent,secondcomponent}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>



data代码块后面加上
注意点：1，一个组件下只能有一个并列的div；
例如：
<template>
    <div id="firstcomponent">
      <h1>this is first component.</h1>
      <a>written by {{author}}</a>
    </div>
</template>
2，数据要写在return里面：
export default{
      data(){
        return {
          author:"Li Jing",
        }
      }
}

