import {Provider} from "react-redux";
import "./App.css";
import Contador from "./components/Contador";
import ShoppingCart from './components/ShoppingCart';
import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					{/* <h1>React + Redux</h1> */}
					{/* <Contador /> */}
					<ShoppingCart />
				</header>
			</div>
		</Provider>
	);
}

export default App;
