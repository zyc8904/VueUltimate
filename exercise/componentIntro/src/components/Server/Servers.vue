<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="(index, item) in 5"
                    :key="item">
                Server #{{ index }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 1, status: 'Critical'},
                    {id: 1, status: 'Normal'},
                    {id: 1, status: 'Normal'}
                ]
            }
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid blue;
    }
</style>
