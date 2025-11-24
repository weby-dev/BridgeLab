/**
 * Q2: String Manipulation Report
 * Formats product titles for e-commerce display
 */

// Store a product name with extra spaces and mixed case
let productName = "  wireless headphones PRO  ";

console.log("===== STRING MANIPULATION REPORT =====\n");

// Display original product name
console.log(`Original Product Name: "${productName}"`);
console.log(`Original Length: ${productName.length} characters\n`);

// Step 1: Trim extra spaces
let trimmedName = productName.trim();
console.log(`After trim(): "${trimmedName}"`);

// Step 2: Convert to lowercase
let lowerCaseName = trimmedName.toLowerCase();
console.log(`After toLowerCase(): "${lowerCaseName}"`);

// Step 3: Capitalize the first letter of each word
// Split by spaces, map to capitalize first letter, then join back
let capitalizedName = lowerCaseName
    .split(" ")  // Split into individual words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalize first letter
    .join(" ");  // Join words back together

console.log(`After capitalizing each word: "${capitalizedName}"`);

// Step 4: Replace "pro" with "Pro Edition"
let finalTitle = capitalizedName.replace("Pro", "Pro Edition");
console.log(`After replace(): "${finalTitle}"`);

// Display final results
console.log("\n===== FINAL RESULTS =====");
console.log(`Cleaned Title: "${finalTitle}"`);
console.log(`Final Length: ${finalTitle.length} characters`);
