import { Component, input } from '@angular/core';
import { CartItemListComponent } from "./cart-item-list/cart-item-list.component";
import { CartCheckoutComponent } from "./cart-checkout/cart-checkout.component";
import { CartItem } from './cart.model';

@Component({
  selector: 'app-cart',
  imports: [CartItemListComponent, CartCheckoutComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartItems = input<CartItem[]>([]);

}