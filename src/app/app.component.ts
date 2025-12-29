import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddProductComponent } from "./views/products/views/add-product/add-product/add-product.component";
import { ListProductsComponent } from "./views/products/views/list-products/list-products.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddProductComponent, ListProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ecommerce.CLient';
}
