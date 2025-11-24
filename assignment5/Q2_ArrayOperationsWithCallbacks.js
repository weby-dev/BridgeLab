/**
 * Q2: Array Operations with Callbacks
 * Uses callback functions to perform operations on array elements
 */

/**
 * Applies an operation (callback) to each element in an array
 * @param {array} numbers - Array of numbers
 * @param {function} operation - Callback function to apply to each number
 * @returns {array} - New array with transformed values
 */
function applyOperation(numbers, operation) {
    // Create a new array to store results
    const result = [];
    
    // Iterate through each number in the array
    for (let i = 0; i < numbers.length; i++) {
        // Apply the operation callback to each element
        const transformedValue = operation(numbers[i]);
        result.push(transformedValue);
    }
    
    return result;
}

console.log("===== Q2: ARRAY OPERATIONS WITH CALLBACKS =====\n");

// Original array
const numbers = [1, 2, 3, 4];
console.log(`Original array: [${numbers}]\n`);

// --- Operation 1: Double each number ---
console.log("--- Operation 1: Double Each Number ---");

function doubleNumber(num) {
    return num * 2;
}

const doubledNumbers = applyOperation(numbers, doubleNumber);
console.log("Callback function: num * 2");
console.log(`Result: [${doubledNumbers}]\n`);

// Using anonymous function for doubling
console.log("--- Operation 1 (Alternative): Using Anonymous Function ---");
const doubledNumbers2 = applyOperation(numbers, function(num) {
    return num * 2;
});
console.log(`Result: [${doubledNumbers2}]\n`);

// Using arrow function for doubling
console.log("--- Operation 1 (Alternative): Using Arrow Function ---");
const doubledNumbers3 = applyOperation(numbers, num => num * 2);
console.log(`Result: [${doubledNumbers3}]\n`);

// --- Operation 2: Square each number ---
console.log("--- Operation 2: Square Each Number ---");

function squareNumber(num) {
    return num * num;
}

const squaredNumbers = applyOperation(numbers, squareNumber);
console.log("Callback function: num * num");
console.log(`Result: [${squaredNumbers}]\n`);

// Using arrow function for squaring
console.log("--- Operation 2 (Alternative): Using Arrow Function ---");
const squaredNumbers2 = applyOperation(numbers, num => num * num);
console.log(`Result: [${squaredNumbers2}]\n`);

// --- Additional Operations ---
console.log("--- Operation 3: Square Root ---");
const sqrtNumbers = applyOperation(numbers, num => Math.sqrt(num));
console.log(`Result: [${sqrtNumbers.map(n => n.toFixed(2)).join(", ")}]\n`);

console.log("--- Operation 4: Add 10 ---");
const addTenNumbers = applyOperation(numbers, num => num + 10);
console.log(`Result: [${addTenNumbers}]\n`);

console.log("--- Operation 5: Check if Even ---");
const evenCheck = applyOperation(numbers, num => num % 2 === 0 ? "Even" : "Odd");
console.log(`Result: [${evenCheck.join(", ")}]\n`);

// --- Callback Flow Demonstration ---
console.log("===== CALLBACK FLOW EXECUTION =====");
console.log(`
For applyOperation([1, 2, 3, 4], num => num * 2):

1. applyOperation called with array and callback
2. Loop iteration 1: operation(1) → 1 * 2 = 2
3. Loop iteration 2: operation(2) → 2 * 2 = 4
4. Loop iteration 3: operation(3) → 3 * 2 = 6
5. Loop iteration 4: operation(4) → 4 * 2 = 8
6. Return [2, 4, 6, 8]

The callback function is executed for each element!
`);
