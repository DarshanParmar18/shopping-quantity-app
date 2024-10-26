# Shopping Quantity App

This project is an Angular-based shopping quantity application that allows users to manage and validate product quantities during a shopping experience.

## Features

1. **Quantity Management**

   - Display available quantity for each product
   - Allow users to input desired quantity to add to cart
   - Default quantity set to 1

2. **Validation and Error Handling**

   - Display error message for invalid quantities (exceeding available stock or 0)

3. **Confirmation and Pricing**
   - Show pop-up window with added quantity and total price
   - Update remaining quantity after adding to cart

## Technologies Used

- Angular 18.1.3
- TypeScript
- HTML5
- CSS3 (with Tailwind CSS for styling)

## Setup and Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/shopping-quantity-app.git
   ```

2. Navigate to the project directory:

   ```
   cd shopping-quantity-app
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Run the development server:

   ```
   ng serve
   ```

5. Open your browser and visit `http://localhost:4200/`

## Project Structure

- `src/app/components/`: Contains all Angular components
  - `header/`: Header component with cart button
  - `products/`: Products list and individual product display
  - `cart/`: Shopping cart modal
- `src/app/services/`: Contains Angular services
  - `cart.service.ts`: Manages cart operations
- `src/assets/`: Contains static assets like images

## Usage

1. Browse the list of products displayed on the main page.
2. For each product, you can see its name, description, price, and available quantity.
3. Use the quantity input field to select the desired quantity.
4. Click "Add to cart" to add the product to your shopping cart.
5. If the quantity is invalid, an error message will be displayed.
6. Click the cart icon in the header to view your cart contents.
7. In the cart modal, you can see the list of added products, their quantities, and the total price.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
