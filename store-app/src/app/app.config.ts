import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';

import { routes } from './app.routes';
import { productsReducer } from './store/store/products.reducer';
import { provideEffects } from '@ngrx/effects';
import { ProductsEffects } from './store/store/products.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      products: productsReducer,
    }),
    provideEffects([ProductsEffects]),
  ],
};
