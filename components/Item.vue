<template>
	<div class="item">
		<div class="itemImage">
			<img :src='product.url' alt="Balmoral" >
		</div>
		<div class="itemInfo">
			<p class="infoTitle">{{product.title}}</p>
			<p class="infoDominant">{{product.dominant}}</p>
			<p class="infoTHC"><span>THC:</span>{{product.thc}}</p>
			<p class="infoTHC"><span>CBD:</span>{{product.cbd}}</p>
			<p class="infoPrice">from <span>${{product.price}}</span> / g</p>
			<button class="infoButton" type="submit" @click.prevent="onAdd(product)">Buy</button>
		</div>
	</div>
</template>



<script>
	import { mapActions } from 'vuex';

	export default {
		name: 'Item',
		props: {
			product: {
				type: Object,
				required: true
			}
		},

		methods: mapActions({
			onAdd: 'Basket/addToBasket'
		})
	};

</script>



<style>
	.item {
		display: flex;
		width: 48%;
		align-items: center;
		justify-content: center;
		padding: 10px;
		margin-bottom: 20px;
		box-sizing: border-box;
	}

	.itemImage {
		width: 50%;
	}

	.itemImage img {
		display: block;
		width: 100%;
		height: 100%;
	}

	.itemInfo {
		width: 40%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-left: 20px;
	}

	.itemInfo p {
		flex-basis: 100%;
	}

	.infoTitle {
		font-size: 26px;
		font-weight: 600;
		line-height: 48px;
	}

	.infoDominant {
		font-size: 18px;
		line-height: 24px;
		letter-spacing: 0.5px;
		color: #4d4d4d;
		margin-bottom: 20px;
	}

	.infoTHC {
		font-size: 14px;
		color: #4d4d4d;
		letter-spacing: 0.5px;
		line-height: 20px;
	}

	.infoTHC span {
		color: #0D0D0D;
		font-weight: 600;
		margin-right: 10px;
	}

	.infoPrice {
		font-size: 18px;
		color: #0D0D0D;
		line-height: 48px;
		margin-bottom: 20px;
	}

	.infoPrice span {
		font-weight: 600
	}

	.infoButton {
		outline: none;
		appearance: none;
		padding: 10px 20px;

		color: #0D0D0D;
		font-size: 16px;
		border-color: #0D0D0D;
		transition: 0.2s ease-in-out;
		cursor: pointer;
	}

	.infoButton:hover {
		background-color: #0D0D0D;
		color: #FFFFFF
	}

	.infoButton:active {
		background-color: #4b4b4b;
	}

	@media (max-width: 768px) {
		.item {
			width: 100%;
		}
	}

	@media (max-width: 480px) {
		.item {
			flex-direction: column;
			border-bottom: 1px solid #0D0D0D
		}

		.itemImage {
			width: 100%;
		}

		.itemInfo {
			width: 100%;
			flex-direction: row;
			flex-wrap: wrap;
			margin-left: 0px;
			position: relative;
		}

		.infoButton {
			padding: 20px 30px;
			font-size: 24px;
			position: absolute;
			right: 0;
			top: 50%;
		}
	}

</style>
