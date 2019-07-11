<template>
    <div>
       <!-- Начало урока №9 <h3> {{ msg }} </h3> Тут мы выводим переменную msg, которую отследили обьектом props и передали сюда из файла Example.vue  -->
       <!-- Начало урока №9<input type="text" v-model="mess"> - Это тектовое поле значение которого тут же передается в переменную mess -->
       <input type="text" :value="msg" @input="changeMess"> <!-- 1. :value-атрибут для установки первоначального значения окна ввода input.
       2.  @input = v-on:[eventName]="doSomething" При вводе в это поле, будет вызываться функция changeMess  -->
       <p> {{ mess }} </p>
    </div>
</template>

<script> 
    export default { // Экспорт для того что бы значения были видны в других файлах
        props: ['msg'], //Добавляем обьект props для того что бы можно было отследить переменную которую передаем из файла Example.vue. Это массив. Вписываем в него отслеживаемый атрибут msg
        data () {
    return {
        mess: '', // присваиваем начальное значение для переменной mess
    }
  },
  methods: {  //Создается обьект , который будет обрабатывать мою функцию changeMess с параметром event
      changeMess (event) {
          this.mess = event.target.value; //Присваиваем переменной mess экземпляра Vue значение полученное из обработчика события @input
          this.$emit('messChange', this.mess); //this.$emit() Стандартная функция, которая передает нашу функцию messChange в родительский элемент (файл), с параметром this.mess
      }
  }
} 
</script>