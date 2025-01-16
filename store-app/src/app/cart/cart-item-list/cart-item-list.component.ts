import { Component, input } from '@angular/core';
import { CartItemPreviewComponent } from "./cart-item-preview/cart-item-preview.component";
import { CartItem } from '../cart.model';

@Component({
  selector: 'app-cart-item-list',
  imports: [CartItemPreviewComponent],
  templateUrl: './cart-item-list.component.html',
  styleUrl: './cart-item-list.component.css'
})
export class CartItemListComponent {

  cartItems = input<CartItem[]>([]);

}
