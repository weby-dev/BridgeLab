/**
 * Q1: Scope Conflict Resolver
 * Demonstrates proper variable scoping in a payroll system
 */

// Global variable - accessible throughout the entire script
const bonus = 5000;

/**
 * Function to calculate total salary
 * Demonstrates local scope variables
 */
function calculateSalary(isPermanent) {
    // Local variable - only accessible within this function
    const salary = 40000;
    
    // Determine total salary based on isPermanent status
    let totalSalary;
    
    if (isPermanent) {
        // Add bonus to salary if employee is permanent
        totalSalary = salary + bonus;
        console.log(`✓ Permanent Employee Bonus Applied: +$${bonus}`);
    } else {
        // No bonus for temporary employees
        totalSalary = salary;
        console.log(`✗ Temporary Employee: No Bonus`);
    }
    
    // Print total salary inside the function
    console.log(`Total Salary: $${totalSalary}`);
    
    return totalSalary;
}

// Demonstrate scope behavior with different isPermanent values
console.log("===== PAYROLL SCOPE CONFLICT RESOLVER =====\n");

console.log("Scenario 1: Permanent Employee");
console.log(`Global Bonus Value: $${bonus}`);
calculateSalary(true);

console.log("\nScenario 2: Temporary Employee");
console.log(`Global Bonus Value: $${bonus}`);
calculateSalary(false);

console.log("\n--- Scope Analysis ---");
console.log("• Global bonus (5000) remains unchanged in all function calls");
console.log("• Local salary variable is created fresh each time the function is called");
console.log("• isPermanent parameter controls whether global bonus is applied to local salary");
console.log("• Changes in function don't affect global variables");
