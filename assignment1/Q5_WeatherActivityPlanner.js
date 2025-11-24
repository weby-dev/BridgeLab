/**
 * Q5: Weather Activity Planner
 * Advises a user on what to do based on temperature, rain, and wind speed
 */

// Create variables for weather conditions
const temperature = 28;      // Temperature in Celsius
const isRaining = false;      // Boolean for rain condition
const windSpeed = 15;         // Wind speed in km/h

// Determine activity recommendation based on weather conditions
let activityRecommendation;

// Use combined && and || conditions to determine activity
if (isRaining) {
    // If raining → "Stay indoors with hot coffee."
    activityRecommendation = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
    // Else if temperature > 35 → "Go swimming."
    activityRecommendation = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
    // Else if temperature < 15 and windSpeed > 20 → "Too cold and windy — stay home."
    activityRecommendation = "Too cold and windy — stay home.";
} else {
    // Else → "Perfect day for a walk."
    activityRecommendation = "Perfect day for a walk.";
}

// Display weather information and recommendation
console.log("===== WEATHER ACTIVITY PLANNER =====\n");
console.log(`Weather Conditions:`);
console.log(`  Temperature: ${temperature}°C`);
console.log(`  Is Raining: ${isRaining}`);
console.log(`  Wind Speed: ${windSpeed} km/h\n`);
console.log(`Recommendation: ${activityRecommendation}`);
