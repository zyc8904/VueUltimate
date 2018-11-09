new Vue({
    el: '#exercise02',
    data: {
        value: 'Hi!'
    },
    methods: {
        alertMe: function() {
            console.log('Wow, you click me now!');
        },
        storeValue: function(event) {
            this.value = event.target.value;
        }
    }
})