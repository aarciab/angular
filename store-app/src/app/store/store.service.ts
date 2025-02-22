import { Injectable } from '@angular/core';
import { STORE_ITEMS_SORTED, StoreItem } from './store.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  public async getItems(): Promise<StoreItem[]> {
    return new Promise((resolve) =>
      setTimeout(() => resolve(STORE_ITEMS_SORTED), 3000)
    );
  }

  public async getItemById(id: number): Promise<StoreItem | undefined> {
    return STORE_ITEMS_SORTED.find((item) => item.id === id);
  }
}
