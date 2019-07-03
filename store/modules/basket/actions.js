import {
	SET_COUNT,
	ADD_PRODUCT,
	DELETE_PRODUCT
	} from "./mutation-types";

export default {

	addToBasket({
		commit
	}, {
		id,
		title,
		price,
	}) {
	commit(ADD_PRODUCT, {
			id,
			title,
			price,
			count: 1
		})
	},
	
	DecreaseCount({
		commit,
		state
	}, id) {
		const index = state.items.findIndex(p => p.id === id);
		if (state.items[index].count !== 1) {
		commit(SET_COUNT, {
			id,
			count: state.items[index].count - 1
		})
	}},

	IncreaseCount({
		commit,
		state
	}, id) {
		const index = state.items.findIndex(p => p.id === id);
		commit(SET_COUNT, {
		id,
		count: state.items[index].count + 1,
	})},

	removeItem({
		commit
	}, id) {
		commit(DELETE_PRODUCT, id);
	},
}