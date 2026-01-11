import { Routes } from '@angular/router';
import { ListProductsComponent } from './views/products/views/list-products/list-products.component';
import { OrdersListComponent } from './views/orders/views/list-ordres/orders-list/orders-list.component';
import { ProductIndexComponent } from './views/products/views/product-index/product-index.component';

export const routes: Routes = [
      {path: '', component: ProductIndexComponent},
      {path: 'orders', component: OrdersListComponent},
];
