import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../interfaces/cart/cart.model';
import { CartItem } from '../interfaces/cart/cart-item.model';
import { Product } from '../interfaces/product/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartSubject.asObservable();

  constructor() {}

  addItemToCart(product: Product, quantity: number) {
    const cartItems = [...this.cartSubject.value];
    let newItem = this.createItem(product, quantity);
    cartItems.push(newItem);
    this.cartSubject.next(cartItems);
  }

  deletItem(index: number) {
    let itemsToUpdate = [...this.cartSubject.value]; // passage par reference aide angular a détecter le changement.
    itemsToUpdate.splice(index, 1);
    this.cartSubject.next(itemsToUpdate);
  }

  private createItem(product: Product, quantity: number): CartItem {
    return {
      productId: product.productId,
      name: product.name,
      quantity: quantity,
      unitPrice: product.sellPrice,
      total: quantity * (product?.sellPrice ?? 0),
    };
  }
}
