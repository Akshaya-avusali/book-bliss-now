import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Book } from './bookData';

export interface CartItem extends Book {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (book: Book) => void;
  removeItem: (bookId: string) => void;
  updateQuantity: (bookId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (book) => {
        const existingItem = get().items.find(item => item.id === book.id);
        if (existingItem) {
          set({
            items: get().items.map(item =>
              item.id === book.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          });
        } else {
          set({ items: [...get().items, { ...book, quantity: 1 }] });
        }
      },
      removeItem: (bookId) => {
        set({ items: get().items.filter(item => item.id !== bookId) });
      },
      updateQuantity: (bookId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(bookId);
        } else {
          set({
            items: get().items.map(item =>
              item.id === bookId ? { ...item, quantity } : item
            )
          });
        }
      },
      clearCart: () => set({ items: [] }),
      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      }
    }),
    {
      name: 'cart-storage',
    }
  )
);
