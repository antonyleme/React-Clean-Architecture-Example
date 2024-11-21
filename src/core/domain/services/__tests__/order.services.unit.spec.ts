import { orderMock } from "../../__mocks__/order.mock";
import { buildOrderServices } from "../order.services";

const { getFormattedDeliveryPrice, getFormattedPrice } = buildOrderServices();

describe("Order services", () => {
  describe("getFormattedPrice", () => {
    it("Should return formatted price in BRL", () => {
      expect(getFormattedPrice(orderMock)).toEqual("R$20,40");
    });
  });

  describe("getFormattedDeliveryPrice", () => {
    it("Should return formatted price in BRL", () => {
      expect(getFormattedDeliveryPrice(orderMock)).toEqual("R$10,00");
    });
    it("Should return FREE when delivery price is 0", () => {
      expect(
        getFormattedDeliveryPrice({ ...orderMock, deliveryPrice: 0 })
      ).toEqual("FREE");
    });
  });
});
