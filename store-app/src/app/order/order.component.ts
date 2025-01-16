import { Component } from '@angular/core';
import { OrderItemListComponent } from "./order-item-list/order-item-list.component";
import { OrderItemComponent } from "./order-item/order-item.component";

@Component({
  selector: 'app-order',
  imports: [OrderItemListComponent, OrderItemComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

}
