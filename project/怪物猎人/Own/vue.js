new Vue({
    el: '#app',
    data: {
        showValue: false,
        youValue: 100,
        monsterValue: 100,
        youBlood: '',
        monsterBlood: '',
        objectBlood: {},
        arrayBlood: []
    },
    methods: {
        startShow: function() {
            this.showValue = !this.showValue;
            this.youValue = this.monsterValue = 100;
        },
        giveUp: function() {
            this.startShow();
            this.arrayBlood = [];
        },
        intoView: function() {
            document.getElementById('intoView').scrollIntoView();
        },
        randomValue: function(el) {
            this.youBlood = -parseInt(Math.random()*el, 10);
            this.monsterBlood = -(el + this.youBlood);
        },
        attackWay: function() {
            this.youValue = this.youValue + this.youBlood;
            this.monsterValue = this.monsterValue + this.monsterBlood;
            this.objectBlood = {you: this.youBlood, monster: this.monsterBlood};
            this.arrayBlood.push(this.objectBlood);
        },
        bloodValue: function() {
            this.randomValue(10);
        },
        spBloodValue: function() {
            this.randomValue(30);
        },
        healBloodValue: function() {
            this.youBlood = 10 - parseInt(Math.random()*10, 10);
        },
        attack: function() {
            this.bloodValue();
            this.attackWay();
            this.intoView();
        },
        spAttack: function() {
            this.spBloodValue();
            this.attackWay();
            this.intoView();
        },
        heal: function() {
            this.healBloodValue();
            this.youValue = this.youValue + this.youBlood;
            this.objectBlood = {you: this.youBlood, monster: 0};
            this.arrayBlood.push(this.objectBlood);
            this.intoView();
        }
    }
})