import { HttpClient } from "@/core/data/interfaces/http-client.interface";
import { orderMock } from "@/core/domain/__mocks__/order.mock";
import { buildOrdersAdapters } from "../order.adapters";

const httpClient: HttpClient = {
  delete: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  patch: jest.fn(),
  get: jest.fn(() => Promise.resolve({ statusCode: 200, data: orderMock })),
};
const adapter = buildOrdersAdapters(httpClient);

describe("Order Adapter", () => {
  it("Should call correct endpoint", async () => {
    const orderId = "1";
    await adapter.get({ id: orderId });

    expect(httpClient.get).toHaveBeenCalledWith({
      url: `/api/orders/${orderId}`,
    });
  });

  it("Should return correct data", async () => {
    const orderId = "1";
    const expectedResponse = orderMock;

    const result = await adapter.get({ id: orderId });

    expect(result).toEqual(expectedResponse);
  });
});
