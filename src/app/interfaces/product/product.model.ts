export interface Product {
  ProductId: string;
  name: string;
  description?: string;
  purchasePrice?: number;
  sellPrice?: number;
  categoryId?: string;
  unitsInStock?: number;
  stockLimit?: number;
}

export interface Category {
  CategoryId: string;
  name: string;
  description?: string;
}
