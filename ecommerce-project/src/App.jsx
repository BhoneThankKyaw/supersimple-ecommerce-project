import { Routes, Route } from "react-router";
import "./App.css";
import { HomePages } from "./pages/HomePages";
import { CheckOutPage } from "./pages/checkout/CheckOutPage";
import { Orders } from "./pages/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { PageNotFound } from "./pages/PageNotFound";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/cart-items?expand=product")
      .then((res) => {
        setCart(res.data);
      });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages cart={cart} />}></Route>
        <Route path="/checkout" element={<CheckOutPage cart={cart} />}></Route>
        <Route path="/order" element={<Orders cart={cart} />}></Route>
        <Route path="/tracking" element={<TrackingPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
