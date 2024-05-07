import { IOrders } from "../interfaces/orders";
import { Orders } from "./schemas/orders";

const postNewOrder = async (order: IOrders): Promise<void> =>
  Orders.create(order).then();