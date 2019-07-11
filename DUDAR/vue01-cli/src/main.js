import Vue from 'vue'
import App from './App.vue'
import Example from './Example.vue'


Vue.config.productionTip = false

Vue.component ('app-example', Example) //Создаем глобальный компонент app-example и передаем в него в качестве обьекта - Example, который был импортирован из файла  Example.vue

new Vue({
  render: h => h(App),
}).$mount('#app')
