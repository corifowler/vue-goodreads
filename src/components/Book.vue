<template>
    <div id="book">
        <img v-bind:src="bookInfo.image_url" class="book-image">
        <div class="book-info">
            <div class="title">{{ bookInfo.title }}</div>
            <div class="author">by {{ bookInfo.author.name }}</div>
        </div>
        <div class="button-options">
            <button v-on:click="getBookInfo()">MORE INFO</button>
            <button v-on:click="removeBookFromList()">REMOVE FROM LIST</button>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import * as X2JS from 'x2js';

export default {
    name: 'book',
    props: {
        book: Object
    },
    data () {
        return {
            bookInfo: this.book,
            id: this.book.id.toString()
        };
    },
    methods: {
        getBookInfo() {
            const 
                apiKey = 'apYQXz3HlYOZc3KQYZL7Q',
                apiUrl = `https://www.goodreads.com/book/show/${this.id}.xml?key=${apiKey}`;

            Vue.axios.get(apiUrl).then(response => {
                let x2js = new X2JS();
                let res = x2js.xml2js(response.data);
                console.log(res);
            })
            .catch(err => {
                console.log('e', err);
            });
        },
        removeBookFromList() {
            this.$store.dispatch('deleteBook', this.bookInfo);
        }
    }
}
</script>

<style scoped>
    #book {
        padding: 1em;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 0.5px solid #35495e;
    }

    .book-info {
        display: flex;
        flex-direction: column;
        margin-left: 2em;
    }

    .title, .author {
        align-self: flex-start;
    }

    .title {
        font-weight: bold;
    }

    .button-options {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 2;
    }

    .button-options button {
        color: #35495e;
        border: 1px solid #35495e;
        background: none;
        border-radius: 8px;
        margin: 0 0.25em;
        font-size: 0.85em;
        font-family: inherit;
    }
</style>