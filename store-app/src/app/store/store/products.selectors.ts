import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsState } from "./products.reducer";

export const getProductsState = createFeatureSelector<ProductsState>('products');

export const isProductsLoading = createSelector(getProductsState, productsState => productsState.loading);
export const getProductsError = createSelector(getProductsState, productsState => productsState.error);
export const getProducts = createSelector(getProductsState, productsState => productsState.products);