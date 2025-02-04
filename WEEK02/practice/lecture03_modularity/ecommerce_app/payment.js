// payment.js
export function processPayment(cart) {
    if (cart.items.length === 0) {
      console.log("❌ Cannot proceed to payment. Your cart is empty!");
      return;
    }
  
    console.log(`💳 Payment of $${cart.calculateTotal()} successful! Thank you for shopping.`);
    cart.items = []; // Empty cart after purchase
  }