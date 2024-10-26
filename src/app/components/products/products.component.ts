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
      name: 'Apple iPhone 12',
      price: 699,
      availableQuantity: 20,
      description:
        'The iPhone 12 features a 6.1-inch Super Retina XDR OLED display, A14 Bionic chip, 5G capability, and a dual-camera system with 12MP Ultra Wide and Wide cameras.',
      image: 'assets/images/pngwing.com.png',
    },
    {
      id: 2,
      name: 'Apple iPhone 13',
      price: 799,
      availableQuantity: 20,
      description:
        'The iPhone 13 boasts a powerful A15 Bionic chip, improved dual-camera system, and a brighter Super Retina XDR display. It offers better battery life and comes in five stunning colors.',
      image: 'assets/images/iphone13promax.png',
    },
    {
      id: 3,
      name: 'Apple iPhone 14 Pro',
      price: 999,
      availableQuantity: 20,
      description:
        'The iPhone 14 Pro introduces the Dynamic Island, Always-On display, and a 48MP Main camera. Its powered by the A16 Bionic chip and features a durable Ceramic Shield front cover.',
      image: 'assets/images/iphone13.png',
    },
    {
      id: 4,
      name: 'Apple iPhone 14 Pro Max',
      price: 1099,
      availableQuantity: 20,
      description:
        'The iPhone 14 Pro Max offers the largest Super Retina XDR display in the lineup, along with the most powerful camera system, including a 48MP Main camera and Photonic Engine for incredible detail.',
      image: 'assets/images/pngwing.com.png',
    },
    {
      id: 5,
      name: 'Apple iPhone SE (2nd generation)',
      price: 399,
      availableQuantity: 15,
      description:
        'The compact iPhone SE packs A13 Bionic, the fastest chip in a smartphone, into a popular design with a 4.7-inch Retina HD display. It features a single-camera system with Portrait mode.',
      image: 'assets/images/iphone13promax.png',
    },
    {
      id: 6,
      name: 'Apple iPhone 11',
      price: 499,
      availableQuantity: 20,
      description:
        'The iPhone 11 features a dual-camera system with Night mode, a 6.1-inch Liquid Retina display, and all-day battery life. Its powered by the A13 Bionic chip for incredible performance.',
      image: 'assets/images/iphone13.png',
    },
    {
      id: 7,
      name: 'Apple iPhone XR',
      price: 399,
      availableQuantity: 30,
      description:
        'The colorful iPhone XR has a 6.1-inch Liquid Retina display, A12 Bionic chip, and a 12MP camera with Portrait mode and Smart HDR. It offers great battery life in a durable design.',
      image: 'assets/images/iphone13promax.png',
    },
    {
      id: 8,
      name: 'Apple iPhone 15',
      price: 799,
      availableQuantity: 20,
      description:
        'The latest iPhone 15 features a ceramic shield front, Super Retina XDR display, A15 Bionic chip, and an advanced dual-camera system. It introduces new color options and improved durability.',
      image: 'assets/images/iphone13.png',
    },
    {
      id: 9,
      name: 'Apple iPhone 15 Plus',
      price: 899,
      availableQuantity: 20,
      description:
        'The iPhone 15 Plus offers a larger 6.7-inch display, the powerful A15 Bionic chip, and a dual-camera system with improved low-light performance. It features the longest battery life in an iPhone.',
      image: 'assets/images/iphone13promax.png',
    },
    {
      id: 10,
      name: 'Apple iPhone 15 Pro Max',
      price: 1199,
      availableQuantity: 10,
      description:
        'The top-of-the-line iPhone 15 Pro Max boasts a 6.7-inch ProMotion display, A16 Bionic chip, and a pro camera system with 48MP Main, Ultra Wide, and Telephoto cameras. It features a durable titanium design.',
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
        image: product.image,
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
