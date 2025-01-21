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
  selectedId: number | undefined = undefined;
  onCartItemAdded = output<CartItem>();

  get getSelectedId(): number | undefined {
    return this.selectedId || undefined;
  }

  onItemSelectedHandler = (id: number) => {
    this.selectedId = id;
  };

  onCartItemAddedHandler = (newItem: CartItem) => {
    this.onCartItemAdded.emit(newItem);
    this.selectedId = undefined;
  };
}
