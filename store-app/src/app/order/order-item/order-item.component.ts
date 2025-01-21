import { Component, computed, input } from '@angular/core';
import { OrderItem } from '../order.model';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-order-item',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.css',
})
export class OrderItemComponent {
  orderItem = input.required<OrderItem>();

  getOrderNumber = computed(() => `Order number: ${this.orderItem()?.id}`);
  getOrderInvoice = computed(() => `Invoice: ${this.orderItem()?.invoice}`);

}
