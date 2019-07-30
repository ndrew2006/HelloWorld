<template>
    <div>
        <h1>Введите имя фильма</h1>
        <input type="text" v-model='userInput'>
        <button @click="show = !show">{{buttonText}}</button>
        <p v-if="show"> {{ readyString }} </p>
        <!-- <button @click="doString(addStringEng)" v-if="caption='addStringEng'">На английском</button> -->
    </div>
</template>


<script>
export default {
    data () {
        return {
            show: true,
            userInput: '',
            readyString: '',
            addStringRus: ' в твоей заднице.',
            addStringEng: ' in your ass.'
        }
    },
    methods: {
        doString(addString) {
            if (this.userInput) {
                this.readyString = this.userInput + addString
            }
            else {
                alert("Введите название фильма!")
                }

            //console.log(this.userInput);
            //console.log(readyStr);
        }
    },
    computed: {
        buttonText: function() {
            if (this.show) {
                return "Русский"
            }
            return "Английский"
        }
    }
}
</script>
