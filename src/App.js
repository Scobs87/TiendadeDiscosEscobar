import "./App.css";
import Navbar from "./Components/Navbar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemListContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Navbar/Login/Login";
import CartProvider from "./Components/Context/CartContext";
import CartContainer from "./Components/Navbar/CartContainer/CartContainer";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Catalogo" element={<ItemListContainer />} />
            <Route
              path="/Catalogo/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/Item/:detalleId" element={<ItemDetailContainer />} />
            <Route path="/Cart" element={<CartContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
