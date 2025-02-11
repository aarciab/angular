import { createAction, props } from "@ngrx/store";
import { StoreItem } from "../store.model";

export enum ProductsActionTypes {
  GET_PRODUCTS = 'GET_PRODUCTS',
  GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED',
}

export const getProducts = createAction(ProductsActionTypes.GET_PRODUCTS);

export const getProductsSuccess = createAction(
  ProductsActionTypes.GET_PRODUCTS_SUCCESS,
  props<{ payload: StoreItem[] }>()
);

export const getProductsFailed = createAction(
  ProductsActionTypes.GET_PRODUCTS_FAILED,
  props<{ error: string }>()
);