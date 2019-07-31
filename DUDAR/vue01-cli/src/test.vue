<template>
    <div>
        <h1>Введите имя фильма</h1>
        <input type="text" v-model='userInput'>
        <button @click="show = !show">{{buttonText}}</button>
        <p v-if="show"> {{ userInput + addStringEng }} </p>
        <p v-else> {{ userInput + addStringRus }} </p>
    </div>
</template>


<script>
export default {
    data () {
        return {
            show: false,
            userInput: '',
            addStringRus: ' в твоей заднице.',
            addStringEng: ' in your ass.'
        }
    },
   // methods: {
   //     doString(addString) {
   //        if (this.userInput) {
   //             this.readyString = this.userInput + addString
   //         }
   //         else {
   //             alert("Введите название фильма!")
   //             }
//
  //          //console.log(this.userInput);
  //          //console.log(readyStr);
  //      }
  //  },
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
