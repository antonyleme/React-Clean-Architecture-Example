import { buildOrdersAdapters } from "@/core/domain/adapters/order.adapters";
import { createGenericContext } from "@/utils/create-generic-context.util";

export const orderViewDependencies = {
  buildOrdersAdapters,
};

const {
  Provider: OrderViewDependenciesProvider,
  useGenericContext: useOrderViewDependenciesContext,
} = createGenericContext<typeof orderViewDependencies>(orderViewDependencies);

export { OrderViewDependenciesProvider, useOrderViewDependenciesContext };
