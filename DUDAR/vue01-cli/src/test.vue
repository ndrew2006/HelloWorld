<template>
    <div>
        <h1>Введите имя фильма</h1>
        <input type="text" v-model='userInput'>
        <button @click="doString()">{{buttonText}}</button>
        <p> {{ readyString }} </p>
        
    </div>
</template>


<script>
export default {
    data () {
        return {
            show: true,
            readyString: '',
            userInput: '',
            addStringRus: ' в твоей заднице.',
            addStringEng: ' in your ass.'
        }
    },
    methods: {
        doString() {
           if (this.userInput) {
                this.show = !this.show;
                    if (this.show)  {
                        this.readyString = this.userInput + this.addStringEng
                        }

                        else {
                            this.readyString = this.userInput + this.addStringRus
                        }
            }
            else {
                this.readyString = '';
                alert("Введите название фильма!");
                }

            //console.log(this.userInput);
            //console.log(this.readyString);
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
