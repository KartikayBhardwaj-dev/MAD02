// cart should be able to add , remove ,update,calculate total price
import { products } from "./product";
export class Cart{
    constructor() {
        this.items = [];
    }
    addProduct(productId,quantity){
        const product = products.find((p)=> p.id === productId);
        if(!product) {
            console.log("product not found");
            return
        }
        const existingItem = this.items.find((item)=> item.product.id === productId);
        if(existingItem){
            existingItem.quantity += quantity
        } else{
            this.items.push({product,quantity})
        }
        console.log(`Added ${quantity} ${product.name}(s) to the cart.`);
    }
    removeProduct(productId){
        this.items = this.items.filter((item)=> item.product.id !== productId);
        console.log("removed product successfully"); 
    }

    calculateCartTotal(){
        this.items.reduce((total,item)=> total + item.product.price * item.quantity,0)
    }

    displayCart() {
        if (this.items.length === 0) {
          console.log("🛒 Cart is empty.");
          return;
        }
        this.items.forEach((item) => {
          console.log(`${item.product.name} - ${item.quantity} pcs - $${item.product.price * item.quantity}`);
        });
        console.log(`Total Price: $${this.calculateTotal()}`);
      }
}