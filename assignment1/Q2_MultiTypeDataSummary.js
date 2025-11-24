/**
 * Q2: Multi-Type Data Summary
 * Simulates a database summary of various user data entries
 * Identifies each data type using typeof operator and Array.isArray()
 */

// Declare variables of different data types
const stringData = "John Doe";           // String type
const numberData = 25;                   // Number type
const booleanData = true;                // Boolean type
const arrayData = [10, 20, 30, 40, 50]; // Array type
const objectData = { name: "Jane", age: 30 }; // Object type
const nullData = null;                   // Null type
const undefinedData = undefined;         // Undefined type

// Create a data summary report with type information
const dataSummary = [
    {
        label: "String Data",
        value: stringData,
        type: typeof stringData,
        isArray: Array.isArray(stringData)
    },
    {
        label: "Number Data",
        value: numberData,
        type: typeof numberData,
        isArray: Array.isArray(numberData)
    },
    {
        label: "Boolean Data",
        value: booleanData,
        type: typeof booleanData,
        isArray: Array.isArray(booleanData)
    },
    {
        label: "Array Data",
        value: JSON.stringify(arrayData),
        type: typeof arrayData,
        isArray: Array.isArray(arrayData)
    },
    {
        label: "Object Data",
        value: JSON.stringify(objectData),
        type: typeof objectData,
        isArray: Array.isArray(objectData)
    },
    {
        label: "Null Data",
        value: nullData,
        type: typeof nullData,
        isArray: Array.isArray(nullData)
    },
    {
        label: "Undefined Data",
        value: undefinedData,
        type: typeof undefinedData,
        isArray: Array.isArray(undefinedData)
    }
];

// Display formatted report using console.table()
console.log("===== DATA TYPE SUMMARY REPORT =====\n");
console.table(dataSummary);
