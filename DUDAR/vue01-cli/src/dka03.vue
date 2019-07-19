<template>
    <div>
        <button @click="getHashtags()">Загрузить хэштеги</button> <!-- По событию нажатия будет вызываться метод getHashtags() -->
        <ul>
            <li v-for="(hashtag, index) in hashtags" :key="index"> {{ hashtag }} </li>  
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            hashtags: [], //создаем свойство hashtags в котором будет храниться массив с хэштэгами
            url: {
                hashtags: 'https://dka-develop.ru/api?type=hashtag',        //создаем свойство url, в который помещаем обьект (некое подобие ассоциативного массива с ссылками json)
                cities: 'https://dka-develop.ru/api?type=city'
            }
        }
    },
    created: function() {
        //console.log(this.url.hashtags); //Проверка в консоли, того, какое значение предается параметру
        //console.log(this.url.cities);
    },
    methods: {
        getHashtags() { //создаем метод который будет заполнять свойство hashtags[] данными
            axios.get(this.url.hashtags).then((Response) => {
                console.log(Response.data);
                this.hashtags = Response.data
                });    // обращаемся к библиотеле axios для асинхронного запроса к сайту
        }
    }
}
</script>
