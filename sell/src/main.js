import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Goods from './components/goods/goods';
import Ratings from './components/ratings/ratings';
import Seller from './components/seller/seller';
import VueResource from 'vue-resource';

import './common/styles/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

let app = Vue.extend(App);

let router = new VueRouter({
  linkActiveClass: 'active'
});

router.map({
    '/goods': {
        component: Goods
    },
    '/ratings': {
        component: Ratings
    },
    '/seller': {
        component: Seller
    }
});

router.start(app, '#app');

router.go('/goods');
