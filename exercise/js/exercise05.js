new Vue({
    el: '#exercise05',
    data: {
        isShown: true,
        items: [
            'Peter',
            'Sasa',
            'Duoci'
        ],
        movies: [
            {
                title: 'Lord of the Rings', 
                author: 'J.R.R Tolkiens', 
                books: '3'
            },
            {
                title: 'Harry Porter', 
                author: 'J.K luolin', 
                books: '5'
            },
            {
                title: 'Peter Pan', 
                author: 'A.k neting', 
                books: '6'
            }
        ],
        nestLoops: {
            name: 'TESTOBJECT', 
            data: [1.67, 1.33, 0.98, 2.21]
        }
    }
});