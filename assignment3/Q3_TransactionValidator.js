"use strict";

/**
 * Q3 – Transaction Validator
 * Validates financial transactions and categorizes errors
 */

// Transaction data with various error conditions
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null,
    { id: 4, amount: 1500 },
    { amount: 3000 },  // Missing id
    { id: 5, amount: 0 }  // Valid with 0 amount
];

// Arrays to categorize transactions
const validTransactions = [];
const invalidTransactions = [];

console.log("===== TRANSACTION VALIDATOR =====\n");
console.log("Total Transactions to Process:", transactions.length);
console.log();

// Custom error class for better error handling
class TransactionError extends Error {
    constructor(message, errorType) {
        super(message);
        this.errorType = errorType;
    }
}

// Loop through each transaction
for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    let errorDetails = null;
    let isValid = false;
    
    try {
        // Check for null entries
        if (transaction === null) {
            throw new TransactionError("Null transaction entry", "NULL_ENTRY");
        }
        
        // Check if transaction is an object
        if (typeof transaction !== "object") {
            throw new TransactionError("Transaction must be an object", "INVALID_TYPE");
        }
        
        // Check for missing id
        if (transaction.id === undefined) {
            throw new TransactionError("Missing transaction id", "MISSING_ID");
        }
        
        // Check for missing amount
        if (transaction.amount === undefined) {
            throw new TransactionError("Missing transaction amount", "MISSING_AMOUNT");
        }
        
        // Check for negative amount
        if (transaction.amount < 0) {
            throw new TransactionError(`Negative amount detected: ${transaction.amount}`, "NEGATIVE_AMOUNT");
        }
        
        // If all checks pass, mark as valid
        isValid = true;
        validTransactions.push({
            id: transaction.id,
            amount: transaction.amount,
            status: "Valid"
        });
        
        console.log(`✓ Transaction #${i}: ID ${transaction.id}, Amount ₹${transaction.amount} - VALID`);
        
    } catch (error) {
        // Catch and categorize error
        errorDetails = {
            index: i,
            transactionId: transaction && transaction.id ? transaction.id : "N/A",
            errorType: error.errorType || "UNKNOWN_ERROR",
            errorMessage: error.message,
            transaction: transaction
        };
        
        invalidTransactions.push(errorDetails);
        
        console.log(`✗ Transaction #${i}: ${error.message}`);
        console.log(`  Error Type: ${errorDetails.errorType}\n`);
    }
}

// Print final reports
console.log("\n===== VALIDATION SUMMARY =====\n");

console.log(`Valid Transactions: ${validTransactions.length}`);
console.log("Valid Transaction Details:");
console.table(validTransactions);

console.log(`\nInvalid Transactions: ${invalidTransactions.length}`);
console.log("Invalid Transaction Details:");
console.table(invalidTransactions);

// Categorize invalid transactions by error type
console.log("\n===== ERROR CATEGORIZATION =====\n");
const errorCategories = {};

invalidTransactions.forEach(invalid => {
    const errorType = invalid.errorType;
    if (!errorCategories[errorType]) {
        errorCategories[errorType] = [];
    }
    errorCategories[errorType].push(invalid);
});

for (const errorType in errorCategories) {
    console.log(`${errorType}: ${errorCategories[errorType].length} occurrence(s)`);
}

// Overall statistics
console.log("\n===== FINAL STATISTICS =====");
console.log(`Total Transactions: ${transactions.length}`);
console.log(`Successful: ${validTransactions.length}`);
console.log(`Failed: ${invalidTransactions.length}`);
console.log(`Success Rate: ${((validTransactions.length / transactions.length) * 100).toFixed(2)}%`);
