import { Routes, Route } from "react-router";
import "./App.css";
import { HomePages } from "./pages/HomePages";
import { CheckOutPage } from "./pages/CheckOutPage";
import { Orders } from "./pages/OrdersPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages />}></Route>
        <Route path="/checkout" element={<CheckOutPage />}></Route>
        <Route path="/order" element={<Orders />}></Route>
      </Routes>
    </>
  );
}

export default App;
