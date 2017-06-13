<template>
    <div id="searchResult">
        <img v-bind:src="searchResult.image_url" class="result-image">
        <div class="result-info">
            <div class="title">{{ searchResult.title }}</div>
            <div class="author">by {{ searchResult.author.name }}</div>
        </div>
        <div class="button-options">
            <button v-on:click="getBookInfo()">MORE INFO</button>
            <button v-on:click="addToMyBooks()">ADD TO MY BOOKS</button>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import * as X2JS from 'x2js';

export default {
    name: 'searchResult',
    data () {
        return {
            searchResult: this.result.best_book,
            id: this.result.best_book.id.toString()
        };
    },
    props: {
        result: Object
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
        addToMyBooks() {
            this.$store.dispatch('addBook', this.searchResult);
        }
    }
}
</script>

<style scoped>
    #searchResult {
        padding: 1em;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 0.5px solid #35495e;
    }

    .title {
        font-weight: bold;
        align-self: flex-start;
    }

    .result-image {
        max-width: 5em;
    }

    .result-info {
        margin-left: 2em;
        display: flex;
        flex-direction: column;
    }

    .author {
        align-self: flex-start;
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