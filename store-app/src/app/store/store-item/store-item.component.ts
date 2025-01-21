import { Component, input, output, computed, signal, OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { StoreItem } from '../store.model';
import { CartItem } from '../../cart/cart.model';
import { StoreService } from '../store.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-store-item',
  imports: [CurrencyPipe],
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
  constructor(private storeService: StoreService) {
    console.log(`constructor: executed`);
  }

  id = input.required<number>();
  onCartItemAdded = output<CartItem>();
  item = signal<StoreItem | undefined>(undefined);

  quantity = signal(0);
  isAddToCartDisabled = computed(() => this.quantity() === 0);

  // LifeCycle Hooks.........................................
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges: ${JSON.stringify(changes)}`);
  }

  async ngOnInit(): Promise<void> {
    console.log(`ngOnInit: executed`);

    if (this.id()) {
      console.log("Fecthing...")
      const item = await this.storeService.getItemById(this.id());
      this.item.set(item);
      console.log('Fecthing item ', JSON.stringify(item));
    }
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

  onAddToCartClick = (item: StoreItem) => {
    this.onCartItemAdded.emit({
      id: item.id,
      item: item,
      quantity: this.quantity(),
      total: item.price * this.quantity(),
    });

    this.quantity.set(0);
  };
}
