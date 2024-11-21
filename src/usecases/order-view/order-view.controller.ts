import {
  buildOrderServices,
  OrderServices,
} from "@/core/domain/services/order.services";
import {
  useGetOrder,
  UseGetOrderReturn,
} from "@/repositories/order/get.repository";
import { useState } from "react";
import { OrderViewCardProps } from "./order-view.card";
import { useOrderViewDependenciesContext } from "./order-view.dependencies";

interface OrderViewControllerReturn {
  order: UseGetOrderReturn;
  services: OrderServices;
  handleToggleImage: () => void;
  canShowImage: boolean;
}

type OrderViewControllerParams = OrderViewCardProps;

type OrderViewUseCase = (
  params: OrderViewControllerParams
) => OrderViewControllerReturn;

export const useOrderViewController: OrderViewUseCase = ({ id }) => {
  const { buildOrdersAdapters } = useOrderViewDependenciesContext();

  const order = useGetOrder({ adapters: buildOrdersAdapters(), id });

  const [canShowImage, setCanShowImage] = useState(false);

  const handleToggleImage = () => {
    setCanShowImage(!canShowImage);
  };

  return {
    order,
    handleToggleImage,
    services: buildOrderServices(),
    canShowImage,
  };
};
