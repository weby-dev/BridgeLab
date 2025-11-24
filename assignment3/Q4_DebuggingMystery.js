"use strict";

/**
 * Q4 – Debugging Mystery
 * Demonstrates strict mode variable declaration requirements
 * 
 * THE PROBLEM:
 * In non-strict mode, undeclared variables become global implicitly.
 * In strict mode, undeclared variables throw a ReferenceError.
 */

console.log("===== DEBUGGING MYSTERY: STRICT MODE =====\n");

// ===== BROKEN CODE (Commented out to prevent error) =====
console.log("--- BROKEN CODE ATTEMPT (Strict Mode) ---");
console.log("Code that would throw error:");
console.log(`
    function showMessage() {
        greeting = "Welcome"; // undeclared - throws error in strict mode
        console.log(greeting);
    }
    showMessage();
`);
console.log("Error: ReferenceError - greeting is not defined");
console.log("Reason: In 'use strict' mode, you MUST declare variables with var, let, or const\n");

// ===== FIXED CODE =====
console.log("--- FIXED CODE (Strict Mode) ---");

function showMessage() {
    // FIX: Declare the variable with 'let' or 'const'
    const greeting = "Welcome";
    console.log(greeting);
}

showMessage();
console.log("✓ Code runs successfully!\n");

// ===== EXPLANATION OF SCOPE DECLARATION RULES =====
console.log("===== SCOPE DECLARATION RULES EXPLANATION =====\n");

console.log("1. NON-STRICT MODE (Legacy Behavior):");
console.log("   - Undeclared variables create global scope automatically");
console.log("   - Sloppy programming allowed - hard to debug");
console.log("   - Example: greeting = 'value' → becomes window.greeting\n");

console.log("2. STRICT MODE (Modern Best Practice):");
console.log("   - Undeclared variables throw ReferenceError");
console.log("   - Forces explicit variable declaration");
console.log("   - Prevents accidental global variable creation");
console.log("   - Must use: var, let, or const\n");

// ===== DEMONSTRATION WITH DIFFERENT SCENARIOS =====
console.log("===== SCOPE DEMONSTRATION =====\n");

function demonstrateScope() {
    // Properly declared variable
    let localVariable = "I'm local";
    const constantValue = "I'm constant";
    
    console.log("Inside function:");
    console.log("  localVariable:", localVariable);
    console.log("  constantValue:", constantValue);
    
    // Watch variable state changes
    let counter = 0;
    counter++;
    console.log("  counter incremented:", counter);
}

demonstrateScope();

// Try to access variables outside function (will fail)
console.log("\nAttempting to access function-scoped variables:");
console.log("  localVariable:", typeof localVariable === "undefined" ? "UNDEFINED (Not accessible)" : localVariable);
console.log("  ✓ Correct: Function scope prevents external access\n");

// ===== HOW STRICT MODE CHANGED BEHAVIOR =====
console.log("===== HOW STRICT MODE CHANGED BEHAVIOR =====\n");

console.log("Before (Non-strict):");
console.log("  var x = 1;  → block scoped");
console.log("  y = 2;      → creates global (bad!)");
console.log("  function() { z = 3; } → creates global (very bad!)\n");

console.log("After (Strict mode):");
console.log("  var x = 1;  → function scoped (good)");
console.log("  let y = 2;  → block scoped (better)");
console.log("  const z = 3; → block scoped, no reassign (best)");
console.log("  undeclared = 4; → ReferenceError (prevented!)\n");

// ===== DEBUGGER OBSERVATION POINTS =====
console.log("===== DEBUGGER WATCH POINTS =====");
console.log("In VS Code debugger, set breakpoints to observe:");
console.log("  1. Function parameters and local variables");
console.log("  2. Call stack showing function execution order");
console.log("  3. Scope panel showing available variables");
console.log("  4. Variables panel with current values");
console.log("\nDebugger helps prevent scope-related bugs!");
