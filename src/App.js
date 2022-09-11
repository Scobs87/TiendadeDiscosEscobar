import "./App.css";
import Navbar from "./Components/Navbar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemListContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Catalogo" element={<ItemListContainer />} />
          <Route path="/Catalogo/:categoryId" element={<ItemListContainer />} />
          <Route path="/Item/:detalleId" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
