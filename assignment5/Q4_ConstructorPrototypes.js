/**
 * Q4: Constructor Functions and Prototype Methods
 * Demonstrates method sharing via prototype chain
 */

console.log("===== Q4: CONSTRUCTOR FUNCTIONS & PROTOTYPES =====\n");

/**
 * Car constructor function
 * @param {string} brand - Car brand
 * @param {string} model - Car model
 */
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

/**
 * Prototype method to get car details
 * This method is shared by all Car instances
 */
Car.prototype.getDetails = function() {
    return `Brand: ${this.brand}, Model: ${this.model}`;
};

// Add another prototype method
Car.prototype.startEngine = function() {
    return `${this.brand} ${this.model} engine started!`;
};

// Add another prototype method
Car.prototype.drive = function(distance) {
    return `${this.brand} ${this.model} drove ${distance} km`;
};

console.log("--- Constructor Function Definition ---\n");
console.log(`
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    return \`Brand: \${this.brand}, Model: \${this.model}\`;
};
`);

// --- Create Car Objects ---
console.log("\n--- Creating Car Objects ---\n");

const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");
const car3 = new Car("BMW", "X5");

console.log("car1 =", car1);
console.log("car2 =", car2);
console.log("car3 =", car3);

// --- Call Prototype Methods ---
console.log("\n--- Calling Prototype Methods ---\n");

console.log("car1.getDetails():", car1.getDetails());
console.log("car2.getDetails():", car2.getDetails());
console.log("car3.getDetails():", car3.getDetails());

console.log("\ncar1.startEngine():", car1.startEngine());
console.log("car2.startEngine():", car2.startEngine());

console.log("\ncar1.drive(100):", car1.drive(100));
console.log("car2.drive(50):", car2.drive(50));

// --- Demonstrate Method Sharing ---
console.log("\n--- Method Sharing via Prototype ---\n");

console.log("Are all cars using the SAME getDetails method?");
console.log("car1.getDetails === car2.getDetails:", car1.getDetails === car2.getDetails);
console.log("car2.getDetails === car3.getDetails:", car2.getDetails === car3.getDetails);

console.log("\nExplanation:");
console.log("✓ All instances share the same method from the prototype");
console.log("✓ This saves memory - method defined once, used by all instances");
console.log("✓ When you call car1.getDetails(), JavaScript looks for:");
console.log("  1. getDetails in car1 object (not found)");
console.log("  2. getDetails in Car.prototype (FOUND!)");
console.log("  3. Uses 'this' binding to refer to car1");

// --- Prototype Chain ---
console.log("\n--- Prototype Chain ---\n");

console.log("car1 → Car.prototype → Object.prototype → null");
console.log("car2 → Car.prototype → Object.prototype → null");
console.log("car3 → Car.prototype → Object.prototype → null");

console.log("\nAll instances access Car.prototype methods and properties!");

// --- Check Property Ownership ---
console.log("\n--- Property Ownership ---\n");

console.log("car1.hasOwnProperty('brand'):", car1.hasOwnProperty('brand'));
console.log("car1.hasOwnProperty('getDetails'):", car1.hasOwnProperty('getDetails'));

console.log("\nExplanation:");
console.log("✓ 'brand' and 'model' are OWN properties (created in constructor)");
console.log("✗ 'getDetails' is NOT an own property (it's on the prototype)");

// --- Memory Efficiency Example ---
console.log("\n--- Memory Efficiency Example ---\n");

console.log("Creating 1000 Car instances:");
const cars = [];
for (let i = 0; i < 1000; i++) {
    cars.push(new Car(`Brand${i}`, `Model${i}`));
}

console.log(`Created ${cars.length} car objects`);
console.log("All 1000 instances share the SAME prototype methods");
console.log("If we defined methods in constructor, each would have a copy!");
console.log("Memory saved by using prototypes: significant!");

// --- Modifying Prototype at Runtime ---
console.log("\n--- Modifying Prototype at Runtime ---\n");

// Add a new method to the prototype
Car.prototype.getYear = function() {
    return 2024;
};

console.log("Adding new method: Car.prototype.getYear");
console.log("cars[0].getYear():", cars[0].getYear());
console.log("cars[999].getYear():", cars[999].getYear());

console.log("\nAll existing instances immediately have access to new methods!");

// --- Detailed Prototype Inspection ---
console.log("\n--- Prototype Inspection ---\n");

console.log("Object.getOwnPropertyNames(Car.prototype):");
console.log(Object.getOwnPropertyNames(Car.prototype));

console.log("\nCar.prototype methods:");
Object.getOwnPropertyNames(Car.prototype).forEach(method => {
    if (method !== 'constructor') {
        console.log(`  - ${method}: ${typeof Car.prototype[method]}`);
    }
});
