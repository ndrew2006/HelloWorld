<template>
    <div>
        <h1>Введите имя фильма</h1>
        <input type="text" v-model='userInput'>
        <button @click="doString(addStringRus)">Результат</button>
        <p> {{ readyString }} </p>
        <button @click="doString(addStringEng)">На английском</button>
    </div>
</template>


<script>
export default {
    data () {
        return {
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
    }
}
</script>
