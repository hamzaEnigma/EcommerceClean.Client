import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { OrderService } from '../../../../../services/order.service';
import { tap } from 'rxjs';
import { Order } from '../../../../../interfaces/order/order.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders-list',
  imports: [CommonModule],
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.css'
})
export class OrdersListComponent {
  orderService = inject(OrderService)
  orders:Order[]= [];


  constructor(private http: HttpClient){}

  ngOnInit(){
    this.orderService.GetAllOrders().pipe(tap(x=>this.orders = x)).subscribe();
  }

  get GetOrders(){
    return this.orderService.GetAllOrders();
  }
}
