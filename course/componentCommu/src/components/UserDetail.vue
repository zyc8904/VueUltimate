<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>My name: {{ switchName() }}</p>
        <p>My age: {{ userAge }}</p>
        <button @click="resetName">reset name</button>
        <button @click="resetFn">reset name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main'

    export default {
        props: {
            myName: {
                type: String,
                required: true
            },
            resetFn: Function,
            userAge: Number
        },
        methods: {
            switchName() {
                return this.myName.split('').reverse().join('');
            },
            resetName() {
                this.myName = 'Pwnny';
                this.$emit('nameWasReset', this.myName);
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
