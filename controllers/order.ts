import { Request, Response } from "express";
import { IOrders } from "../interfaces/orders";
const service = require("../service/orders");
import { orderProductsSchema, orderSchema } from "../validation/orderSchema";
import { sendEmail } from "../service/sendGridMailer";

const postNewOrder = async (
  req: Request<{}, {}, IOrders>,
  res: Response
): Promise<void | Response<any, Record<string, any>>> => {
  if (Object.keys(req.body).length !== 0) {
    if (
      (await orderSchema
        .validate(req.body.shippingData)
        .then(() => true)
        .catch(() => false)) &&
      (await orderProductsSchema
        .validate(req.body.products)
        .then(() => true)
        .catch(() => false))
    ) {
      const result = await service.postNewOrder(req.body);
      if (result) {
        sendEmail(req.body);
        return res.status(200).json({ addedOrder: true });
      }
    }
    return res.status(200).json({ addedOrder: false });
  }
  res.status(404).json({ message: "Not found" });
};

module.exports = { postNewOrder };
