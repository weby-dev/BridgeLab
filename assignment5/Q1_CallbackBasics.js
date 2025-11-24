/**
 * Q1: Callback Function Basics
 * Demonstrates callback flow with greetUser and showEndMessage
 */

/**
 * Function that greets a user and executes a callback
 * @param {string} name - User name
 * @param {function} callback - Callback function to execute after greeting
 */
function greetUser(name, callback) {
    // Print greeting message
    console.log(`Hello ${name}`);
    
    // Execute the callback function
    callback();
}

/**
 * Callback function that shows end message
 */
function showEndMessage() {
    console.log("Welcome to the course!");
}

console.log("===== Q1: CALLBACK FUNCTION BASICS =====\n");

console.log("--- Example 1: Basic Callback ---");
greetUser("Alice", showEndMessage);

console.log("\n--- Example 2: Multiple Users ---");
greetUser("Bob", showEndMessage);
greetUser("Charlie", showEndMessage);

console.log("\n--- Example 3: Anonymous Callback Function ---");
greetUser("Diana", function() {
    console.log("Thank you for enrolling!");
});

console.log("\n--- Example 4: Arrow Function as Callback ---");
greetUser("Eve", () => {
    console.log("Ready to learn JavaScript!");
});

console.log("\n--- Callback Flow Explanation ---");
console.log(`
EXECUTION FLOW:
1. greetUser("Name", callback) is called
2. Inside greetUser:
   a. console.log(\`Hello \${name}\`) executes first
   b. callback() is called
   c. The callback function executes (showEndMessage prints message)
3. Function completes

This demonstrates:
✓ Callback is passed as a parameter
✓ Callback is executed inside the function
✓ Callback can be named or anonymous function
✓ Callback allows custom behavior to be executed after a task
`);
