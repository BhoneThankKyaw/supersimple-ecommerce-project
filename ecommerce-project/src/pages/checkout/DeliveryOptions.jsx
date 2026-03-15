import React from "react";
import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";

export const DeliveryOptions = ({ deliveryOptions, cartItem }) => {
  return (
    <>
      {deliveryOptions.map((deliOption) => {
        let priceString = "Free Shipping";
        if (deliOption.priceCents > 0) {
          priceString = formatMoney(deliOption.priceCents);
        }
        return (
          <div key={deliOption.id} className="delivery-option">
            <input
              type="radio"
              checked={deliOption.id === cartItem.deliveryOptionId}
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
