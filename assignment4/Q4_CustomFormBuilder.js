/**
 * Q4: Custom Form Builder
 * Builds dynamic forms using FormBuilder class
 * Includes both HTML generation and form data collection
 */

// FormBuilder class for dynamic form generation
class FormBuilder {
    constructor(formId = "dynamicForm", formTitle = "Form") {
        this.formId = formId;
        this.formTitle = formTitle;
        this.fields = [];
        this.formData = {};
    }
    
    /**
     * Add a field to the form
     * @param {object} fieldConfig - Field configuration object
     */
    addField(fieldConfig) {
        // Set default values
        const field = {
            name: fieldConfig.name || `field_${this.fields.length}`,
            type: fieldConfig.type || "text",
            label: fieldConfig.label || fieldConfig.name || "Field",
            placeholder: fieldConfig.placeholder || "",
            required: fieldConfig.required || false,
            value: fieldConfig.value || ""
        };
        
        this.fields.push(field);
    }
    
    /**
     * Add multiple fields to the form
     * @param {array} fieldsArray - Array of field configuration objects
     */
    addFields(fieldsArray) {
        fieldsArray.forEach(field => this.addField(field));
    }
    
    /**
     * Generate HTML for the form
     * @returns {string} - HTML string for the form
     */
    generateHTML() {
        let formHTML = `
<div class="form-container">
    <h2>${this.formTitle}</h2>
    <form id="${this.formId}" class="custom-form">
        `;
        
        // Add each field
        this.fields.forEach(field => {
            formHTML += this.generateFieldHTML(field);
        });
        
        // Add submit button
        formHTML += `
        <div class="form-group">
            <button type="submit" class="submit-btn">Submit</button>
            <button type="reset" class="reset-btn">Clear</button>
        </div>
    </form>
</div>
        `;
        
        return formHTML;
    }
    
    /**
     * Generate HTML for a single field
     * @param {object} field - Field configuration
     * @returns {string} - HTML for the field
     */
    generateFieldHTML(field) {
        const requiredAttr = field.required ? "required" : "";
        const requiredSymbol = field.required ? "<span class='required'>*</span>" : "";
        
        let fieldHTML = `
        <div class="form-group">
            <label for="${field.name}">${field.label} ${requiredSymbol}</label>
            `;
        
        // Generate appropriate input based on type
        if (field.type === "textarea") {
            fieldHTML += `<textarea 
                id="${field.name}" 
                name="${field.name}" 
                placeholder="${field.placeholder}"
                ${requiredAttr}
            ></textarea>`;
        } else if (field.type === "select") {
            fieldHTML += `<select 
                id="${field.name}" 
                name="${field.name}" 
                ${requiredAttr}
            >`;
            
            if (field.options) {
                field.options.forEach(option => {
                    fieldHTML += `<option value="${option.value}">${option.label}</option>`;
                });
            }
            
            fieldHTML += `</select>`;
        } else {
            fieldHTML += `<input 
                type="${field.type}" 
                id="${field.name}" 
                name="${field.name}" 
                placeholder="${field.placeholder}"
                value="${field.value}"
                ${requiredAttr}
            />`;
        }
        
        fieldHTML += `
        </div>
        `;
        
        return fieldHTML;
    }
    
    /**
     * Get form data from submitted form
     * @returns {object} - Object containing all form field values
     */
    getFormData() {
        const formElement = document.getElementById(this.formId);
        
        if (!formElement) {
            console.error(`Form with ID ${this.formId} not found`);
            return null;
        }
        
        const formDataObj = new FormData(formElement);
        this.formData = Object.fromEntries(formDataObj);
        
        return this.formData;
    }
    
    /**
     * Display form data
     */
    displayFormData() {
        console.log("\n--- Form Data Submitted ---");
        console.table(this.formData);
    }
}

console.log("===== CUSTOM FORM BUILDER =====\n");

// Example 1: Student Registration Form
console.log("--- Example 1: Student Registration Form ---\n");

const studentForm = new FormBuilder("studentForm", "Student Registration");

studentForm.addFields([
    { name: "firstName", type: "text", label: "First Name", placeholder: "Enter first name", required: true },
    { name: "lastName", type: "text", label: "Last Name", placeholder: "Enter last name", required: true },
    { name: "email", type: "email", label: "Email Address", placeholder: "user@example.com", required: true },
    { name: "phone", type: "tel", label: "Phone Number", placeholder: "10-digit number", required: true },
    { name: "department", type: "select", label: "Department", required: true,
      options: [
          { value: "", label: "Select Department" },
          { value: "cs", label: "Computer Science" },
          { value: "ec", label: "Electronics" },
          { value: "me", label: "Mechanical" }
      ]
    },
    { name: "address", type: "textarea", label: "Address", placeholder: "Enter your full address", required: true }
]);

const studentHTML = studentForm.generateHTML();
console.log("Generated HTML:");
console.log(studentHTML);

// Example 2: Product Feedback Form
console.log("\n--- Example 2: Product Feedback Form ---\n");

const feedbackForm = new FormBuilder("feedbackForm", "Product Feedback");

feedbackForm.addFields([
    { name: "productName", type: "text", label: "Product Name", placeholder: "What product?", required: true },
    { name: "rating", type: "select", label: "Rating", required: true,
      options: [
          { value: "", label: "Select rating" },
          { value: "1", label: "Poor" },
          { value: "2", label: "Average" },
          { value: "3", label: "Good" },
          { value: "4", label: "Very Good" },
          { value: "5", label: "Excellent" }
      ]
    },
    { name: "feedback", type: "textarea", label: "Your Feedback", placeholder: "Share your experience", required: true },
    { name: "email", type: "email", label: "Email", placeholder: "user@example.com", required: false }
]);

const feedbackHTML = feedbackForm.generateHTML();
console.log("Generated HTML:");
console.log(feedbackHTML);

// Example 3: Contact Form
console.log("\n--- Example 3: Simple Contact Form ---\n");

const contactForm = new FormBuilder("contactForm", "Contact Us");

contactForm.addFields([
    { name: "name", type: "text", label: "Full Name", placeholder: "Your name", required: true },
    { name: "email", type: "email", label: "Email", placeholder: "your@email.com", required: true },
    { name: "subject", type: "text", label: "Subject", placeholder: "Message subject", required: true },
    { name: "message", type: "textarea", label: "Message", placeholder: "Your message here", required: true }
]);

const contactHTML = contactForm.generateHTML();
console.log("Generated HTML:");
console.log(contactHTML);

// Demonstration of form data retrieval (Node.js environment simulation)
console.log("\n--- Form Data Retrieval Example ---\n");
console.log("When a form is submitted, the getFormData() method returns:");
console.log(`
{
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  phone: "9876543210",
  department: "cs",
  address: "123 Main Street, City"
}
`);

// CSS Styling for forms (console reference)
console.log("\n--- CSS Styling Reference ---");
const cssExample = `
.form-container {
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.form-container h2 {
    text-align: center;
    color: #333;
}

.custom-form {
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
}

.form-group input,
.form-group textarea,
.form-group select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: Arial, sans-serif;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
    outline: none;
    border-color: #4CAF50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
}

.submit-btn {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
}

.reset-btn {
    padding: 10px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
}

.required {
    color: red;
}
`;

console.log(cssExample);
