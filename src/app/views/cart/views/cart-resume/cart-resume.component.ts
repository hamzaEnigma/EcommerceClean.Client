import { Component, inject } from '@angular/core';
import { CartService } from '../../../../services/cart.service';
import { CartItem } from '../../../../interfaces/cart/cart-item.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-resume',
  imports: [FormsModule],
  templateUrl: './cart-resume.component.html',
  styleUrl: './cart-resume.component.css'
})
export class CartResumeComponent {
  cartService = inject(CartService);
  cartItems: CartItem[] | undefined = [] ;
  total: number | undefined;
  ngOnInit(){
    this.cartService.cartSubject.subscribe(data=>{
      this.cartItems = data.cartItems;
      this.total = data.total
    })
  }

  deleteItem(index:number){   
    this.cartService.deletItem(index);
  }

  updateQuantity(index:number,quantity:number){
    this.cartService.updateQuantity(index,quantity);
  }
}
