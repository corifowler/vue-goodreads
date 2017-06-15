<template>
    <div id="search">
        <h1>FIND A BOOK</h1>
        <div class="search-form">
            <input v-model="searchTerm" class="search-input">
            <button v-on:click="search()" class="search-button">
                <icon name="search"></icon>
            </button>
        </div>
        <div v-if="searchResults" class="search-results">
            <searchResult v-for="(result, index) in searchResults" v-bind:key="index" :result="result"></searchResult>
        </div>
        <div v-else class="no-result-text">
            NO RESULTS
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import * as X2JS from 'x2js';
import { mapGetters, mapActions } from 'vuex';
import 'vue-awesome/icons/search';
import Icon from 'vue-awesome/components/Icon'

import searchResult from './SearchResult';

Vue.use(VueAxios, axios);

export default {
    name: 'search',
    data () {
        return {
            searchTerm: '',
            apiSearchResults: []
        };
    },
    computed: mapGetters([
        'searchResults'
    ]),
    methods : {
        search() {
            const 
                apiKey = 'apYQXz3HlYOZc3KQYZL7Q',
                apiUrl = `https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${this.searchTerm}`;
            
            this.clearSearchResults();

            Vue.axios.get(apiUrl).then(response => {
                let x2js = new X2JS();
                let res = x2js.xml2js(response.data);
                // let resDOM = new DOMParser().parseFromString(response.data, 'text/xml');
                // let res = xmlToJson(resDOM);
                this.apiSearchResults = res.GoodreadsResponse.search.results.work;
                this.updateSearchResults(this.apiSearchResults);
            })
            .catch(err => {
                this.apiSearchResults = [];
            });
        },
        updateSearchResults(results) {
            this.$store.dispatch('updateSearchResults', results);
        },
        clearSearchResults() {
            this.$store.dispatch('clearSearchResults');
        }
    },
    components: {
        searchResult,
        Icon
    },
    created() {
        this.clearSearchResults();
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
        margin: 0 0.5em;
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

    .fa-icon {
        width: auto;
        height: 2em;
    }

    .no-result-text {
        margin-top: 1em;
        font-weight: bold;
    }
</style>
