import {products} from "../data/data";
import {
	ADD_TO_CART,
	CLEAR_CART,
	REMOVE_ALL_FROM_CART,
	REMOVE_ONE_FROM_CART,
} from "../types";

products;

// Estado Inicial
const initialState = {
	cart: [],
};

export const shoppingReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART: {
			// Busco ese producto en los productos y lo guardo en una variable
			let newItem = products.find((item) => item.id === action.payload);
			// Valido si esta en el carrito
			let itemInCartValidate = state.cart.find(
				(item) => item.id === newItem.id
			);

			return itemInCartValidate
				? {
						...state,
						cart: state.cart.map((item) =>
							item.id === newItem.id
								? {...item, cantidad: item.cantidad + 1}
								: item
						),
				  }
				: {
						...state,
						cart: [...state.cart, {...newItem, cantidad: 1}],
				  };
		}

		case REMOVE_ONE_FROM_CART: {
      let deleteItem = state.cart.find((item) => item.id === action.payload);
			return deleteItem.cantidad === 1
				? {
						...state,
						cart: state.cart.filter((item) => item.id !== action.payload),
				  }
				: {
						...state,
						cart: state.cart.map((item) =>
							item.id === action.payload
								? {...item, cantidad: item.cantidad - 1}
								: item
						),
				  };
		}

		case REMOVE_ALL_FROM_CART: {
      return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload),
			};
		}

		case CLEAR_CART: {
			return initialState;
		}

		default:
			return state;
	}
};
