/**
 * Q2: Student Form Validator
 * Validates student registration form using RegExp
 * NOTE: This is a Node.js/Browser console demonstration
 * For browser use, create corresponding HTML with form elements
 */

// Regular expressions for validation
const validationRules = {
    // Name: only alphabets and spaces
    name: /^[a-zA-Z\s]+$/,
    
    // Email: valid email format
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    
    // Phone: exactly 10 digits
    phone: /^\d{10}$/,
    
    // Password: at least 1 uppercase, 1 number, 1 special character, minimum 8 chars
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
};

/**
 * Validator class for student form validation
 */
class StudentFormValidator {
    constructor() {
        this.errors = {};
        this.formData = {};
    }
    
    /**
     * Validate name field
     * @param {string} name - Student name
     * @returns {boolean} - True if valid
     */
    validateName(name) {
        if (!name || name.trim().length === 0) {
            this.errors.name = "Name is required";
            return false;
        }
        if (!validationRules.name.test(name)) {
            this.errors.name = "Name must contain only alphabets and spaces";
            return false;
        }
        if (name.trim().length < 3) {
            this.errors.name = "Name must be at least 3 characters";
            return false;
        }
        return true;
    }
    
    /**
     * Validate email field
     * @param {string} email - Student email
     * @returns {boolean} - True if valid
     */
    validateEmail(email) {
        if (!email || email.trim().length === 0) {
            this.errors.email = "Email is required";
            return false;
        }
        if (!validationRules.email.test(email)) {
            this.errors.email = "Invalid email format (use: example@domain.com)";
            return false;
        }
        return true;
    }
    
    /**
     * Validate phone field
     * @param {string} phone - Student phone number
     * @returns {boolean} - True if valid
     */
    validatePhone(phone) {
        if (!phone || phone.trim().length === 0) {
            this.errors.phone = "Phone number is required";
            return false;
        }
        if (!validationRules.phone.test(phone)) {
            this.errors.phone = "Phone must be exactly 10 digits";
            return false;
        }
        return true;
    }
    
    /**
     * Validate password field
     * @param {string} password - Student password
     * @returns {boolean} - True if valid
     */
    validatePassword(password) {
        if (!password || password.length === 0) {
            this.errors.password = "Password is required";
            return false;
        }
        if (password.length < 8) {
            this.errors.password = "Password must be at least 8 characters";
            return false;
        }
        if (!validationRules.password.test(password)) {
            this.errors.password = "Password must contain 1 uppercase, 1 number, and 1 special character (@$!%*?&)";
            return false;
        }
        return true;
    }
    
    /**
     * Validate entire form
     * @param {object} formData - Form data object
     * @returns {boolean} - True if all fields are valid
     */
    validateForm(formData) {
        this.errors = {};
        this.formData = formData;
        
        const isNameValid = this.validateName(formData.name);
        const isEmailValid = this.validateEmail(formData.email);
        const isPhoneValid = this.validatePhone(formData.phone);
        const isPasswordValid = this.validatePassword(formData.password);
        
        return isNameValid && isEmailValid && isPhoneValid && isPasswordValid;
    }
    
    /**
     * Get validation errors
     * @returns {object} - Object containing error messages
     */
    getErrors() {
        return this.errors;
    }
}

console.log("===== STUDENT FORM VALIDATOR =====\n");

// Test cases
const testCases = [
    {
        name: "Valid Form",
        data: {
            name: "John Doe",
            email: "john@example.com",
            phone: "9876543210",
            password: "SecurePass123!"
        }
    },
    {
        name: "Invalid Name (with numbers)",
        data: {
            name: "John123",
            email: "john@example.com",
            phone: "9876543210",
            password: "SecurePass123!"
        }
    },
    {
        name: "Invalid Email",
        data: {
            name: "Jane Doe",
            email: "jane.invalid.com",
            phone: "8765432109",
            password: "SecurePass456!"
        }
    },
    {
        name: "Invalid Phone (less than 10 digits)",
        data: {
            name: "Bob Smith",
            email: "bob@example.com",
            phone: "987654321",
            password: "SecurePass789!"
        }
    },
    {
        name: "Invalid Password (no uppercase)",
        data: {
            name: "Alice Wonder",
            email: "alice@example.com",
            phone: "7654321098",
            password: "securepass123!"
        }
    },
    {
        name: "Invalid Password (no special char)",
        data: {
            name: "Charlie Brown",
            email: "charlie@example.com",
            phone: "6543210987",
            password: "SecurePass123"
        }
    }
];

// Run test cases
testCases.forEach((testCase, index) => {
    console.log(`\n--- Test Case ${index + 1}: ${testCase.name} ---`);
    
    const validator = new StudentFormValidator();
    const isValid = validator.validateForm(testCase.data);
    
    // Display form data
    console.log("Form Data:");
    Object.entries(testCase.data).forEach(([key, value]) => {
        console.log(`  ${key}: ${value}`);
    });
    
    // Display validation result
    if (isValid) {
        console.log("\n✓ VALID - All fields passed validation");
    } else {
        console.log("\n✗ INVALID - Errors found:");
        const errors = validator.getErrors();
        Object.entries(errors).forEach(([field, error]) => {
            console.log(`  • ${field}: ${error}`);
        });
    }
});

// Validation rules reference
console.log("\n===== VALIDATION RULES REFERENCE =====");
console.log("Name: Alphabets and spaces only (min 3 characters)");
console.log("Email: Valid format (example@domain.com)");
console.log("Phone: Exactly 10 digits");
console.log("Password: Min 8 chars, 1 uppercase, 1 number, 1 special char (@$!%*?&)");
