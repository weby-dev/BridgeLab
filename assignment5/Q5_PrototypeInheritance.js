/**
 * Q5: Prototype Inheritance Chain
 * Demonstrates inheritance from Person to Student with prototype chain
 */

console.log("===== Q5: PROTOTYPE INHERITANCE CHAIN =====\n");

// --- Person Constructor ---
/**
 * Person constructor function
 * @param {string} name - Person's name
 */
function Person(name) {
    this.name = name;
}

/**
 * Add showName method to Person prototype
 */
Person.prototype.showName = function() {
    return `Person name: ${this.name}`;
};

/**
 * Add greet method to Person prototype
 */
Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

console.log("--- Person Constructor ---\n");
console.log(`
function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    return \`Person name: \${this.name}\`;
};
`);

// --- Student Constructor (Inherits from Person) ---
/**
 * Student constructor function - inherits from Person
 * @param {string} name - Student's name
 * @param {string} branch - Student's branch/major
 */
function Student(name, branch) {
    // Call Person constructor with 'this' context
    Person.call(this, name);
    this.branch = branch;
}

/**
 * Set up prototype inheritance
 * Student instances inherit from Person.prototype
 */
Student.prototype = Object.create(Person.prototype);

/**
 * Restore constructor reference
 */
Student.prototype.constructor = Student;

/**
 * Add showBranch method to Student prototype
 */
Student.prototype.showBranch = function() {
    return `Branch: ${this.branch}`;
};

/**
 * Add showDetails method that uses both name and branch
 */
Student.prototype.showDetails = function() {
    return `${this.name} studies ${this.branch}`;
};

/**
 * Override greet method for Student
 */
Student.prototype.greet = function() {
    return `Hi, I'm ${this.name}, a ${this.branch} student`;
};

console.log("--- Student Constructor (Inherits from Person) ---\n");
console.log(`
function Student(name, branch) {
    Person.call(this, name);  // Call parent constructor
    this.branch = branch;
}

// Set up prototype inheritance
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Add Student-specific methods
Student.prototype.showBranch = function() {
    return \`Branch: \${this.branch}\`;
};
`);

// --- Create Instances ---
console.log("\n--- Creating Instances ---\n");

const person1 = new Person("Alice");
const student1 = new Student("Bob", "Computer Science");
const student2 = new Student("Charlie", "Electronics");
const student3 = new Student("Diana", "Mechanical");

console.log("person1:", person1);
console.log("student1:", student1);
console.log("student2:", student2);

// --- Method Access ---
console.log("\n--- Method Access and Execution ---\n");

console.log("--- Person Methods ---");
console.log("person1.showName():", person1.showName());
console.log("person1.greet():", person1.greet());

console.log("\n--- Student Methods (Inherited from Person) ---");
console.log("student1.showName():", student1.showName());
console.log("(Inherited from Person.prototype)");

console.log("\n--- Student Methods (Own Methods) ---");
console.log("student1.showBranch():", student1.showBranch());
console.log("student1.showDetails():", student1.showDetails());

console.log("\n--- Student Methods (Overridden) ---");
console.log("student1.greet():", student1.greet());
console.log("(Overridden in Student.prototype)");

console.log("\n--- All Students ---");
console.log("student1.showDetails():", student1.showDetails());
console.log("student2.showDetails():", student2.showDetails());
console.log("student3.showDetails():", student3.showDetails());

// --- Prototype Chain Walkthrough ---
console.log("\n===== PROTOTYPE CHAIN WALKTHROUGH =====\n");

console.log("For student1.showName():");
console.log("1. Search in student1 object (not found)");
console.log("2. Search in Student.prototype (not found)");
console.log("3. Search in Person.prototype (FOUND!)");
console.log("4. Execute: return `Person name: ${this.name}`");
console.log("5. Result:", student1.showName());

console.log("\nFor student1.showBranch():");
console.log("1. Search in student1 object (not found)");
console.log("2. Search in Student.prototype (FOUND!)");
console.log("3. Execute and return result");
console.log("4. Result:", student1.showBranch());

console.log("\nFor student1.greet():");
console.log("1. Search in student1 object (not found)");
console.log("2. Search in Student.prototype (FOUND - overridden)");
console.log("3. Execute overridden version");
console.log("4. Result:", student1.greet());

// --- Verify Inheritance Chain ---
console.log("\n===== PROTOTYPE CHAIN VERIFICATION =====\n");

console.log("instanceof checks:");
console.log("student1 instanceof Student:", student1 instanceof Student);
console.log("student1 instanceof Person:", student1 instanceof Person);
console.log("student1 instanceof Object:", student1 instanceof Object);
console.log("person1 instanceof Student:", person1 instanceof Student);
console.log("person1 instanceof Person:", person1 instanceof Person);

// --- Check hasOwnProperty ---
console.log("\n--- Own Properties vs Inherited Properties ---\n");

console.log("student1 own properties:");
console.log("  hasOwnProperty('name'):", student1.hasOwnProperty('name'));
console.log("  hasOwnProperty('branch'):", student1.hasOwnProperty('branch'));
console.log("  hasOwnProperty('showName'):", student1.hasOwnProperty('showName'));

console.log("\nstudent1 can access (via prototype chain):");
console.log("  'showName' in student1:", 'showName' in student1);
console.log("  'showBranch' in student1:", 'showBranch' in student1);
console.log("  'greet' in student1:", 'greet' in student1);

// --- Prototype Chain Visualization ---
console.log("\n===== PROTOTYPE CHAIN VISUALIZATION =====\n");

console.log(`
student1 object
    ↓
Student.prototype
    ├─ constructor: Student
    ├─ showBranch: function
    ├─ showDetails: function
    └─ greet: function (overridden)
    ↓
Person.prototype
    ├─ constructor: Person
    ├─ showName: function
    └─ greet: function (original)
    ↓
Object.prototype
    ├─ toString: function
    ├─ hasOwnProperty: function
    └─ ... (other Object methods)
    ↓
null (end of chain)
`);

// --- Utility Function to Show Inheritance ---
console.log("===== SHOWING FULL INHERITANCE =====\n");

function showFullInheritance(obj, objName) {
    console.log(`\n${objName} inheritance chain:`);
    console.log(`Own properties: ${JSON.stringify(Object.getOwnPropertyNames(obj).filter(p => obj.hasOwnProperty(p)))}`);
    
    let current = obj;
    let level = 0;
    
    while (current !== null) {
        if (level === 0) {
            console.log(`├─ ${current.constructor.name} instance`);
        } else {
            console.log(`└─ ${current.constructor.name}.prototype`);
        }
        current = Object.getPrototypeOf(current);
        level++;
    }
}

showFullInheritance(student1, "student1");
showFullInheritance(person1, "person1");
