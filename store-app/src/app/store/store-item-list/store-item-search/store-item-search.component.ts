import { Component, output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-store-item-search',
  imports: [],
  templateUrl: './store-item-search.component.html',
  styleUrl: './store-item-search.component.css',
})
export class StoreItemSearchComponent {
  readonly debounceTimeMs = 300;
  filterInput = new Subject<string>();
  onFilterChange = output<string>();

  constructor() {
    this.filterInput
      .pipe(debounceTime(300))
      .subscribe((filterTerm: string) => this.onFilterChangeHandler(filterTerm));
  }

  ngOnDestroy() {
    this.filterInput.complete();
  }

  onInputFilter(event: Event) {
    this.filterInput.next((event.target as HTMLInputElement).value);
  }

  onFilterChangeHandler(filterTerm: string) {
    this.onFilterChange.emit(filterTerm);
  }
}
