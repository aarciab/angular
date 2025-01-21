import { Component, input, output, computed, signal, OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { StoreItem } from '../store.model';
import { CartItem } from '../../cart/cart.model';

@Component({
  selector: 'app-store-item',
  imports: [],
  templateUrl: './store-item.component.html',
  styleUrl: './store-item.component.css',
})
export class StoreItemComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{

  constructor() {
    console.log(`constructor: executed`);
  }
  
  item = input.required<StoreItem>();
  onCartItemAdded = output<CartItem>();

  quantity = signal(0);

  getPrice = computed(() => `$${this.item().price.toFixed(2)}`);
  getTotalPrice = computed(
    () => `$${(this.item().price * this.quantity()).toFixed(2)}`
  );
  isAddToCartDisabled = computed(() => this.quantity() === 0);

  // LifeCycle Hooks.........................................
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges: ${JSON.stringify(changes)}`);
  }

  ngOnInit(): void {
    console.log(`ngOnInit: executed`);
  }

  ngDoCheck(): void {
    console.log(`ngDoCheck: executed`);
  }

  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit: executed`);
  }

  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked: executed`);
  }

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit: executed`);
  }

  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked: executed`);
  }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy: executed`);
  }
  // LifeCycle Hooks.........................................

  onAddQuantityHandler = () => {
    this.quantity.set(this.quantity() + 1);
  };

  onSubtractQuantityHandler = () => {
    if (this.quantity() !== 0) {
      this.quantity.set(this.quantity() - 1);
    }
  };

  onAddToCartClick = () => {
    this.onCartItemAdded.emit({
      id: this.item().id,
      item: this.item(),
      quantity: this.quantity(),
      total: this.item().price * this.quantity(),
    });

    this.quantity.set(0);
  };
}
