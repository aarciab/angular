import { Component, input, computed, output } from '@angular/core';
import { CartItem } from '../cart.model';
import { OrderItem } from '../../order/order.model';

@Component({
  selector: 'app-cart-checkout',
  imports: [],
  templateUrl: './cart-checkout.component.html',
  styleUrl: './cart-checkout.component.css',
})
export class CartCheckoutComponent {
  cartItems = input<CartItem[]>([]);
  onCheckout = output<OrderItem>();

  getTotalItems = computed(() => this.cartItems().length);
  getSubTotalLabel = computed(() => `$${this.getSubTotalCost().toFixed(2)}`);
  getSubTotalCost = computed(() => this.calculateSubTotal());
  getShippingLabel = computed(() => `$${this.getShippingCost().toFixed(2)}`);
  getShippingCost = computed(() => this.calculateShippingCost());
  getTotalLabel = computed(() => `$${this.getTotalCost().toFixed(2)}`);
  getTotalCost = computed(() => this.getSubTotalCost() + this.getShippingCost());

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

  calculateSubTotal = () =>
    this.cartItems().reduce((acc, item) => acc + item.total, 0);

  onCheckoutHandler = () => {
    this.onCheckout.emit({
      date: new Date(),
      id: new Date().toISOString(),
      invoice: new Date().toISOString(),
      items: this.cartItems(),
      shipping: this.getShippingCost(),
      subTotal: this.getSubTotalCost(),
      total: this.getTotalCost(),
    });
  };
}

