import React from "react";
import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";
import axios from "axios";

export const DeliveryOptions = ({ deliveryOptions, cartItem, loadCart }) => {
  return (
    <>
      {deliveryOptions.map((deliOption) => {
        console.log(deliOption.estimatedDeliveryTimeMs);
        console.log(
          dayjs(deliOption.estimatedDeliveryTimeMs).format("dddd MMMM D"),
        );
        let priceString = "Free Shipping";
        if (deliOption.priceCents > 0) {
          priceString = formatMoney(deliOption.priceCents);
        }

        const updateDeliOption = async () => {
          await axios.put(`/api/cart-items/${cartItem.productId}`, {
            deliveryOptionId: deliOption.id,
          });
          await loadCart();
        };

        return (
          <div
            key={deliOption.id}
            onClick={updateDeliOption}
            className="delivery-option"
          >
            <input
              type="radio"
              checked={deliOption.id === cartItem.deliveryOptionId}
              onChange={() => {}}
              className="delivery-option-input"
              name={`delivery-option-${deliOption.id}`}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM D",
                )}
              </div>
              <div className="delivery-option-price">{priceString}</div>
            </div>
          </div>
        );
      })}{" "}
    </>
  );
};
