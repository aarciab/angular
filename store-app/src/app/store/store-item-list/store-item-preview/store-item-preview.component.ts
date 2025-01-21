import { Component, input, computed, output } from '@angular/core';
import { StoreItem } from '../../store.model';
import { FirstLetterCasePipePipe } from '../../../common/first-letter-case-pipe.pipe';

@Component({
  selector: 'app-store-item-preview',
  imports: [FirstLetterCasePipePipe],
  templateUrl: './store-item-preview.component.html',
  styleUrl: './store-item-preview.component.css',
})
export class StoreItemPreviewComponent {
  item = input.required<StoreItem>({
    alias: 'storeItem',
  });
  onItemSelected = output<number>();

  getPrice = computed(() => `$${this.item().price.toFixed(2)}`);

  itemOnClickHandler = () => {
    this.onItemSelected.emit(this.item().id);
  };
}
