import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const
    UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS',
    DELETE_SEARCH_RESULTS = 'DELETE_SEARCH_RESULTS',
    ADD_BOOK = 'ADD_BOOK',
    DELETE_BOOK = 'DELETE_BOOK',
    UPDATE_SELECTED_BOOK = 'UPDATE_SELECTED_BOOK';

export const store = new Vuex.Store({
    state: {
        searchResults: [],
        books: [],
        selectedBook: null
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
        },
        DELETE_BOOK(state, deletedBook) {
            let deletedId = deletedBook.id.toString();

            let newBooks = state.books.filter(book => {
                if (book.id.toString() !== deletedId) {
                    return book;
                }
            });

            state.books = newBooks;
        },
        UPDATE_SELECTED_BOOK(state, selectedBook) {
            state.selectedBook = selectedBook;
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
        },
        updateSelectedBook({ commit }, selectedBook) {
            commit(UPDATE_SELECTED_BOOK, selectedBook);
        },
        deleteBook({ commit }, book) {
            commit(DELETE_BOOK, book);
        }
    },
    getters: {
        books: state => state.books,
        searchResults: state => state.searchResults,
        selectedBook: state => state.selectedBook
    }
});