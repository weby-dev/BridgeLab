/**
 * Q3: Monthly Expense Tracker
 * Calculates total and average monthly expenses with 10% tax addition
 */

// Array of expenses for 5 categories
const expenses = {
    food: 150,      // Food expenses
    travel: 200,    // Travel expenses
    rent: 800,      // Rent expenses
    bills: 150,     // Bills expenses
    leisure: 100    // Leisure expenses
};

// Calculate total expenses
let total = expenses.food + expenses.travel + expenses.rent + expenses.bills + expenses.leisure;

// Calculate average expenses (5 categories)
const average = total / 5;

// Add 10% tax to the total using assignment operator
let taxPercentage = 0.10;
let taxAmount = total * taxPercentage;
let finalAmountAfterTax = total + taxAmount;

// Use toFixed(2) to round values to 2 decimal places
console.log("===== MONTHLY EXPENSE TRACKER =====\n");
console.log("Expense Breakdown:");
console.log(`  Food:   $${expenses.food.toFixed(2)}`);
console.log(`  Travel: $${expenses.travel.toFixed(2)}`);
console.log(`  Rent:   $${expenses.rent.toFixed(2)}`);
console.log(`  Bills:  $${expenses.bills.toFixed(2)}`);
console.log(`  Leisure: $${expenses.leisure.toFixed(2)}`);
console.log("\nSummary:");
console.log(`  Total Expenses: $${total.toFixed(2)}`);
console.log(`  Average per Category: $${average.toFixed(2)}`);
console.log(`  Tax (10%): $${taxAmount.toFixed(2)}`);
console.log(`  Final Amount After Tax: $${finalAmountAfterTax.toFixed(2)}`);
