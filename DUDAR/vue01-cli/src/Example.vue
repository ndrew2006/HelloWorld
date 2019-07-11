<template>
    <div>
        <h1> {{ message }} </h1>
        <app-input :msg="message" @messChange="message = $event"></app-input> <!-- 1. Используем импортированный обьект <app-input></app-input> как html тег. 
        2. Для передачи message в другой файл, для тега <app-input> добавляем атрибут :msg и присваиваем ему переменную message. (так как app-input получен из 
        того файла куда мы собираемся передать значение.) 
        3. @messChange - считываем что передается из дочернего файла в методе messChange. Присваиваем нашей переменной message значение переменной $event, которая 
        принимает значение параметра this.mess из дочернего файла. -->
    </div>
</template>

<script>
     import Input from './Field.vue'; //Импортируем файл Field.vue для получения из него данных

    export default {
        data () {
            return {
                message: 'Пробный текст' //Обявляем тут свойство(пременную) что бы могли вывести ее в теге h1
            }
        },
        components: {           //Создали локальный компонент app-input
            'app-input': Input //и в качестве обьекта передали в него, импортированный файл Field.vue (в нашем случае это переменная mess)
        }
    }
</script>