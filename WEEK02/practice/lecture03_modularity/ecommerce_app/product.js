export class Product{
    constructor(id,name,price,stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    get_details(){
        return(`Product name: ${this.name} | price: ${this.price} | stock: ${this.stock}`);
    }
}
export const products = [
    new Product(1, "Laptop", 1200, 5),
    new Product(2, "Headphones", 100, 10),
    new Product(3, "Mouse", 50, 15),
  ];