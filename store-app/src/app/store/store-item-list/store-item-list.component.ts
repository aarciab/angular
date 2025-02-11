import { Component, output } from '@angular/core';
import { StoreItemPreviewComponent } from './store-item-preview/store-item-preview.component';
import { StoreItemSearchComponent } from "./store-item-search/store-item-search.component";
import { StoreItem } from '../store.model';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProducts } from '../store/products.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-store-item-list',
  imports: [StoreItemPreviewComponent, StoreItemSearchComponent, AsyncPipe],
  templateUrl: './store-item-list.component.html',
  styleUrl: './store-item-list.component.css',
})
export class StoreItemListComponent {

  products$: Observable<StoreItem[]>;

  constructor(private store: Store) {
    this.products$ = this.store.pipe(select(getProducts));
  }

  onItemSelected = output<number>();


  onFilterChangeHandler = (filterTerm: string) => {
    // if (filterTerm) {
    //   const term = filterTerm.toLowerCase();
    //   const filteredItems = this.storeItems().filter((item) =>
    //     item.name.toLowerCase().includes(term)
    //   );
    //   this.storeItems.set(filteredItems);
    // } else {
    //   this.storeItems.set(STORE_ITEMS_SORTED);
    // }
  };
}
