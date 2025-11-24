/**
 * Q1: E-Commerce Product Manager
 * Creates a Product class with discount and display methods
 */

// Product class definition
class Product {
    // Constructor to initialize product properties
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    
    /**
     * Apply a discount percentage to the product
     * @param {number} discountPercent - Discount percentage (e.g., 10 for 10%)
     * @returns {number} - Discounted price
     */
    applyDiscount(discountPercent) {
        const discountAmount = (this.price * discountPercent) / 100;
        const discountedPrice = this.price - discountAmount;
        return parseFloat(discountedPrice.toFixed(2));
    }
    
    /**
     * Display product details in a formatted string
     * @returns {string} - Formatted product information
     */
    displayDetails() {
        return `
Product ID: ${this.id}
Name: ${this.name}
Category: ${this.category}
Price: ₹${this.price}
        `.trim();
    }
    
    /**
     * Display product with discount information
     * @param {number} discountPercent - Discount percentage
     * @returns {string} - Formatted product with discount
     */
    displayWithDiscount(discountPercent) {
        const discountedPrice = this.applyDiscount(discountPercent);
        const savings = this.price - discountedPrice;
        
        return `
Product: ${this.name}
Original Price: ₹${this.price}
Discount: ${discountPercent}%
You Save: ₹${savings.toFixed(2)}
Final Price: ₹${discountedPrice}
        `.trim();
    }
}

console.log("===== E-COMMERCE PRODUCT MANAGER =====\n");

// Create multiple product objects
const products = [
    new Product(1, "Laptop", 45000, "Electronics"),
    new Product(2, "Wireless Mouse", 800, "Accessories"),
    new Product(3, "USB-C Cable", 350, "Accessories"),
    new Product(4, "Monitor 27-inch", 15000, "Electronics"),
    new Product(5, "Mechanical Keyboard", 5500, "Accessories"),
    new Product(6, "Webcam HD", 3200, "Electronics"),
    new Product(7, "Desk Lamp", 1200, "Furniture"),
    new Product(8, "Monitor Stand", 2500, "Furniture")
];

console.log("--- All Products ---");
products.forEach(product => {
    console.log(product.displayDetails());
    console.log();
});

// Filter and display products with price > 1000
console.log("\n--- Products with Price > ₹1000 ---");
const expensiveProducts = products.filter(product => product.price > 1000);

expensiveProducts.forEach((product, index) => {
    console.log(`${index + 1}. ${product.name} - ₹${product.price}`);
});

console.log(`\nTotal expensive products: ${expensiveProducts.length}\n`);

// Display products with discount
console.log("--- Products with 10% Discount ---");
const discountPercent = 10;

products.slice(0, 3).forEach(product => {
    console.log(product.displayWithDiscount(discountPercent));
    console.log();
});

// Summary statistics
console.log("--- Product Statistics ---");
const totalValue = products.reduce((sum, product) => sum + product.price, 0);
const avgPrice = totalValue / products.length;
const maxPrice = Math.max(...products.map(p => p.price));
const minPrice = Math.min(...products.map(p => p.price));

console.log(`Total Products: ${products.length}`);
console.log(`Total Inventory Value: ₹${totalValue.toLocaleString()}`);
console.log(`Average Price: ₹${avgPrice.toFixed(2)}`);
console.log(`Max Price: ₹${maxPrice}`);
console.log(`Min Price: ₹${minPrice}`);
