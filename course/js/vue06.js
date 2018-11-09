var vm1 = new Vue({
    el: '#app1',
    data: {
        title: 'The VueJs Instance1',
        showParagraph: false
    },
    methods: {
        show: function() {
            this.showParagraph = true;
            this.updateTitle('The VueJs Instance (Update)!');
        },
        updateTitle: function(title) {
            this.title = title;
        }
    },
    computed: {
        lowerCaseTitle: function() {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function(value) {
            alert('Title changed, the value ' + value);
        }
    }
});

var vm2 = new Vue({
    el: '#app2',
    data: {
        title: 'The VueJs Instance2'
    },
    methods: {
        show: function() {
            vm1.title = 'Changed!';
        }
    }
})