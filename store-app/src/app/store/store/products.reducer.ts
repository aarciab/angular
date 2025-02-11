import { createReducer, on } from "@ngrx/store";
import { STORE_ITEMS_SORTED, StoreItem } from "../store.model";
import { getProducts, getProductsFailed, getProductsSuccess } from "./products.actions";

export interface ProductsState {
  error?: string;
  loading: boolean;
  products: StoreItem[];
  productId?: string;
  product?: StoreItem;
}

const INITIAL_PRODUCTS_STATE: ProductsState = {
  error: undefined,
  loading: false,
  products: [],
};

export const productsReducer = createReducer(
  INITIAL_PRODUCTS_STATE,
  on(getProducts, (state) => {
    return {
      ...state,
      error: undefined,
      loading: true,
      products: [],
    };
  }),
  on(getProductsFailed, (state, action) => {
    return {
      ...state,
      error: action.error,
      loading: false,
      products: [],
    };
  }),
  on(getProductsSuccess, (state, action) => {
    return {
      ...state,
      error: undefined,
      loading: false,
      products: action.payload,
    };
  })
);