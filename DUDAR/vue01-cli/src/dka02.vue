<template>
    <div>
        <button @click="high()">Counter равен {{ counter }} </button> <!-- //при нажатии на кнопку вызывается метод high и свойство counter -->
    </div>
</template>


<script>
export default {
    data () {
        return {
             counter: 1 //свойство (переменная)
        }
    },
    created: function() {
        //this.counter = 3;
        this.high();
    },
    methods: {          //метод который увеличивает значение свойства на 1
        high() {
            this.counter++;
        }
    }
}
</script>
