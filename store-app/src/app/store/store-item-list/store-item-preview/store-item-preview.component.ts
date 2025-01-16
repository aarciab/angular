import { Component, input, computed, output } from '@angular/core';
import { StoreItem } from '../../store.model';

@Component({
  selector: 'app-store-item-preview',
  imports: [],
  templateUrl: './store-item-preview.component.html',
  styleUrl: './store-item-preview.component.css',
})
export class StoreItemPreviewComponent {
  item = input.required<StoreItem>({
    alias: 'storeItem',
  });
  onItemSelected = output<StoreItem>();

  getPrice = computed(() => `$${this.item().price.toFixed(2)}`);

  itemOnClickHandler = () => {
    this.onItemSelected.emit(this.item());
  };
}
