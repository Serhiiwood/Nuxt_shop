<template>
	<div class="basket">
		<div class="wrap basketWrap">
			<div class="basketHeader">
				<p class="basketHeaderTitle">Title</p>
				<p class="basketHeaderPrice">Price</p>
				<p class="basketHeaderQuantity">Quantity</p>
				<p class="basketHeaderCost">Cost</p>
			</div>
			<div v-if="totalPrice > 0" class="basketItems">
				<BasketItem v-for="product of products" :key="product.id" :product="product" />
				<p class="basketTotalPrice"><span>Total:</span> $ {{totalPrice}}</p>
			</div>
			<p class="isEmpty" v-else>There are no products in the cart.</p>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	import BasketItem from '@/components/BasketItem'

	export default {
		components: {
			BasketItem
		},
		computed: mapGetters({
			products: 'Basket/productsList',
			totalPrice: 'Basket/totalPrice'
		})
	}
</script>

<style>
	.basketHeader {
		display: flex;
		flex-basis: 100%;
		padding: 20px 0 40px;
		border-bottom: 2px solid #0d0d0d;
	}

	.basketHeader p {
		font-size: 20px;
	}

	.basketHeaderTitle {
		flex-basis: 25%;
	}

	.basketHeaderPrice {
		flex-basis: 25%;
	}

	.basketHeaderQuantity {
		flex-basis: 35%;
	}

	.basketHeaderCost {
		flex-basis: 15%;
	}

	.basketItems {
		display: flex;
		flex-direction: column;
	}

	.basketTotalPrice {
		padding: 30px 2px 0;
		align-self: flex-end;
		position: relative;
	}

	.basketTotalPrice::before {
		content: '';
		display: block;
		position: absolute;
		z-index: -1;
		bottom: 0;
		width: 100%;
		height: 10px;
		background-color: #FFE600;
	}

	.basketTotalPrice span {
		font-size: 18px;
		font-weight: 600
	}

	.isEmpty {
		text-align: center;
		font-size: 24px;
		letter-spacing: 0.5px;
		padding: 40px;
	}

	@media (max-width: 480px) {
		.basketHeader {
			padding: 20px 0 20px;
			border-bottom: 1px solid #0d0d0d;
		}

		.basketHeader p {
			font-size: 14px;
		}

		.isEmpty {
			font-size: 12px;
			font-weight: 600;
		}
	}
	
</style>
