<template>
	<div id="app">
		<NavBar></NavBar>
		<div class="flex-row">
			<SideBar :hidden='this.sideBarHidden'></SideBar>
			<main class="flex-auto">
				<router-view></router-view>
				<div class="btn" v-on:click="this.toggleSidebar">sdjflsdjf</div>
			</main>
		</div>
	</div>
</template>

<script type="text/javascript">
	import SideBar from './components/SideBar';
	import NavBar from './components/NavBar';
	import './scss/main.scss';

	export default {
		data(){
			return{
				sideBarHidden: true
			}
		},
		components: {SideBar, NavBar},
		methods: {
			toggleSidebar(bool){
				console.log('Toggle sidebar');
				if(bool === true){
					this.sideBarHidden = false
				}
				else if(bool === false){
					this.sideBarHidden = true;
				}
				else{
					this.sideBarHidden = !this.sideBarHidden;
				}
			}
		}
	}
</script>

<style type="text/css" lang="scss">

@import "./scss/main.scss";

body{
	font-family: $primary-font;
}

main{
	// flex: 1 100%;
	// flex-grow: 5;
	display: flex;
	vertical-align: top;
	background-color:#f9f7f7;
	height: 100vh;
}

#app{
    font-weight: bold;
    text-align: center;
}

</style>