import { Component, inject } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../interfaces/product/product.model';
import { CartService } from '../../../../services/cart.service';
import { CartItem } from '../../../../interfaces/cart/cart-item.model';

@Component({
  selector: 'app-list-products',
  imports: [],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
})
export class ListProductsComponent {
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  products: Product[] = [];

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    console.log('getting products ...');
    this.productService.getAll().subscribe((data) => {
      if (data) {
        this.products = data;
      }
    });
  }

  addProductToChart(item: Product) {
    this.cartService.addItemToCart(item, 1);
  }
}
