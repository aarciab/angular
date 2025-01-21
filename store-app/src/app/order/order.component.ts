import { Component, input } from '@angular/core';
import { OrderItemListComponent } from "./order-item-list/order-item-list.component";
import { OrderItemComponent } from "./order-item/order-item.component";
import { OrderItem } from './order.model';

@Component({
  selector: 'app-order',
  imports: [OrderItemListComponent, OrderItemComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  selectedItem: OrderItem | undefined = undefined;
  orderItems = input<OrderItem[]>([]);

  get getSelectedItem() {
    return this.selectedItem || undefined;
  }
  
  onItemSelectedHandler = (item: OrderItem) => {
    this.selectedItem = item;
  };
}
