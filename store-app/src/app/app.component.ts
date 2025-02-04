import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CartItem } from './cart/cart.model';
import { OrderItem } from './order/order.model';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'store-app';
  cartItems = signal<CartItem[]>([]);
  orderItems = signal<OrderItem[]>([]);

  getCartTotalItems = computed(() => this.cartItems().length);

  onCheckoutHandler = (newOrder: OrderItem) => {
    this.orderItems.set([...this.orderItems(), newOrder]);
    this.cartItems.set([]);
  };

  onCartItemAddedHandler = (newItem: CartItem) => {
    const existingItem = this.cartItems().find(
      (item) => item.id === newItem.id
    );
    if (existingItem) {
      existingItem.quantity += newItem.quantity;
      existingItem.total += newItem.total;
      this.cartItems.set([...this.cartItems()]);
    } else {
      this.cartItems.set([...this.cartItems(), newItem]);
    }
  };

  onCartItemRemovedHandler = (id: number) => {
    const items = this.cartItems().filter((item) => id !== item.id);
    this.cartItems.set(items);
  };
}
