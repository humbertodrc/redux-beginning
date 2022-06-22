import {Provider} from "react-redux";
import "./App.css";
import Contador from './components/Contador';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
        <h1>React + Redux</h1>
        <hr />
        <Contador />
			</div>
		</Provider>
	);
}

export default App;
