import { CartItem } from "../cart/cart.model";

export interface OrderItem {
  id: string;
  invoice: string;
  date: Date;
  items: CartItem[];
  subTotal: number;
  shipping: number;
  total: number;
}

export const ORDER_ITEMS: OrderItem[] = [
  {
    id: '18KU-62IIK',
    invoice: '20250112-123',
    date: new Date(),
    items: [
      {
        id: 1,
        item: {
          id: 1291,
          name: 'Laundry Detergent',
          price: 473.1,
          description:
            'A high-quality laundry detergent sourced for freshness and value.',
          imageUrl: 'https://placehold.co/300',
          thumbnailImageUrl: 'https://placehold.co/50',
        },
        quantity: 1,
        total: 473.1,
      },
    ],
    subTotal: 473.1,
    shipping: 5,
    total: 478.1,
  },
  {
    id: '22AU-34GGK',
    invoice: '20250112-124',
    date: new Date(),
    items: [
      {
        id: 1,
        item: {
          id: 9583,
          name: 'Butter',
          price: 189.82,
          description: 'A high-quality butter sourced for freshness and value.',
          imageUrl: 'https://placehold.co/300',
          thumbnailImageUrl: 'https://placehold.co/50',
        },
        quantity: 1,
        total: 189.82,
      },
      {
        id: 2,
        item: {
          id: 6089,
          name: 'Eggs',
          price: 340.25,
          description: 'A high-quality eggs sourced for freshness and value.',
          imageUrl: 'https://placehold.co/300',
          thumbnailImageUrl: 'https://placehold.co/50',
        },
        quantity: 2,
        total: 680.5,
      },
      {
        id: 3,
        item: {
          id: 9600,
          name: 'Salt',
          price: 191.69,
          description: 'A high-quality salt sourced for freshness and value.',
          imageUrl: 'https://placehold.co/300',
          thumbnailImageUrl: 'https://placehold.co/50',
        },
        quantity: 1,
        total: 191.69,
      },
    ],
    subTotal: 1062.01,
    shipping: 5,
    total: 1067.01,
  },
];