<template>
    <div>
        <h3> {{ textSearch }} (Длина: {{ textSearch.length }} символов) </h3>
        <input type="text" size="50" v-model="textSearch">
        <button @click="getHashtags()">Загрузить хэштеги</button> <!-- По событию нажатия будет вызываться метод getHashtags() -->
        <ul>
            <li v-for="(hashtag, index) in pHashtags" :key="index"> {{ hashtag }} </li>  
        </ul>
    
        <button @click="getCities()">Загрузить города</button>
        <ul>
            <li v-for="(city, index) in pCities" :key="index"> {{ city.region }} : {{ city.city }} </li>
        </ul>
    
    </div>
</template>

<script>
export default {
    data () {
        return {
            pHashtags: [], //создаем свойство hashtags в котором будет храниться массив с хэштэгами
            pCities: [],    //создаем свойство hashtags в котором будет храниться массив с городами
            textSearch: '',
            url: {
                hashtags: 'https://dka-develop.ru/api?type=hashtag',        //создаем свойство url, в который помещаем обьект (некое подобие ассоциативного массива с ссылками json)
                cities: 'https://dka-develop.ru/api?type=city'
            }
        }
    },
    watch: {   //Функция наблюдения. Наблюдение идет за свойствами.
        textSearch: function() {  //вписываем свойство и анонимную функцию. Это означает , что если свойство поменяется, то сработает код , который находится внутри этой функции
            if (this.textSearch.length > 3) {
                this.textSearch = "Меняем содержимое поля из кода";
            }
        }
    },
    created: function() {
        //console.log(this.url.hashtags); //Проверка в консоли, того, какое значение предается параметру
        //console.log(this.url.cities);
    },
    methods: {
        getHashtags() { //создаем метод который будет заполнять свойство hashtags[] данными
            axios.get(this.url.hashtags).then((Response) => {   // тут используется стрелочная функция вместо функции обратного вызова, -
                //console.log(Response.data);                     // -так как она не создает свой контекст this а использует значения this окружающего контекста  
                this.pHashtags = Response.data
                });    // обращаемся к библиотеке axios для асинхронного запроса к сайту
        },
        getCities() {
            axios.get(this.url.cities).then((Response) => {
                //console.log(Response.data);
                this.pCities = Response.data;
            });
        }
    }
}
</script>
