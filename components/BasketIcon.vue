<template>
	<nuxt-link :to="{name: 'basket'}" class="basket">
		<img src="@/assets/images/shopping-bag.png" alt="basket" class="headerImg basketImg">
		<div class="basketCount" v-if="count > 0">
			<p class="basketCountValue">{{ count }}</p>
		</div>
	</nuxt-link>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'BasketIcon',
		computed: mapGetters({
			count: 'Basket/productsCount'
		})
	}
</script>

<style>
	.basket {
		position: relative;
	}

	.basketImg {
		width: 40px;
	}

	.basketCount {
		position: absolute;
		top: 50%;
		right: -25%;
		transform: translateX(-50%);
		display: flex;
		justify-content: center;
		align-items: center;
		width: 25px;
		height: 25px;
		background-color: #FFE600;
		border: 2px solid #0D0D0D;
		border-radius: 50%;
		transition: .3s ease-in-out;
	}

	.basketCountValue {
		font-size: 12px;
		color: #0D0D0D;
	}

	.basket:hover .basketCount{
		background-color: #057e05;
	}
</style>
