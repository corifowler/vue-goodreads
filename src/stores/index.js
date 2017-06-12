import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        searchResults: [],
        books: []
    },
    mutations: {
        UPDATE_SEARCH_RESULTS(state, newResults) {
            state.searchResults = newResults;
        },
        DELETE_SEARCH_RESULTS(state) {
            state.searchResults = [];
        },
        ADD_BOOK(state, newBook) {
            state.books.push(newBook);
        }
    },
    actions: {},
    getters: {
        books: state => state.books,
        searchResults: state => state.searchResults
    }
});