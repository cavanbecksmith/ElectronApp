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

</style>