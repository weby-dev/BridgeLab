/**
 * Q4: Array Performance Analyzer
 * Analyzes student performance using array methods
 */

// Create an array of 8 random scores between 30 and 100
const scores = [];
for (let i = 0; i < 8; i++) {
    const randomScore = Math.floor(Math.random() * 71) + 30;  // Random between 30-100
    scores.push(randomScore);
}

console.log("===== ARRAY PERFORMANCE ANALYZER =====\n");

// Display all scores
console.log(`Student Scores: ${scores.join(", ")}`);

// Calculate highest and lowest score using Math.max() and Math.min()
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

// Calculate average score using reduce()
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;

// Calculate number of students who passed (≥ 50) using filter()
const passedStudents = scores.filter(score => score >= 50);
const passCount = passedStudents.length;
const failCount = scores.length - passCount;

// Create a performance mapping using map()
const performanceMap = scores.map((score, index) => ({
    studentId: index + 1,
    score: score,
    status: score >= 50 ? "Passed" : "Failed"
}));

// Display full summary in formatted output
console.log("\n===== PERFORMANCE SUMMARY =====");
console.log(`Total Students: ${scores.length}`);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${average.toFixed(2)}`);
console.log(`Students Passed (≥50): ${passCount}`);
console.log(`Students Failed (<50): ${failCount}`);
console.log(`Pass Percentage: ${((passCount / scores.length) * 100).toFixed(2)}%`);

// Display detailed performance report
console.log("\n===== DETAILED PERFORMANCE REPORT =====");
console.table(performanceMap);
