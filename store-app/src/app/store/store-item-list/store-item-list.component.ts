import { Component, output, signal } from '@angular/core';
import { StoreItemPreviewComponent } from './store-item-preview/store-item-preview.component';
import { StoreItemSearchComponent } from "./store-item-search/store-item-search.component";
import { STORE_ITEMS_SORTED, StoreItem } from '../store.model';

@Component({
  selector: 'app-store-item-list',
  imports: [StoreItemPreviewComponent, StoreItemSearchComponent],
  templateUrl: './store-item-list.component.html',
  styleUrl: './store-item-list.component.css',
})
export class StoreItemListComponent {
  storeItems = signal(STORE_ITEMS_SORTED);
  onItemSelected = output<StoreItem>();

  onFilterChangeHandler = (filterTerm: string) => {
    console.log('Performing filter for:', filterTerm);
    if (filterTerm) {
      const term = filterTerm.toLowerCase();
      const filteredItems = this.storeItems().filter((item) =>
        item.name.toLowerCase().includes(term)
      );
      this.storeItems.set(filteredItems);
    } else {
      this.storeItems.set(STORE_ITEMS_SORTED);
    }
  };
}
