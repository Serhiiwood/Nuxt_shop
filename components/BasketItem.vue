<template>
	<div class="basketItem">
		<p class="itemTitle">{{ product.title }}</p>
		<p class="itemPrice">$ {{product.price}}</p>
		<div class="itemQuantity">
			<button @click="onDecrease(product.id)">
				<img src="@/assets/images/minus.png" alt="minus" class="buttonImg buttonMinus">
			</button>
			<input type="text" :value="product.count" disabled class="itemQuantityInput">
			<button @click="onIncrease(product.id)">
				<img src="@/assets/images/plus.png" alt="plus" class="buttonImg buttonPlus">
			</button>
		</div>
		<p class="itemCost">$ {{totalPrice}}</p>
		<button @click="onRemove(product.id)" class="itemRemove">
			<img src="@/assets/images/garbage.png" alt="plus" class="buttonImg buttonGarbage">
		</button>

	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	export default {
		name: "BasketItem",
		props: {
			product: {
				type: Object,
				required: true
			}
		},
		computed: {
			totalPrice() {
				return this.product.price * this.product.count;
			}
		},
		methods: mapActions({
			onDecrease: 'Basket/DecreaseCount',
			onIncrease: 'Basket/IncreaseCount',
			onRemove: 'Basket/removeItem'
		})
	}
</script>

<style scoped>
	.basketItem {
		display: flex;
		padding: 20px 0 30px;
		border-bottom: 1px solid #0D0D0D;
		align-items: center;
		position: relative;
	}

	.itemTitle {
		flex-basis: 25%;
		font-weight: 600;
	}

	.itemPrice {
		flex-basis: 25%;
	}

	button {
		appearance: none;
		outline: none;
		border: none;
		cursor: pointer;
	}

	.itemQuantity {
		display: flex;
		align-items: center;
		flex-basis: 35%;
	}

	.itemQuantityInput {
		width: 30px;
		padding: 10px 0 10px 10px;
		font-size: 18px;
		border: none;
	}

	.buttonImg {
		display: block;
		width: 24px;
	}

	.itemRemove {
		position: absolute;
		right: 5px;
		z-index: -1;
	}

	@media (max-width: 480px) {
		.basketItem {
			padding: 15px 0 15px;
		}

		.itemTitle {
			font-size: 14px;
			font-weight: 500;
			word-wrap: break-word;
			word-break: break-all;
		}

		.itemPrice {
			margin-left: 10px;
			flex-basis: 15%;
		}

		.itemQuantity {
			flex-basis: 33%;
		}

		.itemQuantityInput {
			width: 20px;
			padding: 5px 0 5px 5px;
			font-size: 14px;
		}

		.buttonImg {
			width: 20px;
		}

		.itemRemove {
			right: 0px;
		}
	}

</style>
