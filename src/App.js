import "./App.css";
import Navbar from "./Components/Navbar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemListContainer/ItemDetailContainer";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div>
        <ItemListContainer />
      </div>
      <div>
        <ItemDetailContainer />
      </div>
    </div>
  );
}

export default App;
