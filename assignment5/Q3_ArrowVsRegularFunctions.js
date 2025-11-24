/**
 * Q3: Arrow Functions vs Regular Functions (this context)
 * Demonstrates why arrow functions don't have their own 'this' binding
 */

console.log("===== Q3: ARROW FUNCTIONS VS REGULAR FUNCTIONS =====\n");

// --- Problem: Arrow Function with 'this' ---
console.log("--- Problem: Arrow Function (this.name is undefined) ---\n");

const user1 = {
    name: "Alice",
    
    // Arrow function doesn't have its own 'this'
    showName: () => {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log("Object definition:");
console.log(`
const user1 = {
    name: "Alice",
    showName: () => {
        console.log(\`Hello, my name is \${this.name}\`);
    }
};
`);

console.log("Calling user1.showName():");
user1.showName();
// Output: Hello, my name is undefined
// Reason: Arrow function inherits 'this' from global scope, not from object

console.log("\n--- Explanation: Why this.name is undefined ---");
console.log(`
Arrow Function ('this' context):
✗ Arrow functions DON'T have their own 'this' binding
✗ They inherit 'this' from the enclosing scope
✗ In this case, 'this' refers to the GLOBAL object (or undefined in strict mode)
✗ The global object doesn't have a 'name' property
✗ Therefore, this.name = undefined
`);

// --- Solution: Using Regular Function ---
console.log("\n--- Solution: Regular Function (this.name works) ---\n");

const user2 = {
    name: "Bob",
    
    // Regular function has its own 'this'
    showName: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log("Object definition:");
console.log(`
const user2 = {
    name: "Bob",
    showName: function() {
        console.log(\`Hello, my name is \${this.name}\`);
    }
};
`);

console.log("Calling user2.showName():");
user2.showName();
// Output: Hello, my name is Bob
// Reason: Regular function's 'this' refers to the object that calls it

console.log("\n--- Explanation: Why this works with regular function ---");
console.log(`
Regular Function ('this' context):
✓ Regular functions have their own 'this' binding
✓ 'this' refers to the object that calls the method
✓ When user2.showName() is called, 'this' = user2
✓ Therefore, this.name = user2.name = "Bob"
`);

// --- More Examples ---
console.log("\n--- Example 3: Method with More Logic ---\n");

const user3 = {
    name: "Charlie",
    age: 25,
    
    showName: function() {
        console.log(`Name: ${this.name}`);
    },
    
    showDetails: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    },
    
    greet: function() {
        return `Hello, I'm ${this.name} and I'm ${this.age} years old`;
    }
};

console.log("Calling different methods:");
user3.showName();
user3.showDetails();
console.log(user3.greet());

// --- Comparison Table ---
console.log("\n===== COMPARISON: ARROW VS REGULAR FUNCTION =====\n");

console.log(`
┌─────────────────────┬─────────────────────────┬─────────────────────────┐
│     Feature         │    Arrow Function       │   Regular Function      │
├─────────────────────┼─────────────────────────┼─────────────────────────┤
│ 'this' binding      │ Inherited from parent   │ Own 'this' from caller  │
│ Use as method       │ ✗ NOT recommended      │ ✓ RECOMMENDED           │
│ Use as callback     │ ✓ RECOMMENDED          │ May have issues         │
│ constructor new()   │ ✗ Cannot be used       │ ✓ CAN be used           │
│ arguments object    │ ✗ No own arguments     │ ✓ Has arguments object  │
│ Syntax              │ () => {}                │ function() {}           │
└─────────────────────┴─────────────────────────┴─────────────────────────┘
`);

// --- When to Use Each ---
console.log("===== BEST PRACTICES =====\n");

console.log("Use REGULAR FUNCTION for:");
console.log("✓ Object methods (need 'this' binding)");
console.log("✓ Constructor functions");
console.log("✓ Event handlers that need 'this'\n");

console.log("Use ARROW FUNCTION for:");
console.log("✓ Callbacks that preserve parent 'this'");
console.log("✓ Array methods (map, filter, reduce)");
console.log("✓ Short utility functions\n");

// --- Real-world Example ---
console.log("===== REAL-WORLD EXAMPLE =====\n");

const person = {
    name: "Diana",
    hobbies: ["reading", "coding", "gaming"],
    
    // Wrong: Arrow function won't have access to 'this.hobbies'
    showHobbiesWrong: function() {
        console.log(`${this.name}'s hobbies:`);
        // This would fail if we used arrow function here
        this.hobbies.forEach(hobby => {
            console.log(`  - ${hobby}`);
        });
    }
};

console.log("Using regular function with arrow callback:");
person.showHobbiesWrong();
// Arrow function callback preserves 'this' from regular function!
