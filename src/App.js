import "./App.css";
import Navbar from "./Components/Navbar/NavBar";
import ItemListContainer from "./Components/ItemsListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div>
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
