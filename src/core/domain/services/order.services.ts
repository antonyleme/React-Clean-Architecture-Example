import { Order } from "../entities/order";

export interface OrderServices {
  getFormattedPrice: (order: Order) => string;
  getFormattedDeliveryPrice: (order: Order) => string;
}

type BuildOrderServices = () => OrderServices;

export const buildOrderServices: BuildOrderServices = () => {
  const getFormattedPrice: OrderServices["getFormattedPrice"] = (order) => {
    return `R$` + order.price.toFixed(2).replace(".", ",");
  };

  const getFormattedDeliveryPrice: OrderServices["getFormattedDeliveryPrice"] =
    (order) => {
      if (!order.deliveryPrice) return "FREE";

      return `R$` + order.deliveryPrice.toFixed(2).replace(".", ",");
    };

  return {
    getFormattedPrice,
    getFormattedDeliveryPrice,
  };
};
