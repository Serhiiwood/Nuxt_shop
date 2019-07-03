import {
	ADD_PRODUCT,
	DELETE_PRODUCT,
	SET_COUNT
	} from "./mutation-types";

export default {

	[ADD_PRODUCT](store, product) {
		const index = store.items.findIndex(p => p.id === product.id);

		if (index !== -1) {
			store.items.splice(index, 1, Object.assign({}, store.items[index], {
				count: store.items[index].count + 1
			}));
		} else {
			store.items.push(product);
		}
	},

	[DELETE_PRODUCT](store, id) {
		const index = store.items.findIndex(p => p.id === id);
		store.items.splice(index, 1);
	},

	[SET_COUNT](store, {
		id,
		count
	}) {
		const index = store.items.findIndex(p => p.id === id);
		store.items.splice(index, 1, Object.assign({}, store.items[index], {
			count
		}))
	}
}