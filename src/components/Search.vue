<template>
    <div id="search">
        <h1>SEARCH</h1>
        <button v-on:click="search()">SEARCH FOR HUNGER GAMES</button>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { xmlToJson }from '../helpers/xmlToJson.js'
import * as X2JS from 'x2js';

Vue.use(VueAxios, axios);

export default {
    name: 'search',
    data () {
        return {
            searchTerm: 'hunger'
        };
    },
    methods : {
        search() {
            const 
                apiKey = 'apYQXz3HlYOZc3KQYZL7Q',
                apiUrl = `https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${this.searchTerm}`;

            Vue.axios.get(apiUrl).then(response => {
                let x2js = new X2JS();
                let res = x2js.xml2js(response.data);
                // let resDOM = new DOMParser().parseFromString(response.data, 'text/xml');
                // let res = xmlToJson(resDOM);
                console.log('res', res);
            })
            .catch(err => {
                console.log('e', err);
            });
        }
    }
}
</script>

<style scoped>

</style>
