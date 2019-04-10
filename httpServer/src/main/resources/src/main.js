import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './index.vue';
// element ui support
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import PDFS from './pdfs.vue';
import HOME from './home.vue';
import FILE from './file.vue';

const vueRouter = [
    { path: '/', component: HOME },
    { path:'/v1/pdfs', component: PDFS },
    { path: '/files', component: FILE}
];


Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: vueRouter
});

var app = new Vue({
  el: '#web-site',
  router: router,
  render: h => h(Index)
});
