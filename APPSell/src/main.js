// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import 'common/stylus/index.styl';

import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'

Vue.use(VueRouter)
Vue.config.productionTip = false
let router = new VueRouter({
        routes: [{
                path: '/',
                redirect: '/goods'
            },
            {
                path: '/goods',
                component: goods
            }, {
                path: '/ratings',
                component: ratings
            }, {
                path: '/seller',
                component: seller
            }
        ],
        'linkActiveClass': 'active'
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});