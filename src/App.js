import "./App.css";

import Header from './components/Header/Header'
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import Index from "./pages"
function App() {
	return (
		<div className="App">
		<Header />
      	<Index></Index>
    	<Footer />
		</div>
	);
}

export default App;
