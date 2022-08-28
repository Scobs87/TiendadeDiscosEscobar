import "./App.css";
import ItemListContainer from "./Components/Items List Container/ItemListContainer";
import Navbar from "./Components/Navbar/NavBar";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div>
        <ItemListContainer greeting="Hola!" />
      </div>
    </div>
  );
}

export default App;
