<template>
    <div v-if="selectedBook" id="book-detail">
        <img v-bind:src="selectedBook.image_url" class="book-image">
        <div class="details">
            <div class="title">{{ selectedBook.title }}</div>
            <div class="author">by {{ author }}</div>
            <div v-html="selectedBook.description" class="description"></div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { mapGetters } from 'vuex';
import * as X2JS from 'x2js';

Vue.use(VueAxios, axios);

export default {
    name: 'bookDetail',
    data () {
        return {
            author: '',
            id: ''
        };
    },
    computed: mapGetters([
        'selectedBook'
    ]),
    methods: {
        getAuthorName(selectedBook) {
            if (Array.isArray(selectedBook.authors.author)) {
                this.author = selectedBook.authors.author[0].name;
            } else {
                this.author = selectedBook.authors.author.name;
            }
        },
        getBookInfo() {
            const 
                apiKey = 'apYQXz3HlYOZc3KQYZL7Q',
                apiUrl = `https://www.goodreads.com/book/show/${this.id}.xml?key=${apiKey}`;

            Vue.axios.get(apiUrl).then(response => {
                let x2js = new X2JS();
                let res = x2js.xml2js(response.data);
                this.$store.dispatch('updateSelectedBook', res.GoodreadsResponse.book);
                this.getAuthorName(res.GoodreadsResponse.book);
            })
            .catch(err => {
                console.log('e', err);
            });
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        console.log(this.$route.params);
        if (this.selectedBook) {
            this.getAuthorName(this.selectedBook);
        } else {
            // get book
            this.getBookInfo();
        }
    }
}
</script>

<style scoped>
    #book-detail {
        display: flex;
        align-items: center;
        margin-top: 10em;
    }

    .details {
        display: flex;
        flex-direction: column;
        margin-left: 1em;
        text-align: left;
    }

    .book-image {
        width: 55em;
        margin: 0 2em;
    }

    .title {
        font-weight: bold;
        font-size: 1.5em;
        align-self: flex-start;
    }

    .author {
        font-style: italic;
        align-self: flex-start;
    }

    .description {
        align-self: flex-start;
        padding: 1em 0;
    }
</style>