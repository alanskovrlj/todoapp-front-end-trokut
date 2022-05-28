import "./App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Index from "./pages";

export const BACKEND_PATH = "https://todolisttrokut.herokuapp.com";

function App() {
  return (
    <div className='App'>
      <Header />
      <Index></Index>
      <Footer />
    </div>
  );
}

export default App;
