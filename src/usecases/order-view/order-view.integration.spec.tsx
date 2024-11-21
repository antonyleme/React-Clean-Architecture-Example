import { orderMock } from "@/core/domain/__mocks__/order.mock";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { OrderViewCard } from "./order-view.card";
import { OrderViewDependenciesProvider } from "./order-view.dependencies";

describe("OrderViewCard", () => {
  beforeEach(() => {
    const client = new QueryClient();

    render(
      <QueryClientProvider client={client}>
        <OrderViewDependenciesProvider
          value={{
            buildOrdersAdapters: () => ({
              get: () => Promise.resolve(orderMock),
            }),
          }}
        >
          <OrderViewCard id="1" />
        </OrderViewDependenciesProvider>
      </QueryClientProvider>
    );
  });

  it("Should show order name", async () => {
    expect(await screen.findByText(new RegExp(orderMock.name))).toBeVisible();
  });

  it("Should show order price", async () => {
    expect(await screen.findByText(/R\$20,40/)).toBeVisible();
  });

  it("Should show order delivery price", async () => {
    expect(await screen.findByText(/R\$10,00/)).toBeVisible();
  });

  it("Should open with image hidden", async () => {
    await waitFor(() => {
      const image = screen.queryByRole("img", {
        name: new RegExp(orderMock.name),
      });
      expect(image).not.toBeInTheDocument();
    });
  });

  it("Should show image when click toggle image", async () => {
    const button = await screen.findByText(/toggle image/i);
    await userEvent.click(button);

    expect(
      await screen.findByRole("img", { name: new RegExp(orderMock.name) })
    ).toBeVisible();
  });

  it("Should hide image when click toggle image twice", async () => {
    const button = await screen.findByText(/toggle image/i);
    await userEvent.click(button);
    await userEvent.click(button);

    await waitFor(() => {
      const image = screen.queryByRole("img", {
        name: new RegExp(orderMock.name),
      });
      expect(image).not.toBeInTheDocument();
    });
  });

  describe("Free delivery", () => {
    it("Should show FREE when delivery price is 0", async () => {
      const client = new QueryClient();

      render(
        <QueryClientProvider client={client}>
          <OrderViewDependenciesProvider
            value={{
              buildOrdersAdapters: () => ({
                get: () => Promise.resolve({ ...orderMock, deliveryPrice: 0 }),
              }),
            }}
          >
            <OrderViewCard id="1" />
          </OrderViewDependenciesProvider>
        </QueryClientProvider>
      );

      expect(await screen.findByText(/free/i)).toBeVisible();
    });
  });
});
