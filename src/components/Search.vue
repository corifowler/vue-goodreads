<template>
    <div id="search">
        <h1>FIND A BOOK</h1>
        <div class="search-form">
            <input v-model="searchTerm" class="search-input">
            <button v-on:click="search()" class="search-button">SEARCH</button>
        </div>
        <div v-if="searchResults.length" class="search-results">
            <searchResult v-for="(result, index) in searchResults" v-bind:key="index" :result="result"></searchResult>
        </div>
        <div v-else>
            NO RESULTS
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import * as X2JS from 'x2js';

import searchResult from './SearchResult.vue';

Vue.use(VueAxios, axios);

export default {
    name: 'search',
    data () {
        return {
            searchTerm: '',
            searchResults: []
        };
    },
    methods : {
        search() {
            console.log('st', this.searchTerm);
            const 
                apiKey = 'apYQXz3HlYOZc3KQYZL7Q',
                apiUrl = `https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${this.searchTerm}`;

            Vue.axios.get(apiUrl).then(response => {
                let x2js = new X2JS();
                let res = x2js.xml2js(response.data);
                // let resDOM = new DOMParser().parseFromString(response.data, 'text/xml');
                // let res = xmlToJson(resDOM);
                this.searchResults = res.GoodreadsResponse.search.results.work;
                console.log(this.searchResults);
            })
            .catch(err => {
                console.log('e', err);
            });
        }
    },
    components: {
        searchResult
    }
}
</script>

<style scoped>
    .search-form {
        display: flex;
        font-family: inherit;
        justify-content: center;
        align-items: center;
    }
    
    .search-form button, input {
        margin: 0 1em;
    }

    .search-input {
        width: 38em;
        border: 1px solid #35495e;
        border-radius: 8px;
        padding: 1em;
        color: #35495e;
    }

    .search-button {
        background: none;
        border: none;
        color: #35495e;
    }

    .search-results {
        margin-top: 1em;
    }
</style>
