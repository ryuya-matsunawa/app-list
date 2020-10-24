import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../pages/Index.vue';
import RandomNumber from '../pages/random_number/Index.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Index },
    { path: '/random-number', component: RandomNumber, name: 'random-number' }
  ]
});

export default router;