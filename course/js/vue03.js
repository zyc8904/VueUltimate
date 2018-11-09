new Vue({
    el: '#app',
    data: {
        counter: 0,
        secondCounter: 0
    },
    computed: {
        output: function() {
            console.log('Computed!')
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    },
    methods: {
        result: function() {
            console.log('Methods~')
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    },
    watch: {
        counter: function(value) {
            var vm = this;
            setTimeout(function() {
                vm.counter = 0;
            }, 2000);
        }
    }
})