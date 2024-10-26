import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProductsComponent } from '../products/products.component';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProductsComponent, CommonModule, CartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
