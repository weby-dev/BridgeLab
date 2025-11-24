"use strict";

/**
 * Q5 – Hoisting Lab: The Sequence Trap
 * Demonstrates JavaScript hoisting behavior with var, let, const, and functions
 */

console.log("===== HOISTING LAB: THE SEQUENCE TRAP =====\n");

// ===== SECTION 1: ANALYSIS OF ORIGINAL CODE BEHAVIOR =====
console.log("--- PART 1: Understanding the Original Code Problem ---\n");

console.log("Original Code:");
console.log(`
    console.log(score);           // What will print?
    announce();                   // Will this work?
    var score = 50;               // Declaration happens here
    function announce() {
        console.log("Game started");
    }
    let status = "ready";         // Not hoisted to top
    startGame();                  // Will this work?
    function startGame() {
        console.log(status);      // Access to 'status'?
    }
`);

console.log("\n--- HOISTING ANALYSIS ---\n");

console.log("1. Hoisted Elements (moved to top of scope):");
console.log("   - Function declarations → moved completely with body");
console.log("   - var declarations → moved, initialized as undefined");
console.log("   - let/const declarations → moved but not initialized (Temporal Dead Zone)\n");

console.log("2. Memory States During Hoisting:");
console.log("   score: undefined (hoisted with var)");
console.log("   announce(): <function> (fully hoisted)");
console.log("   status: <uninitialized> (in Temporal Dead Zone)");
console.log("   startGame(): <function> (fully hoisted)\n");

console.log("3. Problems:");
console.log("   ✗ console.log(score) → prints 'undefined' (confusing!)");
console.log("   ✓ announce() → works (function hoisting)");
console.log("   ✗ console.log(status) → ReferenceError (Temporal Dead Zone)");
console.log("   ✓ startGame() → works (function hoisting)\n");

// ===== SECTION 2: FIXED CODE (CORRECTED VERSION) =====
console.log("--- PART 2: Fixed Code (Properly Declared) ---\n");

// Proper order: declarations first, then usage
const status = "ready";  // Declare let/const at top
const scoreValue = 50;   // Avoid var hoisting confusion

function announceGame() {
    console.log("Game started");
}

function startGameFixed() {
    console.log(`Status: ${status}`);
}

// Now use them - no hoisting confusion
console.log("Executing fixed code:");
announceGame();           // ✓ Works
startGameFixed();         // ✓ Works
console.log(`Score: ${scoreValue}`);  // ✓ Works\n`);

// ===== SECTION 3: HOISTING WITH DIFFERENT VARIABLE TYPES =====
console.log("--- PART 3: Hoisting Behavior Comparison ---\n");

function varHoistingExample() {
    console.log("\nUsing VAR (function-scoped, hoisted & initialized):");
    console.log("x before assignment:", typeof x === "undefined" ? "undefined" : x);
    var x = 10;
    console.log("x after assignment:", x);
}
varHoistingExample();

function letHoistingExample() {
    console.log("\nUsing LET (block-scoped, hoisted but not initialized):");
    try {
        console.log("y before assignment:", typeof y);
        let y = 20;
        console.log("y after assignment:", y);
    } catch (error) {
        console.log("ERROR:", error.message);
        console.log("Reason: ReferenceError due to Temporal Dead Zone");
    }
}
letHoistingExample();

// ===== SECTION 4: ARROW FUNCTIONS VS FUNCTION DECLARATIONS =====
console.log("\n--- PART 4: Arrow Functions vs Function Declarations ---\n");

// Function declaration (fully hoisted)
function traditionalFunc() {
    return "Traditional function";
}

// Arrow function assigned to var (var hoisted, arrow function not)
var arrowWithVar = () => {
    return "Arrow function with var";
};

// Arrow function assigned to let (let hoisted but not initialized)
const arrowWithConst = () => {
    return "Arrow function with const";
};

console.log("Hoisting Differences:");
console.log("1. Function Declaration:");
console.log("   - Fully hoisted (can call before declaration)");
console.log("   - Result:", traditionalFunc());

console.log("\n2. Arrow Function with var:");
console.log("   - var hoisted as undefined, arrow function not hoisted");
console.log("   - Can call after assignment: ", arrowWithVar());

console.log("\n3. Arrow Function with const:");
console.log("   - const in Temporal Dead Zone until assignment");
console.log("   - Must assign before using: ", arrowWithConst());

// ===== SECTION 5: REWRITTEN CODE WITH ARROW FUNCTIONS =====
console.log("\n--- PART 5: Original Code Rewritten with Arrow Functions ---\n");

// Declare all arrow functions at top to avoid hoisting confusion
const announce = () => {
    console.log("Game started (arrow function)");
};

const startGame = () => {
    console.log(`Game Status: ${gameStatus}`);
};

// Declare variables
const gameStatus = "ready";

// Now execute
console.log("Executing rewritten code:");
announce();
startGame();

// ===== SECTION 6: HOISTING CALL STACK VISUALIZATION =====
console.log("\n--- PART 6: Call Stack & Hoisting Visualization ---\n");

console.log("How JavaScript interprets the code internally:\n");
console.log("BEFORE EXECUTION (Hoisting Phase):");
console.log(`
    1. var score → declared, value = undefined
    2. function announce → fully loaded
    3. let status → declared, but in Temporal Dead Zone
    4. function startGame → fully loaded
`);

console.log("DURING EXECUTION (Execution Phase):");
console.log(`
    1. console.log(score) → prints: undefined (not 50!)
    2. announce() → executes function
    3. score = 50 → now score has actual value
    4. startGame() → executes function
    5. console.log(status) → accesses status (now initialized)
`);

console.log("\n✓ Hoisting is complete! All concepts demonstrated.");
