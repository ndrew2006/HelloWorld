Vue.component ('app-car', {
    data: function() {
        return {
        cars: [
            {model: "BMW"},
            {model: "Volvo"},
            {model: "Mers"},
            {model: "Ford"},
            {model: "Audi"},
            {model: "Seat"},
            {model: "Fiat"}
            ]
        }
    },
    template: '<div><div class="car" v-for="car in cars"> <p> {{ car.model }} </p> </div></div>'
});

new Vue ({
    el: "#app",
    data: {
        
    }
});

new Vue ({
    el: "#app2",
    data: {
        
    }
});