<template>
    <div id="searchResult">
        {{ result.best_book.title }}
    </div>
</template>

<script>
export default {
    name: 'searchResult',
    data () {
        return {
            
        };
    },
    props: {
        result: Object
    },
    created() {
        console.log(this.result);
    }
}
</script>

<style scoped>

</style>