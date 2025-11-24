"use strict";

/**
 * Q2 – Employee Bonus Calculator
 * Calculates bonuses for employees based on years of service
 * Uses strict validation to prevent implicit globals
 */

// Employee data with string values
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("===== EMPLOYEE BONUS CALCULATOR =====\n");

// Array to store processed employee data
const employeeBonus = [];

// Process each employee
for (let i = 0; i < employees.length; i++) {
    try {
        const employee = employees[i];
        
        // Validate that employee object exists
        if (!employee) {
            throw new Error("Employee data is missing");
        }
        
        // Validate required properties exist
        if (!employee.name || !employee.salary || employee.years === undefined) {
            throw new Error(`Missing property for employee at index ${i}`);
        }
        
        // Convert salary and years to numbers
        const salaryNumber = Number(employee.salary);
        const yearsNumber = Number(employee.years);
        
        // Validate conversions
        if (isNaN(salaryNumber)) {
            throw new Error(`Invalid salary value: "${employee.salary}" for ${employee.name}`);
        }
        if (isNaN(yearsNumber)) {
            throw new Error(`Invalid years value: "${employee.years}" for ${employee.name}`);
        }
        
        // Calculate bonus based on years of service
        // Bonus = 10% if years > 3, else 5%
        const bonusPercentage = yearsNumber > 3 ? 0.10 : 0.05;
        const bonusAmount = salaryNumber * bonusPercentage;
        const totalCompensation = salaryNumber + bonusAmount;
        
        // Create employee record with calculated bonus
        const employeeRecord = {
            name: employee.name,
            salary: salaryNumber,
            years: yearsNumber,
            bonusPercentage: bonusPercentage * 100,
            bonusAmount: bonusAmount,
            totalCompensation: totalCompensation
        };
        
        employeeBonus.push(employeeRecord);
        
        // Use template strings to print formatted details
        console.log(`Employee: ${employee.name}`);
        console.log(`  Salary: ₹${salaryNumber.toLocaleString()}`);
        console.log(`  Years of Service: ${yearsNumber}`);
        console.log(`  Bonus Percentage: ${bonusPercentage * 100}%`);
        console.log(`  Bonus Amount: ₹${bonusAmount.toLocaleString()}`);
        console.log(`  Total Compensation: ₹${totalCompensation.toLocaleString()}`);
        console.log();
        
    } catch (error) {
        // Catch and handle errors
        console.error(`❌ Error processing employee: ${error.message}`);
        console.log();
    }
}

// Display summary table
console.log("===== BONUS SUMMARY TABLE =====\n");
console.table(employeeBonus);

// Calculate total bonuses
const totalBonusAmount = employeeBonus.reduce((sum, emp) => sum + emp.bonusAmount, 0);
const totalCompensation = employeeBonus.reduce((sum, emp) => sum + emp.totalCompensation, 0);

console.log("\n===== TOTAL PAYROLL SUMMARY =====");
console.log(`Total Employees Processed: ${employeeBonus.length}`);
console.log(`Total Salary Base: ₹${employeeBonus.reduce((sum, emp) => sum + emp.salary, 0).toLocaleString()}`);
console.log(`Total Bonus Distributed: ₹${totalBonusAmount.toLocaleString()}`);
console.log(`Total Compensation: ₹${totalCompensation.toLocaleString()}`);
