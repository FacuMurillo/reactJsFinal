import NavBar from "./components/NavBar/NavBar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemList/ItemDetailContainer.jsx";
import ItemListContainer from "./components/ItemList/ItemListContainer.jsx";
import Checkout from "./components/CheckOut/CheckOut.jsx";
import { CartProvider } from './components/Cart/CartContext.jsx';

function App() {
    return (
        <CartProvider>
            <div className="App">
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer mensaje="Buenos días, ¿qué quieres comprar hoy?" />} />
                        <Route path="/category/:id" element={<ItemListContainer mensaje="Aquí están los productos de la categoría seleccionada" />} />
                        <Route path="/category/:category/id/:id" element={<ItemDetailContainer />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
                    </Routes>
                </BrowserRouter>
            </div>
        </CartProvider>
    );
}

export default App;
