<template>
	<div id="app">
		<SideBar></SideBar>
	</div>
</template>

<script type="text/javascript">
	import SideBar from './components/SideBar';
	import './scss/main.scss';

	export default {
		data(){
			return{}
		},
		components: {SideBar}
	}
</script>

<style type="text/css" lang="scss">

@import "./scss/main.scss";

body{
	font-family: $primary-font;
}

#app{
	width: 100%;
	min-height: 100vh;
	height: 100%;
}

</style>