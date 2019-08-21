import Vue from 'vue'
import App from './App.vue'
//import Example from './Example.vue' Тестовое задание Дударь
//import DKA from './TodoList(dka04).vue'
//window.axios = require('axios') //подключаем модуль axios



Vue.config.productionTip = false

//Vue.component ('app-example', Example) //Создаем глобальный компонент app-example и передаем в него в качестве обьекта - Example, 
                                          // который был импортирован из файла  Example.vue

//Vue.component ('app-dka', DKA)

new Vue({
  render: h => h(App),
}).$mount('#app')
