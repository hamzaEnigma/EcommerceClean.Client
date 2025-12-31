import { Category } from "./category.model";
export interface Product {
  productId: string;
  name: string;
  description?: string;
  purchasePrice?: number;
  sellPrice?: number;
  categoryId?: string;
  category:Category;
  unitsInStock?: number;
  stockLimit?: number;
}