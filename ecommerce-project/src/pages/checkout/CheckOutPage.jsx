import React, { useEffect, useState } from "react";
import "./CheckOutPage.css";
import { CheckOutHeader } from "./CheckOutHeader";
import axios from "axios";
import { PaymentSummary } from "./PaymentSummary";
import { OrderSummary } from "./orderSummary";
export const CheckOutPage = ({ cart, loadCart }) => {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState([]);

  useEffect(() => {
    axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      .then((res) => {
        setDeliveryOptions(res.data);
      });

    axios.get("/api/payment-summary").then((res) => {
      setPaymentSummary(res.data);
    });
  }, [cart]);
  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href="/cart-favicon.png" />
      <CheckOutHeader />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            deliveryOptions={deliveryOptions}
            cart={cart}
            loadCart={loadCart}
          />

          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
};
