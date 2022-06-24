import {useDispatch, useSelector} from "react-redux";
import {addToCart, clearCart, removeCart} from "../actions/shoppingActions";
import {products} from "../data/data";
import CardItemCart from "./CardItemCart";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
	const state = useSelector((state) => state);

	const {cart} = state;

	const dispatch = useDispatch();

	return (
		<div>
			<h2>Carrito de Compras</h2>
			<h3>Productos</h3>
			<article className="box grid-responsive">
				{products.map((product) => (
					<ProductItem
						key={product.id}
						product={product}
						addTocart={() => dispatch(addToCart(product.id))}
					/>
				))}
			</article>
			<h3>Carrito</h3>
			<article className="cart">
				<button style={{margin: "1rem"}} onClick={() => dispatch(clearCart())}>
					Limpiar Carrito
				</button>
				{cart.cart.map((item) => (
					<CardItemCart
						key={item.id}
						item={item}
						deleteOneFromCart={() => dispatch(removeCart(item.id))}
						deleteAllFromCart={() => dispatch(removeCart(item.id, true))}
					/>
				))}
			</article>
		</div>
	);
};

export default ShoppingCart;
