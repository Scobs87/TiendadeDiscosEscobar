import "./App.css";
import Navbar from "./Components/Navbar/NavBar";
import ItemCount from "./Components/ItemsListContainer/ItemCount";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div>
        <ItemCount stock={8} initial={1} />
      </div>
    </div>
  );
}

export default App;
