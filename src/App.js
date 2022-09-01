import "./App.css";
import Navbar from "./Components/Navbar/NavBar";
import ItemCount from "./Components/itemsListContainer/ItemCount";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div>
        <ItemCount />
      </div>
    </div>
  );
}

export default App;
