import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../interfaces/cart/cart.model';
import { CartItem } from '../interfaces/cart/cart-item.model';
import { Product } from '../interfaces/product/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartSubject = new BehaviorSubject<Cart>(this.createEmptyCart());
  cartItems$ = this.cartSubject.asObservable();

  constructor() {}

  addItemToCart(product: Product, quantity: number) {
    const cart = this.getCurrentCart();
    let newItem = this.createItem(product, quantity);
    let index = this.findInCart(product.productId, cart.cartItems);

    if (index !== -1 && cart.cartItems) {     // updating only quantity if the same product is aded
      cart.cartItems[index].quantity! += quantity;
    } else {                                   // add product normally
      cart.cartItems?.push(newItem);
    }

    cart.total = this.calculateTotal(cart.cartItems ?? []);
    this.cartSubject.next(cart);
  }

  deletItem(index: number) {
    const cart = this.getCurrentCart();
    let itemsToUpdate = [...(cart.cartItems ?? [])];
    itemsToUpdate?.splice(index, 1);
    cart.cartItems = itemsToUpdate;
    cart.total = this.calculateTotal(cart.cartItems ?? []);
    this.cartSubject.next(cart);
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

  private getCurrentCart(): Cart {
    return this.cartSubject.value;
  }

  updateQuantity(index: number, quantity: number) {
    const cart = this.getCurrentCart();
    // updating ...
    let itemsToUpdate = [...(cart.cartItems ?? [])];
    let item = itemsToUpdate[index];
    item.quantity = quantity ?? 1;
    item.total = quantity * (item.unitPrice ?? 0);
    itemsToUpdate[index] = item;
    // persinsting
    cart.cartItems = itemsToUpdate;
    cart.total = this.calculateTotal(itemsToUpdate);
    this.cartSubject.next(cart);
  }

  private createEmptyCart(): Cart {
    return {
      dateCart: new Date(),
      cartItems: [],
      total: 0,
    };
  }

  private calculateTotal(itemsToUpdate: CartItem[]) {
    const total = itemsToUpdate.reduce(
      (sumTotal, item) =>
        (sumTotal += (item?.unitPrice ?? 0) * (item.quantity ?? 1)),
      0
    );
    return total;
  }

  private findInCart(id: string, cartItems?: CartItem[]): number {
    if (cartItems) return cartItems.findIndex((x) => x.productId == id);
    return -1;
  }

}
