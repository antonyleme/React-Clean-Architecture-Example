import { OrderAdapters } from "@/core/domain/adapters/order.adapters";
import { GetOrderParams } from "@/core/domain/contracts/order.contracts";
import { Order } from "@/core/domain/entities/order";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

interface UseGetOrderParams extends GetOrderParams {
  adapters: OrderAdapters;
}

export type UseGetOrderReturn = UseQueryResult<Order, Error>;

type UseGetOrder = (params: UseGetOrderParams) => UseGetOrderReturn;

export const useGetOrder: UseGetOrder = ({ adapters, ...params }) => {
  const query = useQuery({
    queryFn: () => adapters.get(params),
    queryKey: [params.id],
  });

  return query;
};
