import { Injectable } from '@angular/core';
import { CartItem } from './cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartItem[] = [];

  constructor() {}

  public async addItem(newItem: CartItem): Promise<void> {
    const existingItem = this.cartItems.find((item) => item.id === newItem.id);
    if (existingItem) {
      existingItem.quantity += newItem.quantity;
      existingItem.total += newItem.total;
      this.cartItems = [...this.cartItems];
    } else {
      this.cartItems = [...this.cartItems, newItem];
    }
  }

  public async removeItem(id: number): Promise<void> {
    const items = this.cartItems.filter((item) => id !== item.id);
    this.cartItems = items;
  }

  public async clearItems(): Promise<void> {
    this.cartItems = [];
  }
}
