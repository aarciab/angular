import { Component, computed, input, signal } from '@angular/core';
import { CartItem } from '../../cart.model';

@Component({
  selector: 'app-cart-item-preview',
  imports: [],
  templateUrl: './cart-item-preview.component.html',
  styleUrl: './cart-item-preview.component.css',
})
export class CartItemPreviewComponent {
  cartItem = input.required<CartItem>();

  getQuantity = computed(() =>`Quantity: ${this.cartItem().quantity}`);
  getPrice = computed(
    () =>
      `$${
        this.cartItem() && this.cartItem()?.item && this.cartItem()?.item?.price
          ? this.cartItem()?.item.price.toFixed(2)
          : ' -- '
      }`
  );

  getTotalPrice = computed(
    () =>
      `$${
        this.cartItem()?.quantity &&
        this.cartItem()?.item &&
        this.cartItem()?.item.price
          ? `${(
              this.cartItem()?.item?.price * this.cartItem()?.quantity
            ).toFixed(2)}`
          : ' -- '
      }`
  );
}
