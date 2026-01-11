import { OrderDetail } from "./order-detail.model";

export interface Order {
  orderId?: string;
  orderDate: Date;
  total?: number;
  customer?:string;
  orderDetails: OrderDetail[];
}