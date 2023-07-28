import { Route, Routes } from "react-router-dom";
import Cart from "src/Components/Cart/Cart.js";
import ItemDetailContainer from "src/Components/ItemDetailContainer/ItemDetailContainer.js";
import ItemListContainer from "src/Components/ItemListContainer/ItemListContainer.js";
import CartState from "src/context/CartState.js";
import About from "src/pages/About/About.js";
import Checkout from "src/pages/Checkout/Checkout.js";
import Home from "src/pages/Home/Home.js";

function App() {
return (
    <>
    <div className="app-container">
        <CartState>
        <Cart />
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/shop" element={<ItemListContainer />} />

            <Route
            path="/shop/category/:category"
            element={<ItemListContainer />}
            />

            <Route path="/item/detail/:id" element={<ItemDetailContainer />} />

            <Route path="/checkout" element={<Checkout />} />

            <Route path="/about" element={<About />} />

            <Route
            path="*"
            element={<h1>Error 404 - Pagina no encontrada.</h1>}
            />
        </Routes>
        </CartState>
    </div>
    </>
);
}

export default App;