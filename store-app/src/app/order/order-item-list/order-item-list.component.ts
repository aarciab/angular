import { Component, input, output, signal } from '@angular/core';
import { OrderItemPreviewComponent } from "./order-item-preview/order-item-preview.component";
import { OrderItem } from '../order.model';

@Component({
  selector: 'app-order-item-list',
  imports: [OrderItemPreviewComponent],
  templateUrl: './order-item-list.component.html',
  styleUrl: './order-item-list.component.css',
})
export class OrderItemListComponent {
  orderItems = input<OrderItem[]>([]);
  onItemSelected = output<OrderItem>();
}
