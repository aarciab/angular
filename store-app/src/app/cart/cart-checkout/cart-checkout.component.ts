import { Component, input, computed } from '@angular/core';
import { CartItem } from '../cart.model';

@Component({
  selector: 'app-cart-checkout',
  imports: [],
  templateUrl: './cart-checkout.component.html',
  styleUrl: './cart-checkout.component.css',
})
export class CartCheckoutComponent {
  cartItems = input<CartItem[]>([]);

  getTotalItems = computed(() => this.cartItems().length);
  getSubTotal = computed(() => `$${this.calculateSubTotal().toFixed(2)}`);
  getShippingCost = computed(() => `$${this.calculateShippingCost().toFixed(2)}`);
  getTotal = computed(() => `$${(this.calculateSubTotal() + this.calculateShippingCost()).toFixed(2)}`);

  calculateShippingCost = () => {
    if (this.getTotalItems() === 0) {
      return 0;
    } else if (this.getTotalItems() > 0 && this.getTotalItems() <= 3) {
      return 5;
    } else if (this.getTotalItems() > 3 && this.getTotalItems() <= 5) {
      return 10;
    } else {
      return 20;
    }
  };

  calculateSubTotal = () => this.cartItems().reduce((acc, item) => acc + item.total, 0);
}

