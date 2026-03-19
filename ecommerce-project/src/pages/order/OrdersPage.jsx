import "./OrderPage.css";
import { Header } from "../../Components/Header";

import { OrderGrid } from "./OrderGrid";
export const Orders = ({ cart }) => {
  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="image/svg+xml" href="/orders-favicon.png" />
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrderGrid />
      </div>
    </>
  );
};
