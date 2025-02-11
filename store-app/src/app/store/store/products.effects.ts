import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getProducts, getProductsSuccess, getProductsFailed } from "./products.actions";
import { catchError, from, map, of, switchMap } from "rxjs";
import { StoreService } from "../store.service";
import { inject, Injectable } from "@angular/core";

@Injectable()
export class ProductsEffects {
  private actions$ = inject(Actions);
  private storeService = inject(StoreService);

  getProducts = createEffect(() =>
    this.actions$.pipe(
      ofType(getProducts),

      switchMap(() =>
        from(this.storeService.getItems()).pipe(
          map((products) => getProductsSuccess({ payload: products })),
          catchError((e) => of(getProductsFailed({ error: e })))
        )
      )

    )
  );
}