import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const
    UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS',
    DELETE_SEARCH_RESULTS = 'DELETE_SEARCH_RESULTS',
    ADD_BOOK = 'ADD_BOOK';

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
    actions: {
        updateSearchResults({ commit }, searchResults) {
            commit(UPDATE_SEARCH_RESULTS, searchResults);
        },
        clearSearchResults({ commit }) {
            commit(DELETE_SEARCH_RESULTS);
        },
        addBook({ commit }, book) {
            commit(ADD_BOOK, book);
        }
    },
    getters: {
        books: state => state.books,
        searchResults: state => state.searchResults
    }
});