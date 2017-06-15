<template>
  <div id="app">
    <toolbar></toolbar>
    <div class="router-container">
		<router-view></router-view>
    </div>
  </div>
</template>

<script>
import { store } from './stores/index.js';
import toolbar from './components/Toolbar.vue';

export default {
  name: 'app',
  components: {
    toolbar
  },
  store
}
</script>

<style>
	#app {
	/*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
	font-family: 'Lato', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	/*margin-top: 1em;*/
	}

	.router-container {
		padding: 2.5em;
	}
</style>
