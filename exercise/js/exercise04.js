new Vue({
    el: '#exercise04',
    data: {
        attached: false,
        couple: 'couplecss',
        mystyle: '',
        isVisible: true,
        userStyle: {
            width: '100px',
            height: '150px',
            backgroundColor: 'grey'
        },
        myProgress: {
            width: '0px',
            height: '20px',
            backgroundColor: 'pink'
        }
    },
    methods: {
        starEffect: function() {
            var vm = this;
            setInterval(function() {
                vm.attached = !vm.attached
            }, 500)
        },
        startPro: function() {
            var vm = this;
            var width = 0;
            setInterval(function() {
                width += 1;
                vm.myProgress.width = width + '%'
            }, 100)
        }
    },
    computed: {
        classTick: function() {
            return this.attached == false ? 'shrink' : 'highlight';
        }
    }
})