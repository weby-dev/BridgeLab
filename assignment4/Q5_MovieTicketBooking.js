/**
 * Q5: Movie Ticket Booking
 * Validates user input and creates booking objects
 */

// Regular expressions for validation
const bookingValidationRules = {
    // Name: only alphabets and spaces
    name: /^[a-zA-Z\s]+$/,
    
    // Email: valid email format
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    
    // Seats: number between 1-10
    seats: /^([1-9]|10)$/
};

/**
 * MovieBooking class for ticket booking
 */
class MovieBooking {
    constructor(name, email, movieName, seats) {
        this.name = name;
        this.email = email;
        this.movieName = movieName;
        this.seats = seats;
        this.bookingId = this.generateBookingId();
        this.bookingDate = new Date().toLocaleDateString();
        this.bookingTime = new Date().toLocaleTimeString();
    }
    
    /**
     * Generate unique booking ID
     * @returns {string} - Unique booking ID
     */
    generateBookingId() {
        return "BK" + Date.now() + Math.random().toString(36).substr(2, 9).toUpperCase();
    }
    
    /**
     * Calculate ticket price
     * Base price: ₹250 per ticket
     * @returns {number} - Total ticket price
     */
    calculateTicketPrice() {
        const pricePerTicket = 250;
        return this.seats * pricePerTicket;
    }
    
    /**
     * Generate ticket details
     * @returns {object} - Ticket details object
     */
    getTicketDetails() {
        const totalPrice = this.calculateTicketPrice();
        const gst = (totalPrice * 0.18).toFixed(2);
        const finalPrice = (totalPrice + parseFloat(gst)).toFixed(2);
        
        return {
            bookingId: this.bookingId,
            customerName: this.name,
            customerEmail: this.email,
            movieName: this.movieName,
            numberOfSeats: this.seats,
            pricePerTicket: 250,
            subtotal: totalPrice.toFixed(2),
            gst: gst,
            finalPrice: finalPrice,
            bookingDate: this.bookingDate,
            bookingTime: this.bookingTime
        };
    }
    
    /**
     * Display ticket in formatted way
     */
    displayTicket() {
        const details = this.getTicketDetails();
        
        const ticket = `
╔════════════════════════════════════════╗
║         🎬 MOVIE TICKET BOOKING         ║
╚════════════════════════════════════════╝

📋 BOOKING DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Booking ID:        ${details.bookingId}
Customer Name:     ${details.customerName}
Email:             ${details.customerEmail}
Movie Name:        ${details.movieName}
Booking Date:      ${details.bookingDate}
Booking Time:      ${details.bookingTime}

🎟️  TICKET DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Number of Seats:   ${details.numberOfSeats}
Price per Ticket:  ₹${details.pricePerTicket}
Subtotal:          ₹${details.subtotal}
GST (18%):         ₹${details.gst}
Total Amount:      ₹${details.finalPrice}

╚════════════════════════════════════════╝
        `;
        
        return ticket;
    }
}

/**
 * Movie Booking Validator
 */
class MovieBookingValidator {
    constructor() {
        this.errors = {};
    }
    
