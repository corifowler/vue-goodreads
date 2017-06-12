import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Search from '@/components/Search'
import Home from '@/components/Home'
import Books from '@/components/Books'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/search',
            name: 'Search',
            component: Search
        },
        {
            path: '/books',
            name: 'Books',
            component: Books
        }
    ]
})