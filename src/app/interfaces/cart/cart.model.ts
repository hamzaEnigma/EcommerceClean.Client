import { CartItem } from "./cart-item.model";

export interface Cart {
    dateCart:Date;
    cartItems?: CartItem[];
    total:number;
}