    /**
     * Validate name field
     * @param {string} name - Customer name
     * @returns {boolean} - True if valid
     */
    validateName(name) {
        if (!name || name.trim().length === 0) {
            this.errors.name = "Name is required";
            return false;
        }
        if (!bookingValidationRules.name.test(name)) {
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
     * @param {string} email - Customer email
     * @returns {boolean} - True if valid
     */
    validateEmail(email) {
        if (!email || email.trim().length === 0) {
            this.errors.email = "Email is required";
            return false;
        }
        if (!bookingValidationRules.email.test(email)) {
            this.errors.email = "Invalid email format (use: user@example.com)";
            return false;
        }
        return true;
    }
    
    /**
     * Validate seats field
     * @param {string|number} seats - Number of seats
     * @returns {boolean} - True if valid
     */
    validateSeats(seats) {
        if (seats === "" || seats === null || seats === undefined) {
            this.errors.seats = "Seats are required";
            return false;
        }
        
        const seatsStr = String(seats).trim();
        
        if (!bookingValidationRules.seats.test(seatsStr)) {
            this.errors.seats = "Seats must be between 1 and 10";
            return false;
        }
        return true;
    }
    
    /**
     * Validate entire booking
     * @param {object} bookingData - Booking data object
     * @returns {boolean} - True if all fields are valid
     */
    validateBooking(bookingData) {
        this.errors = {};
        
        const isNameValid = this.validateName(bookingData.name);
        const isEmailValid = this.validateEmail(bookingData.email);
        const isSeatsValid = this.validateSeats(bookingData.seats);
        
        return isNameValid && isEmailValid && isSeatsValid;
    }
    
    /**
     * Get validation errors
     * @returns {object} - Error messages
     */
    getErrors() {
        return this.errors;
    }
}

console.log("===== MOVIE TICKET BOOKING SYSTEM =====\n");

// Test cases
const bookingTestCases = [
    {
        name: "Valid Booking",
        data: {
            name: "John Doe",
            email: "john@example.com",
            movieName: "Avengers: Endgame",
            seats: "5"
        }
    },
    {
        name: "Invalid Name (with numbers)",
        data: {
            name: "John123",
            email: "john@example.com",
            movieName: "Spider-Man",
            seats: "3"
        }
    },
    {
        name: "Invalid Email",
        data: {
            name: "Jane Smith",
            email: "jane.invalid.com",
            movieName: "Black Widow",
            seats: "2"
        }
    },
    {
        name: "Invalid Seats (0)",
        data: {
            name: "Bob Johnson",
            email: "bob@example.com",
            movieName: "Thor",
            seats: "0"
        }
    },
    {
        name: "Invalid Seats (more than 10)",
        data: {
            name: "Alice Wonder",
            email: "alice@example.com",
            movieName: "Doctor Strange",
            seats: "15"
        }
    },
    {
        name: "Valid Booking - 1 seat",
        data: {
            name: "Charlie Brown",
            email: "charlie@example.com",
            movieName: "Guardians of Galaxy",
            seats: "1"
        }
    },
    {
        name: "Valid Booking - 10 seats",
        data: {
            name: "Diana Prince",
            email: "diana@example.com",
            movieName: "Wonder Woman",
            seats: "10"
        }
    },
    {
        name: "Empty name field",
        data: {
            name: "",
            email: "user@example.com",
            movieName: "Captain America",
            seats: "4"
        }
    }
];

// Store successful bookings
const successfulBookings = [];
let bookingCounter = 0;

// Process each test case
bookingTestCases.forEach((testCase, index) => {
    console.log(`\n${"=".repeat(50)}`);
    console.log(`TEST CASE ${index + 1}: ${testCase.name}`);
    console.log("=".repeat(50));
    
    const validator = new MovieBookingValidator();
    const isValid = validator.validateBooking(testCase.data);
    
    // Display input data
    console.log("\nInput Data:");
    console.log(`  Name: ${testCase.data.name}`);
    console.log(`  Email: ${testCase.data.email}`);
    console.log(`  Movie: ${testCase.data.movieName}`);
    console.log(`  Seats: ${testCase.data.seats}`);
    
    if (isValid) {
        // Create booking object
        const booking = new MovieBooking(
            testCase.data.name,
            testCase.data.email,
            testCase.data.movieName,
            parseInt(testCase.data.seats)
        );
        
        successfulBookings.push(booking.getTicketDetails());
        bookingCounter++;
        
        console.log("\n✓ BOOKING SUCCESSFUL\n");
        console.log(booking.displayTicket());
    } else {
        // Display validation errors
        console.log("\n✗ BOOKING FAILED - Validation Errors:\n");
        const errors = validator.getErrors();
        Object.entries(errors).forEach(([field, error]) => {
            console.log(`  • ${field.toUpperCase()}: ${error}`);
        });
    }
});

// Summary report
console.log("\n" + "=".repeat(50));
console.log("📊 BOOKING SUMMARY REPORT");
console.log("=".repeat(50) + "\n");

console.log(`Total Test Cases: ${bookingTestCases.length}`);
console.log(`Successful Bookings: ${successfulBookings.length}`);
console.log(`Failed Bookings: ${bookingTestCases.length - successfulBookings.length}`);
console.log(`Success Rate: ${((successfulBookings.length / bookingTestCases.length) * 100).toFixed(2)}%\n`);

if (successfulBookings.length > 0) {
    console.log("--- Successful Bookings Summary ---\n");
    console.table(successfulBookings);
    
    // Calculate total revenue
    const totalRevenue = successfulBookings.reduce((sum, booking) => {
        return sum + parseFloat(booking.finalPrice);
    }, 0);
    
    const totalSeats = successfulBookings.reduce((sum, booking) => {
        return sum + booking.numberOfSeats;
    }, 0);
    
    console.log(`\nTotal Revenue Generated: ₹${totalRevenue.toFixed(2)}`);
    console.log(`Total Seats Booked: ${totalSeats}`);
}
