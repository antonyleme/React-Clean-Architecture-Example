import { HttpClient } from "../../data/interfaces/http-client.interface";
import { axiosClient } from "../../infra";
import { GetOrder } from "../contracts/order.contracts";

export interface OrderAdapters {
  get: GetOrder;
}

export type BuildOrdersAdapters = (http?: HttpClient) => OrderAdapters;

export const buildOrdersAdapters: BuildOrdersAdapters = (
  http = axiosClient()
) => {
  const get: OrderAdapters["get"] = async ({ id }) => {
    return (await http.get({ url: `/api/orders/${id}` })).data;
  };

  return {
    get,
  };
};
