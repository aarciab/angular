import { Component, input, output, computed, signal } from '@angular/core';
import { StoreItem } from '../store.model';
import { CartItem } from '../../cart/cart.model';

@Component({
  selector: 'app-store-item',
  imports: [],
  templateUrl: './store-item.component.html',
  styleUrl: './store-item.component.css',
})
export class StoreItemComponent {
  item = input.required<StoreItem>();
  onCartItemAdded = output<CartItem>();

  quantity = signal(0);

  getPrice = computed(() => `$${this.item().price.toFixed(2)}`);
  getTotalPrice = computed(() => `$${(this.item().price * this.quantity()).toFixed(2)}`);
  isAddToCartDisabled = computed(() => this.quantity() === 0);

  onAddQuantityHandler = () => {
    this.quantity.set(this.quantity() + 1);
  };

  onSubtractQuantityHandler = () => {
    if (this.quantity() !== 0) {
      this.quantity.set(this.quantity() - 1);
    }
  };

  onAddToCartClick = () => {
    this.onCartItemAdded.emit({
      id: this.item().id,
      item: this.item(),
      quantity: this.quantity(),
      total: this.item().price * this.quantity(),
    });

    this.quantity.set(0);
  }
}
