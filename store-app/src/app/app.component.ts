import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from "./cart/cart.component";
import { OrderComponent } from "./order/order.component";
import { CartItem } from './cart/cart.model';
import { ORDER_ITEMS, OrderItem } from './order/order.model';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, StoreComponent, CartComponent, OrderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'store-app';
  cartItems = signal<CartItem[]>([]);
  orderItems = signal<OrderItem[]>(ORDER_ITEMS);

  getCartTotalItems = computed(() => this.cartItems().length);

  onOrderItemAdded = (newOrder: OrderItem) => {
    this.orderItems.set([...this.orderItems(), newOrder]);
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
}
