import { Order } from "../entities/order";

export type GetOrderReturn = Promise<Order>;
export type GetOrderParams = {
  id: string;
};
export type GetOrder = (params: GetOrderParams) => GetOrderReturn;
