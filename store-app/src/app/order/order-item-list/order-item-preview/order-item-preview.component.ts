import { Component, computed, input, output } from '@angular/core';
import { OrderItem } from '../../order.model';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { FirstLetterCasePipePipe } from '../../../common/first-letter-case-pipe.pipe';

@Component({
  selector: 'app-order-item-preview',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './order-item-preview.component.html',
  styleUrl: './order-item-preview.component.css',
})
export class OrderItemPreviewComponent {
  orderItem = input.required<OrderItem>();
  onItemSelected = output<OrderItem>();

  getOrderNumber = computed(() => `Order number: ${this.orderItem()?.id}`);
  getOrderInvoice = computed(() => `Invoice: ${this.orderItem()?.invoice}`);
  getOrderDate = computed(
    () => `Date: ${this.orderItem()?.date.toISOString()}`
  );
  getTotalItems = computed(
    () => `Total items: ${this.orderItem()?.items.length}`
  );

  itemOnClickHandler = () => {
    this.onItemSelected.emit(this.orderItem());
  };
}
