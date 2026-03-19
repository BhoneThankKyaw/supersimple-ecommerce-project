import React, { useEffect, useState } from "react";
import "./TrackingPage.css";
import { Header } from "../Components/Header";
import { Link, useParams } from "react-router";
import axios from "axios";
import dayjs from "dayjs";

export const TrackingPage = ({ cart }) => {
  const [trackingOrder, setTrackingOrder] = useState(null);
  const { orderId, productId } = useParams();

  useEffect(() => {
    const getTackingOrder = async () => {
      const response = await axios.get(`api/orders/${orderId}?expand=products`);
      setTrackingOrder(response.data);
    };

    getTackingOrder();
  }, [orderId]);
  if (!trackingOrder) {
    return null;
  }
  console.log(trackingOrder);

  const orderProduct = trackingOrder.products.find((orderProduct) => {
    return orderProduct.productId === productId;
  });

  return (
    <>
      <title>Tracking</title>
      <link rel="icon" type="image/svg+xml" href="/tracking-favicon.png" />
      <Header cart={cart} />

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" href="/order">
            View all orders
          </Link>

          <div className="delivery-date">
            Arriving on{" "}
            {dayjs(orderProduct.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
          </div>

          <div className="product-info">{orderProduct.product.name}</div>

          <div className="product-info">Quantity: {orderProduct.quantity}</div>

          <img className="product-image" src={orderProduct.product.image} />

          <div className="progress-labels-container">
            <div className="progress-label">Preparing</div>
            <div className="progress-label current-status">Shipped</div>
            <div className="progress-label">Delivered</div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
};
