require('./bootstrap');

import Vue from 'vue'
import router from './routes/index'

window.Vue = require('vue');

const app = new Vue({
    el: '#app',
    router
});


