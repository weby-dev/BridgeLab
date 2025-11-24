/**
 * Q5: Boolean Logic Access System
 * Smart home security system using boolean logic
 */

/**
 * Function to check smart home security status
 * Returns "Secure" or "Unsafe" based on security conditions
 */
function checkSecurityStatus(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    // Access is granted (Secure) only if:
    // - Alarm is on AND
    // - Door and window are closed AND
    // - Owner is inside
    
    const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
    
    // Display security status
    console.log("\n--- Security Check ---");
    console.log(`Door Locked: ${isDoorLocked}`);
    console.log(`Window Closed: ${isWindowClosed}`);
    console.log(`Alarm On: ${isAlarmOn}`);
    console.log(`Owner Inside: ${isOwnerInside}`);
    
    // Determine status message
    const status = isSecure ? "🔒 SECURE" : "⚠️  UNSAFE";
    console.log(`Status: ${status}`);
    
    return isSecure;
}

console.log("===== BOOLEAN LOGIC ACCESS SYSTEM =====");
console.log("Smart Home Security Monitor\n");

// Test Scenario 1: All conditions met - SECURE
console.log("📍 SCENARIO 1: All Security Conditions Met");
checkSecurityStatus(true, true, true, true);

// Test Scenario 2: Door unlocked - UNSAFE
console.log("\n📍 SCENARIO 2: Door Unlocked");
checkSecurityStatus(false, true, true, true);

// Test Scenario 3: Window open - UNSAFE
console.log("\n📍 SCENARIO 3: Window Open");
checkSecurityStatus(true, false, true, true);

// Test Scenario 4: Alarm off - UNSAFE
console.log("\n📍 SCENARIO 4: Alarm Off");
checkSecurityStatus(true, true, false, true);

// Test Scenario 5: Owner not inside - UNSAFE
console.log("\n📍 SCENARIO 5: Owner Not Inside");
checkSecurityStatus(true, true, true, false);

// Test Scenario 6: Multiple issues - UNSAFE
console.log("\n📍 SCENARIO 6: Multiple Security Issues");
checkSecurityStatus(false, false, false, false);

// Additional logic demonstration with NOT operator
console.log("\n===== ADDITIONAL SECURITY LOGIC =====");
const isDoorLocked = true;
const isWindowClosed = true;
const isAlarmOn = true;
const isOwnerInside = true;

// Using NOT operator (!)
console.log(`\nIs system vulnerable (!isAlarmOn): ${!isAlarmOn}`);
console.log(`Is door accessible (!isDoorLocked): ${!isDoorLocked}`);

// Using OR operator for multiple breach scenarios
const isBreached = !isDoorLocked || !isWindowClosed || !isAlarmOn;
console.log(`\nAny breach detected (!door || !window || !alarm): ${isBreached}`);
