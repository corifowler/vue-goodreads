<template>
    <div id="toolbar">
        <div>
            <router-link to="/" class="header">vue-Goodreads</router-link>
        </div>
        <div class="router-links">
            <router-link to="/search" class="link">SEARCH</router-link>
            <router-link to="/books" class="link">BOOKS</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'toolbar',
    data () {
        return {
            
        };
    }
}
</script>

<style scoped>
    #toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1em;
        background-color: #35495e;
        color: white;
    }

    .header {
        font-weight: bold;
        text-decoration: none;
        color: white;
    }

    .router-links {
        display: flex;
        justify-content: flex-end;
    }

    .link {
        padding: 0 1em;
        text-decoration: none;
        color: white;
    }
</style>
