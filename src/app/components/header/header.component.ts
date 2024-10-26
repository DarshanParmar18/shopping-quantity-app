import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private cartService = inject(CartService);

  cartItems = this.cartService.cartItems;
  totalItems = this.cartService.getTotalItems;
  onInit() {
    console.log('cart items: ', this.cartItems());
  }
}
