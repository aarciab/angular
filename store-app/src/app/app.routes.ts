import { Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';

export const routes: Routes = [
  { path: '', component: StoreComponent },
  { path: 'store', component: StoreComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: OrderComponent },
];
