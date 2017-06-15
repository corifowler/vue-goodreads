<template>
    <div id="books">
        <h1>MY BOOKS</h1>
        <div v-if="books.length" class="book-list">
            <book v-for="book in books" v-bind:key="book.id" :book="book"></book>
        </div>
        <div v-else>
            You haven't added any books yet.
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import book from './Book';

export default {
    name: 'books',
    data () {
        return {
            
        };
    },
    computed: mapGetters([
        'books'
    ]),
    components: {
        book
    }
}
</script>

<style scoped>

</style>
