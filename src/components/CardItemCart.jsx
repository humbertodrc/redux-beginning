import React from "react";

const CardItemCart = ({ item, deleteOneFromCart, deleteAllFromCart }) => {
	
	const {id, name, price, cantidad} = item;

	return (
		<div className="item">
			<h4>{name}</h4>
			<p>Precio:
				${price},<small>00</small>
			</p>
			<p>Cantidad: {cantidad}</p>
			<p style={{fontWeight:"bold"}}>Total: ${cantidad * price},<small>00</small></p>
			<div className="box-buttons">
				<button onClick={() => deleteOneFromCart(id)}>Eliminar Uno</button>
				<button onClick={() => deleteAllFromCart(id, true)}>Eliminar Todo</button>
			</div>
		</div>
	);
};

export default CardItemCart;
