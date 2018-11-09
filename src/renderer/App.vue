<template>
	<div id="app" class="FlexRow">
		<SideBar :hidden='this.sideBarHidden'></SideBar>
		<main>
			<router-view></router-view>

			<div class="btn" v-on:click="this.toggleSidebar">sdjflsdjf</div>
		</main>
	</div>
</template>

<script type="text/javascript">
	import SideBar from './components/SideBar';
	import './scss/main.scss';

	export default {
		data(){
			return{
				sideBarHidden: true
			}
		},
		components: {SideBar},
		methods: {
			toggleSidebar(bool){
				console.log('Toggle sidebar');
				if(bool === true){
					console.log('True');
					this.sideBarHidden = false
				}
				else if(bool === false){
					console.log('False');
					this.sideBarHidden = true;
				}
				else{
					console.log('Null')
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
	flex-grow: 5;
	display: flex;
	vertical-align: top; 
}

#app{
    font-weight: bold;
    text-align: center;
}

.FlexRow{
	display: flex;
    flex-flow: row;
}

.FlexSidebar{
	flex: 1;
    transition: flex-grow 1000ms linear;
}

</style>