import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cartTotalItems = input.required<number>()
  getCartTotalItems = computed(() => `CART ${this.cartTotalItems() > 0 ? `(${this.cartTotalItems()})` : ``}`)
}
