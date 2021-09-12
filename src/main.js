import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router/index';
import Vuex from 'vuex';
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.config.productionTip = false

// const store = new Vuex.Store({
//     state: {
//             counter : localStorage.counter
//     },
//     mutations: {
//         decrement (state) {
//             state.counter--
//         }
//     }
// })

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
