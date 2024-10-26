import { Injectable, signal } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<CartItem[]>([]);

  addToCart(item: CartItem) {
    this.cartItems.update((items) => {
      const existingItem = items.find((f) => f.id == item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
        return [...items];
      }
      return [...items, item];
    });
    console.log(this.cartItems().map((f) => f.quantity));
  }

  getTotalItems() {
    return this.cartItems().reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice() {
    return this.cartItems().reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}
