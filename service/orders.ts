import { Document } from "mongoose";
import { IOrders } from "../interfaces/orders";
import { Orders } from "./schemas/orders";

const postNewOrder = async (
  order: IOrders
): Promise<
  Document<
    unknown,
    {},
    {
      [x: string]: any;
    }
  > & {
    [x: string]: any;
  } & Required<{
      _id: unknown;
    }>
> => Orders.create(order);

module.exports = { postNewOrder };