<template>
	<header class="header">
		<div class="wrap headerWrap">
			<nuxt-link to="/" class="logo">
				<img src="@/assets/images/cannabis.png" alt="thc-logo" class="headerImg headerLogoImg">
				<div class="logoText">
					<p>Medical</p>
					<p class="logotextGreen">Weed</p>
				</div>
			</nuxt-link>

			<BasketIcon/>
		</div>
	</header>
</template>


<script>
	import BasketIcon from '@/components/BasketIcon'
	export default {
		name: "Header",
		components: {
			BasketIcon
		},
	}
</script>

<style>

	.header {
		position: sticky;
		top: 0;
		width: 100%;
		border-bottom: 1px solid #0d0d0d;
		background-color: #fff;
		z-index: 5
	}

	.headerWrap {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding: 20px 10px 30px;
	}

	.headerImg {
		display: block;
		padding: 0;
	}

	.logo::before {
		content: '';
		display: block;
		width: 0px;
		height: 0px;
		border-radius: 50%;
		background-color: green;
		position: absolute;
		left: 8px;
		top: 10px;
		transition: 0.3s ease-in-out;
	}

	.logo {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: #0D0D0D;
		position: relative;
		
	}

	.logo p {
		font-size: 20px;
		letter-spacing: 2px;
		line-height: 20px;
		font-weight: 600;
		margin-left: 10px;
	}

	.headerLogoImg {
		width: 60px;
		transform: rotate(-15deg);
		transition: .3s ease-in-out;
	}

	.logo:hover .headerLogoImg {
		transform: rotate(-35deg);
	}

	.logo:hover::before  {
		width: 50px;
		height: 50px;
	}

	.logo:active::before  {
		width: 55px;
		height: 55px;
		background-color: #FFE600;
	}

</style>
