import { Component, OnInit, output } from '@angular/core';
import { StoreItemListComponent } from './store-item-list/store-item-list.component';
import { StoreItemComponent } from './store-item/store-item.component';
import { CartItem } from '../cart/cart.model';
import { select, Store } from '@ngrx/store';
import { getProducts } from './store/products.actions';
import { Observable } from 'rxjs';
import { isProductsLoading } from './store/products.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-store',
  imports: [StoreItemListComponent, StoreItemComponent, AsyncPipe],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export class StoreComponent implements OnInit {

  isLoading$: Observable<boolean>;
  selectedId: number | undefined = undefined;
  onCartItemAdded = output<CartItem>();

  constructor (private store: Store) {
    this.isLoading$ = this.store.pipe(select(isProductsLoading));
  }

  get getSelectedId(): number | undefined {
    return this.selectedId || undefined;
  }

  ngOnInit(): void {
    this.store.dispatch(getProducts())
  }

  onItemSelectedHandler = (id: number) => {
    this.selectedId = id;
  };

  onCartItemAddedHandler = (newItem: CartItem) => {
    this.onCartItemAdded.emit(newItem);
    this.selectedId = undefined;
  };
}
