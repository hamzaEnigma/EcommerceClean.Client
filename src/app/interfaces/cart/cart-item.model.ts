export interface CartItem {
  productId: string;
  name?: string;
  unitPrice?:number;
  quantity?:number;
  total?:number;
}