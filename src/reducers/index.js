import { combineReducers } from "redux";
import contadorReducer from './contadorReducer';
import { shoppingReducer } from './shoppingReducer';

// Combinar todos los reducers en uno solo
const reducer = combineReducers({
  contador: contadorReducer,
  cart: shoppingReducer
});

export default reducer;