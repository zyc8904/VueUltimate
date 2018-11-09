new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'http://google.com',
        finishLink: '<a href="http://google.com">Google</a>'
    },
    methods: {
        changeTitle(event) { 
            this.title = event.target.value; 
        },
        sayHello() {
            return this.title;
        }
    }
})