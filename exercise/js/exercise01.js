new Vue({
    el: '#exercise01',
    data: {
        name: 'PwnnyLeon',
        age: 24,
        imgSrc: 'http://us.vuejs.org/_nuxt/img/vuesplash.3e416f3.png'
    },
    methods: {
        randomNumber: function() {
            return Math.random(0, 1);
        },
        randomNumberInt: function() {
            return parseInt(Math.random(0, 1)*100, 10);
        }
    }
})