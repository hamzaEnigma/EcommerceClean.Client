import { Component } from '@angular/core';
import { ListProductsComponent } from "../list-products/list-products.component";
import { CartResumeComponent } from "../../../cart/views/cart-resume/cart-resume.component";

@Component({
  selector: 'app-product-index',
  imports: [ListProductsComponent, CartResumeComponent],
  templateUrl: './product-index.component.html',
  styleUrl: './product-index.component.css'
})
export class ProductIndexComponent {

}
