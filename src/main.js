import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Element from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';


Vue.config.debug=true;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Element);

const First={template:'<div><h2>I am the first page.</h2></div>'};
import secondcomponent from './component/secondcomponent.vue';
import thirdcomponent from './component/thirdcomponent.vue';

const router=new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {
      path:'/first',
      component:First
    },
    {
      path:'/second',
      component:secondcomponent
    },
    {
      path:'/third',
      component:thirdcomponent
    },
  ]
})

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
}).$mount('#app')
