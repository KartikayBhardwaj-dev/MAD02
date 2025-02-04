// index.js
import { Cart } from "./cart.js";
import { User } from "./user.js";
import { processPayment } from "./payment.js";
import { Product } from "./product";
// Create a new user
const user = new User("John Doe");
user.login();

// Create a shopping cart
const cart = new Cart();

// Add products to the cart
cart.addProduct(1, 2); // Adding 2 Laptops
cart.addProduct(2, 1); // Adding 1 Headphones

// Show cart items
cart.displayCart();

// Process payment
processPayment(cart);

// Show cart after payment
cart.displayCart();

// Logout
user.logout();