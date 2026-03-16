import { Routes, Route } from "react-router";
import "./App.css";
import { HomePages } from "./pages/home/HomePages";
import { CheckOutPage } from "./pages/checkout/CheckOutPage";
import { Orders } from "./pages/order/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { PageNotFound } from "./pages/PageNotFound";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const res = await axios.get(
      "http://localhost:3000/api/cart-items?expand=product",
    );
    setCart(res.data);
  };
  useEffect(() => {
    loadCart();
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePages cart={cart} loadCart={loadCart} />}
        ></Route>
        <Route path="/checkout" element={<CheckOutPage cart={cart} />}></Route>
        <Route path="/order" element={<Orders cart={cart} />}></Route>
        <Route path="/tracking" element={<TrackingPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
