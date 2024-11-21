"use client";
import React from "react";
import { useOrderViewController } from "./order-view.controller";

export interface OrderViewCardProps {
  id: string;
}

export const OrderViewCard: React.FC<OrderViewCardProps> = function (props) {
  const { order, services, handleToggleImage, canShowImage } =
    useOrderViewController(props);

  if (!order.data) return <p>Loading</p>;

  return (
    <div>
      <h1>{order.data.name}</h1>
      <h2>{services.getFormattedPrice(order.data)}</h2>
      <p>Delivery: {services.getFormattedDeliveryPrice(order.data)}</p>

      <button onClick={handleToggleImage}>Toggle image</button>

      {canShowImage ? (
        <div>
          <img src={order.data.img} alt={order.data.name} />
        </div>
      ) : null}
    </div>
  );
};
