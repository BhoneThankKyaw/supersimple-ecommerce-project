import { Routes, Route } from "react-router";
import "./App.css";
import { HomePages } from "./pages/HomePages";
import { CheckOutPage } from "./pages/checkout/CheckOutPage";
import { Orders } from "./pages/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages />}></Route>
        <Route path="/checkout" element={<CheckOutPage />}></Route>
        <Route path="/order" element={<Orders />}></Route>
        <Route path="/tracking" element={<TrackingPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
