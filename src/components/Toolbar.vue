<template>
    <div id="toolbar">
        <div class="router-links">
            <router-link to="/" class="link">HOME</router-link>
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
    .router-links {
        display: flex;
        justify-content: flex-end;
    }

    .link {
        padding: 0 1em;
        text-decoration: none;
        color: #35495e;
    }
</style>
