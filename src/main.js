import Vue from 'vue'
import App from './App.vue'
// испортируем файлы-установки из plugins/elements/index.js:
import './plugins/elements'; // это попадет в наше приложение

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')