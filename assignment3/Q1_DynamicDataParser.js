"use strict";

/**
 * Q1 – Dynamic Data Parser
 * Converts mixed API data into different types and validates numeric data
 */

// Mixed API data with various types and invalid values
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

// Arrays to store valid and invalid data
const validNumericData = [];
const invalidNumericData = [];
const conversionReport = [];

console.log("===== DYNAMIC DATA PARSER =====\n");
console.log("Original API Data:", apiData);
console.log("\n--- Processing Each Value ---\n");

// Loop through each value and convert to different types
for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    
    // Convert to different types
    const numberForm = Number(value);
    const booleanForm = Boolean(value);
    const stringForm = String(value);
    
    // Check if the number conversion is valid
    const isValidNumber = !isNaN(numberForm) && value !== " " && typeof numberForm === "number";
    
    // Validate numeric conversions (skip NaN, empty strings, and non-numeric strings)
    const isInvalidNumber = isNaN(numberForm) || 
                            value === " " || 
                            (typeof value === "string" && /[a-zA-Z%]/.test(value));
    
    // Create conversion report object
    const report = {
        original: value,
        asNumber: numberForm,
        asBoolean: booleanForm,
        asString: stringForm,
        isValid: isValidNumber
    };
    
    conversionReport.push(report);
    
    // Log each conversion
    console.log(`Index ${i}: ${JSON.stringify(value)}`);
    console.log(`  → Number: ${numberForm}`);
    console.log(`  → Boolean: ${booleanForm}`);
    console.log(`  → String: "${stringForm}"`);
    
    // Categorize as valid or invalid
    if (isValidNumber) {
        validNumericData.push(numberForm);
        console.log(`  ✓ VALID numeric data\n`);
    } else if (isInvalidNumber) {
        invalidNumericData.push({
            value: value,
            reason: isNaN(numberForm) ? "NaN" : "Non-numeric string"
        });
        console.log(`  ✗ INVALID numeric data\n`);
    }
}

// Print detailed report
console.log("===== DETAILED CONVERSION REPORT =====\n");
console.table(conversionReport);

console.log("\n===== SUMMARY =====");
console.log(`Valid Numeric Data: ${JSON.stringify(validNumericData)}`);
console.log(`Valid Count: ${validNumericData.length}`);

console.log(`\nInvalid Numeric Data:`);
console.table(invalidNumericData);
console.log(`Invalid Count: ${invalidNumericData.length}`);

console.log(`\nTotal Processed: ${apiData.length}`);
