/**
 * Q3: Math Utility Dashboard
 * Displays various mathematical operations for a scientific calculator
 */

// Define the input number
const x = 16.75;

console.log("===== MATH UTILITY DASHBOARD =====\n");

// Calculate various mathematical values
const roundedValue = Math.round(x);           // Rounded value
const squareRoot = Math.sqrt(x);              // Square root
const power = Math.pow(x, 3);                 // Power (x^3)
const randomNumber = Math.floor(Math.random() * 41) + 10;  // Random number between 10-50

// Display individual calculations
console.log(`Input Number (x): ${x}`);
console.log(`Rounded Value: Math.round(${x}) = ${roundedValue}`);
console.log(`Square Root: Math.sqrt(${x}) = ${squareRoot.toFixed(4)}`);
console.log(`Power (x³): Math.pow(${x}, 3) = ${power.toFixed(2)}`);
console.log(`Random Number (10-50): ${randomNumber}`);

// Display formatted result summary using template literals
console.log("\n===== FORMATTED RESULT SUMMARY =====");
const summary = `
📊 Scientific Calculator Results
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Input Value:        ${x}
Rounded:            ${roundedValue}
Square Root:        ${squareRoot.toFixed(4)}
Cube (x³):          ${power.toFixed(2)}
Random (10-50):     ${randomNumber}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

console.log(summary);
