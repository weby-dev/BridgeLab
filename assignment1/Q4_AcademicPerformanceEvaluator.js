/**
 * Q4: Academic Performance Evaluator
 * Checks whether a student is promoted based on marks in 5 subjects
 */

// Input marks of 5 subjects in an array
const marks = [85, 92, 78, 88, 95];

// Calculate average and overall percentage
let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}

const average = sum / marks.length;
const overallPercentage = average;

// Variable to track if any subject has marks < 35
let anySubjectBelow35 = false;

// Check if any subject has marks below 35
for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 35) {
        anySubjectBelow35 = true;
        break;
    }
}

// Display student information
console.log("===== ACADEMIC PERFORMANCE EVALUATOR =====\n");
console.log(`Subject Marks: ${marks.join(", ")}`);
console.log(`Average: ${average.toFixed(2)}%`);
console.log(`Overall Percentage: ${overallPercentage.toFixed(2)}%\n`);

// Use logical operators to determine promotion status
let promotionStatus;

// Validation: if any subject < 35 → automatically "Detained"
if (anySubjectBelow35) {
    promotionStatus = "Detained";
} else if (overallPercentage >= 85) {
    // "Promoted with Distinction" if ≥ 85%
    promotionStatus = "Promoted with Distinction";
} else if (overallPercentage >= 50 && overallPercentage < 85) {
    // "Promoted" if between 50%–84%
    promotionStatus = "Promoted";
} else {
    // "Detained" if < 50%
    promotionStatus = "Detained";
}

// Display result
console.log(`Result: ${promotionStatus}`);
