import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, CartComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  private cartService = inject(CartService);

  products = [
    {
      id: 1,
      name: 'Apple Iphone 12',
      price: 999,
      availableQuantity: 20,
      description:
        'The Apple iPhone 15 is a smartphone that was designed, manufactured, and sold by Apple Inc. It is the fifteenth generation of the iPhone. It was announced on September 14, 2023, alongside the iPhone 15 Mini, iPhone 15 Pro, and iPhone 15 Pro Max at the Steve Jobs Theater in Apple Park, Cupertino by Apple CEO Tim Cook.',
      image: 'assets/images/pngwing.com.png',
    },
    {
      id: 2,
      name: 'Apple Iphone 14',
      price: 999,
      availableQuantity: 20,
      description:
        'The Apple iPhone 15 is a smartphone that was designed, manufactured, and sold by Apple Inc. It is the fifteenth generation of the iPhone. It was announced on September 14, 2023, alongside the iPhone 15 Mini, iPhone 15 Pro, and iPhone 15 Pro Max at the Steve Jobs Theater in Apple Park, Cupertino by Apple CEO Tim Cook.',
      image: 'assets/images/pngwing.com.png',
    },
    {
      id: 3,
      name: 'Apple Iphone 15 pro max',
      price: 1099,
      availableQuantity: 20,
      description:
        'The Apple iPhone 15 is a smartphone that was designed, manufactured, and sold by Apple Inc. It is the fifteenth generation of the iPhone. It was announced on September 14, 2023, alongside the iPhone 15 Mini, iPhone 15 Pro, and iPhone 15 Pro Max at the Steve Jobs Theater in Apple Park, Cupertino by Apple CEO Tim Cook.',
      image: 'assets/images/pngwing.com.png',
    },
    {
      id: 4,
      name: 'Apple Iphone 15',
      price: 1999,
      availableQuantity: 20,
      description:
        'The Apple iPhone 15 is a smartphone that was designed, manufactured, and sold by Apple Inc. It is the fifteenth generation of the iPhone. It was announced on September 14, 2023, alongside the iPhone 15 Mini, iPhone 15 Pro, and iPhone 15 Pro Max at the Steve Jobs Theater in Apple Park, Cupertino by Apple CEO Tim Cook.',
      image: 'assets/images/pngwing.com.png',
    },
    {
      id: 5,
      name: 'Apple Iphone 15',
      price: 999,
      availableQuantity: 15,
      description:
        'The Apple iPhone 15 is a smartphone that was designed, manufactured, and sold by Apple Inc. It is the fifteenth generation of the iPhone. It was announced on September 14, 2023, alongside the iPhone 15 Mini, iPhone 15 Pro, and iPhone 15 Pro Max at the Steve Jobs Theater in Apple Park, Cupertino by Apple CEO Tim Cook.',
      image: 'assets/images/pngwing.com.png',
    },
    {
      id: 6,
      name: 'Apple Iphone 15',
      price: 999,
      availableQuantity: 20,
      description:
        'The Apple iPhone 15 is a smartphone that was designed, manufactured, and sold by Apple Inc. It is the fifteenth generation of the iPhone. It was announced on September 14, 2023, alongside the iPhone 15 Mini, iPhone 15 Pro, and iPhone 15 Pro Max at the Steve Jobs Theater in Apple Park, Cupertino by Apple CEO Tim Cook.',
      image: 'assets/images/pngwing.com.png',
    },
    {
      id: 7,
      name: 'Apple Iphone 15',
      price: 999,
      availableQuantity: 30,
      description:
        'The Apple iPhone 15 is a smartphone that was designed, manufactured, and sold by Apple Inc. It is the fifteenth generation of the iPhone. It was announced on September 14, 2023, alongside the iPhone 15 Mini, iPhone 15 Pro, and iPhone 15 Pro Max at the Steve Jobs Theater in Apple Park, Cupertino by Apple CEO Tim Cook.',
      image: 'assets/images/pngwing.com.png',
    },
    {
      id: 8,
      name: 'Apple Iphone 15',
      price: 999,
      availableQuantity: 20,
      description:
        'The Apple iPhone 15 is a smartphone that was designed, manufactured, and sold by Apple Inc. It is the fifteenth generation of the iPhone. It was announced on September 14, 2023, alongside the iPhone 15 Mini, iPhone 15 Pro, and iPhone 15 Pro Max at the Steve Jobs Theater in Apple Park, Cupertino by Apple CEO Tim Cook.',
      image: 'assets/images/pngwing.com.png',
    },
    {
      id: 9,
      name: 'Apple Iphone 15',
      price: 999,
      availableQuantity: 20,
      description:
        'The Apple iPhone 15 is a smartphone that was designed, manufactured, and sold by Apple Inc. It is the fifteenth generation of the iPhone. It was announced on September 14, 2023, alongside the iPhone 15 Mini, iPhone 15 Pro, and iPhone 15 Pro Max at the Steve Jobs Theater in Apple Park, Cupertino by Apple CEO Tim Cook.',
      image: 'assets/images/pngwing.com.png',
    },
    {
      id: 10,
      name: 'Apple Iphone 15',
      price: 999,
      availableQuantity: 10,
      description:
        'The Apple iPhone 15 is a smartphone that was designed, manufactured, and sold by Apple Inc. It is the fifteenth generation of the iPhone. It was announced on September 14, 2023, alongside the iPhone 15 Mini, iPhone 15 Pro, and iPhone 15 Pro Max at the Steve Jobs Theater in Apple Park, Cupertino by Apple CEO Tim Cook.',
      image: 'assets/images/pngwing.com.png',
    },
  ];

  quantity: { [key: number]: number } = {};

  ngOnInit() {
    this.products.forEach((product) => {
      this.quantity[product.id] = 1;
    });
  }

  addToCart(product: any) {
    if (
      this.quantity[product.id] > 0 &&
      this.quantity[product.id] <= product.availableQuantity
    ) {
      console.log(product);
      console.log(this.quantity);
      this.cartService.addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: this.quantity[product.id],
      });
      product.availableQuantity -= this.quantity[product.id];
      this.quantity[product.id] = 1;
      console.log(this.quantity);
      console.log(product.availableQuantity);
    } else {
      alert('Requested quantity is not available');
    }
  }
}
