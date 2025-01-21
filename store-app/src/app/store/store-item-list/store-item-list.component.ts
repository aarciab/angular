import { Component, OnInit, output, signal } from '@angular/core';
import { StoreItemPreviewComponent } from './store-item-preview/store-item-preview.component';
import { StoreItemSearchComponent } from "./store-item-search/store-item-search.component";
import { STORE_ITEMS_SORTED, StoreItem } from '../store.model';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-item-list',
  imports: [StoreItemPreviewComponent, StoreItemSearchComponent],
  templateUrl: './store-item-list.component.html',
  styleUrl: './store-item-list.component.css',
})
export class StoreItemListComponent implements OnInit {
  
  constructor(private storeService: StoreService) {}

  storeItems = signal<StoreItem[]>([]);
  onItemSelected = output<number>();

  async ngOnInit(): Promise<void> {
    const items = await this.storeService.getItems();
    this.storeItems.set(items);
  }

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
