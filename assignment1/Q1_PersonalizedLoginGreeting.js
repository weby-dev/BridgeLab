/**
 * Q1: Personalized Login Greeting
 * Creates a program that greets users with time-based messages
 */

// Declare variables for user name and current hour
const userName = "Alice";
const currentHour = new Date().getHours();

// Variable to store the greeting message
let greeting;

// Use if-else logic to determine the appropriate greeting based on time
if (currentHour < 12) {
    // Morning greeting (before noon)
    greeting = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour < 17) {
    // Afternoon greeting (12 PM to 4:59 PM)
    greeting = `Good Afternoon ${userName}!`;
} else {
    // Evening greeting (5 PM onwards)
    greeting = `Good Evening ${userName}!`;
}

// Display the greeting
console.log(greeting);
console.log(`Current hour: ${currentHour}`);
