<template>
    <div id="books">
        <h1>MY BOOKS</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'books',
    data () {
        return {
            
        };
    },
    computed: mapGetters([
        'books'
    ])
}
</script>

<style scoped>

</style>
