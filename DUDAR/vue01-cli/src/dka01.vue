<template>
    <div>
       <ul>
           <li v-for="(item, index) in list" :key={index}> <!-- :key={index} - Биндим уникальный ключ, что бы Vue идентифицировал конкретную строку <li> -->
               {{index+1}}. {{ item }} 
            </li>
       </ul>

        <ul>
           <li v-for="(user, index) in users" :key={index}> <!-- :key={index} - Биндим уникальный ключ, что бы Vue идентифицировал конкретную строку <li>, 
                   не забывая в v-for добавить помимо переменной user, еще и переменную index. Без этого в браузере все работает, но сам Vue пишет ошибку. -->
               {{ user.id }}. {{ user.name }}
           </li>
       </ul>

       <table border = "1" @click="nameFunction2()">
           <thead>
               <th>ID</th>
               <th>Имя</th>
           </thead>
           <tbody>
               <tr v-for="(user,index) in users" :key={index}> <!-- :key={index} - Биндим уникальный ключ, что бы Vue идентифицировал конкретную строку <tr>, 
                   не забывая в v-for добавить помимо переменной user, еще и переменную index. Без этого в браузере все работает, но сам Vue пишет ошибку. -->
                   <td>{{ user.id }}</td>
                   <td>{{ user.name }}</td>
               </tr>
           </tbody>
       </table>
        


    </div>
</template>


<script>
export default {
    data () {
        return {
        list: ['один', 'два', 'три'], //Создаем одномерный массив (индексный)
        users: [                      // Создаем ассоциативный массив (ключ, значение)
            {id: 1, name: 'Иван'},
            {id: 2, name: 'Сергей'}
            ]
        }
    },
    methods: {
        nameFunction () {               //Два метода обьявления функций
            alert ("nameFunction");
        },
        nameFunction2: function () {
            alert ("nameFunction2");
        }
    }
}
</script>