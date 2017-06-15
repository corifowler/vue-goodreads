<template>
    <div id="home">
        <div class="header">
            Welcome to vue-Goodreads!
        </div>
        <img src="../assets/logo.png">
        <div class="welcome-text">
            <router-link to="/search" class="link">Search</router-link> for a book, or <router-link to="/books" class="link">check your book list.</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            
        };
    }
}
</script>

<style scoped>
    .header {
        font-size: 2.5em;
        margin-bottom: 1em;
    }

    .welcome-text {
        margin-top: 0.5em;
        font-size: 1.25em;
    }

    .link {
        color: inherit;
        font-weight: bold;
    }
</style>
