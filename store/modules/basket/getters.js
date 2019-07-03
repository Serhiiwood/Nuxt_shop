export default {

	productsCount(store) {
		return store.items.length;
	},

	productsList(store) {
		return store.items;
	},

	totalPrice(store) {
		return store.items.reduce(
			(sum, product) => sum + (product.count * product.price), 0);
	}
}