import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartComponent } from '../cart/cart.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartComponent, RouterLink],
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
