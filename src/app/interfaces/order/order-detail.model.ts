import { Product } from "../product/product.model";

export interface OrderDetail{
  productId: string;
  quantity: number;
  salePrice: number;
  product:Product;
}