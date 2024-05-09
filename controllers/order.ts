import { Request, Response } from "express";
import { IOrders } from "../interfaces/orders";
const service = require("../service/orders");

const postNewOrder = async (
  req: Request<{}, {}, IOrders>,
  res: Response
): Promise<void | Response<any, Record<string, any>>> => {
  if (Object.keys(req.body).length !== 0) {
      const result = await service.postNewOrder(req.body);
      if (result) {
            return res.status(200).json({ addedOrder: true });
      }
      return res.status(200).json({ addedOrder: false });
    }
     res.status(404).json({ message: "Not found" });
};

module.exports = { postNewOrder };