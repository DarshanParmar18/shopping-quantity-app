Shopping quantity
Task Description: Shopping Quantity App with Angular
The objective of this Angular project is to develop a user-friendly shopping quantity application.
The app's primary function is to manage and validate product quantities during a shopping
experience. It includes the following key features:

1. Quantity Management:
   • The app will display the available quantity of a selected product.
   • Users will be provided with a field to input the desired quantity they wish to add to
   their cart.
   For example, when the app is run, the available stock quantity is set to '20', with the default
   quantity set to '1'.
2. Validation and Error Handling:
   • If the user attempts to add a quantity that exceeds the available stock or 0 quantity,
   the app will promptly display an error message, informing the user that the
   requested quantity is not available.
   For example, if the available quantity is 20 and the user tries to enter '23', an error
   message will appear, informing the user that the requested quantity is not available:
3. Confirmation and Pricing:
   • When the user inputs a valid quantity (within the available stock), a pop-up window will
   appear. This window will confirm the quantity added and display the total price for
   the selected quantity.
   For example, if the user enters ‘3’ quantity, then the app will update the quantity left to ‘17’ and
   pop up a window showing the product name, quantity, and total price.
   If the user enters a different quantity, let's say '6', the remaining quantity will be updated to '11',
   and the new quantity will be added to the previously added quantity
