import { Component, output } from '@angular/core';
import { StoreItemListComponent } from './store-item-list/store-item-list.component';
import { StoreItemComponent } from './store-item/store-item.component';
import { StoreItem } from './store.model';
import { CartItem } from '../cart/cart.model';

@Component({
  selector: 'app-store',
  imports: [StoreItemListComponent, StoreItemComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export class StoreComponent {
  
  selectedItem: StoreItem | undefined = undefined;
  onCartItemAdded = output<CartItem>();

  get getSelectedItem() {
    return this.selectedItem || undefined;
  }

  onItemSelectedHandler = (item: StoreItem) => {
    this.selectedItem = item;
  };

  onCartItemAddedHandler = (newItem: CartItem) => {
    this.onCartItemAdded.emit(newItem);
    this.selectedItem = undefined;
  };
}
