<template>
	<div class="itemsList">
		<div class="wrap itemsListWrap">
			<Item v-for="product of products" :key="product.id" :product="product"/>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import Item from '@/components/Item';
	export default {
		name: 'ItemsList',
		components: { Item },
		computed: mapGetters({
			products: 'Products/products'
		})
	}
</script>

<style>
	.itemsListWrap {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 40px 20px;
	}
</style>
