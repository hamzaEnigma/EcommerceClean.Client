import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cart } from '../interfaces/cart/cart.model';
import { OrderDetail } from '../interfaces/order/order-detail.model';
import { Order } from '../interfaces/order/order.model';
import { CartService } from './cart.service';
import { OrderApiService } from './order-api.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'https://localhost:7126/api/Orders';
  cartService = inject(CartService);
  orderApi = inject(OrderApiService);
  constructor(private http: HttpClient) {}

  public CreateOrder() {
    let cart = this.cartService.getCurrentCart();
    let order: Order = {
      orderDate : new Date(),
      orderDetails : this.mapCartItems(cart)
    }
    return this.orderApi.CreateOrder(order);
  }

  private mapCartItems(cart: Cart): OrderDetail[] {
    const value =  cart.cartItems?.map(item => ({
      productId: item.productId!,
      quantity: item.quantity ?? 1,
    })) as OrderDetail[];
    return value;
  }

  public GetAllOrders(){
    return this.orderApi.GetAll();
  }
}
