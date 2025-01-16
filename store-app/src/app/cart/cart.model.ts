import { StoreItem } from "../store/store.model";

export interface CartItem {
  id: number;
  item: StoreItem;
  quantity: number;
  total: number;
}
