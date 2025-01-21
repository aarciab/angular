import { Component, input, computed, output } from '@angular/core';
import { StoreItem } from '../../store.model';
import { FirstLetterCasePipePipe } from '../../../common/first-letter-case-pipe.pipe';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-store-item-preview',
  imports: [FirstLetterCasePipePipe, CurrencyPipe],
  templateUrl: './store-item-preview.component.html',
  styleUrl: './store-item-preview.component.css',
})
export class StoreItemPreviewComponent {
  item = input.required<StoreItem>({
    alias: 'storeItem',
  });
  onItemSelected = output<number>();

  itemOnClickHandler = () => {
    this.onItemSelected.emit(this.item().id);
  };
}
