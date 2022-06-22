import { combineReducers } from "redux";
import contadorReducer from './contadorReducer';

// Combinar todos los reducers en uno solo
const reducer = combineReducers({
  contador: contadorReducer
});

export default reducer;