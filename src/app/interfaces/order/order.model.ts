import { OrderDetail } from "./order-detail.model";

export interface Order {
  orderDate: Date;
  total?: number;
  orderDetails: OrderDetail[];
}