<template>
	
	<div class="SideBar" v-bind:class="{ hidden: hidden }">
		<div class="MenuHeading">Testing</div>
		<ul class="list">
			<li><a href="">Something</a></li>
			<li><a href="">Something</a></li>
			<li><a href="">Something</a></li>
		</ul>
	</div>

</template>

<script type="text/javascript">
	export default {
		name: "SideBar",
		props: ['hidden'],
		mounted(){},
		watch: {}
	}
</script>

<style type="text/css" lang="scss">


	.SideBar{
		height: 100vh;
		display: inline-block;
		background: rgb(37, 42, 58);
		color: white;
		&.hidden{
			display: none;
		}
		.MenuHeading{
		    font-size: 125%;
		    font-weight: 300;
		    letter-spacing: 0.1em;
		    color: #fff;
		    margin-top: 0;
		    padding: 15px 0.8em;
		    padding-bottom: 15px;
		    text-transform: uppercase;
		}
		ul.list{
	    	border-top: 1px solid #333;
			li{
				transition: all 0.5s;
				&:hover{
					background: #1f8dd6;
					color: white !important;
				}
			    color: #999;
    			border: none;
    			white-space: normal;
			    padding: 0.625em 1em;
			    cursor: pointer;
    			a{
				    // color: #999;
	    			border: none;
	    			white-space: normal;
	    			text-decoration: none;
	    			color: inherit;
    			}
			}
		}
	}
</style>