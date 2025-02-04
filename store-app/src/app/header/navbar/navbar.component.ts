import { Component, computed, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  cartTotalItems = input.required<number>();
  getCartTotalItems = computed(
    () =>
      `CART ${this.cartTotalItems() > 0 ? `(${this.cartTotalItems()})` : ``}`
  );
}
