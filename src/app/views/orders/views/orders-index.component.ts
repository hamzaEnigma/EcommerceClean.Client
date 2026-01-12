import { Component } from '@angular/core';
import { OrdersListComponent } from "./list-ordres/orders-list/orders-list.component";

@Component({
  selector: 'app-orders-index',
  imports: [OrdersListComponent],
  templateUrl: './orders-index.component.html',
  styleUrl: './orders-index.component.css'
})
export class OrdersIndexComponent {

}
