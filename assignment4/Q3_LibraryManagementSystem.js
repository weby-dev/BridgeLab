/**
 * Q3: Library Management System
 * Manages books with issue and return functionality
 */

// Book class definition
class Book {
    // Constructor to initialize book properties
    constructor(title, author, isbn, year = 2024) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.year = year;
        this.isIssued = false;
        this.issuedTo = null;
        this.issueDate = null;
    }
    
    /**
     * Issue a book to a member
     * @param {string} memberName - Name of the member
     * @returns {boolean} - True if successfully issued
     */
    issueBook(memberName) {
        if (this.isIssued) {
            console.log(`✗ "${this.title}" is already issued`);
            return false;
        }
        
        this.isIssued = true;
        this.issuedTo = memberName;
        this.issueDate = new Date().toLocaleDateString();
        console.log(`✓ "${this.title}" issued to ${memberName}`);
        return true;
    }
    
    /**
     * Return a book from a member
     * @returns {boolean} - True if successfully returned
     */
    returnBook() {
        if (!this.isIssued) {
            console.log(`✗ "${this.title}" was not issued`);
            return false;
        }
        
        const returnedFrom = this.issuedTo;
        this.isIssued = false;
        this.issuedTo = null;
        this.issueDate = null;
        console.log(`✓ "${this.title}" returned from ${returnedFrom}`);
        return true;
    }
    
    /**
     * Display book details
     * @returns {string} - Formatted book information
     */
    displayDetails() {
        const status = this.isIssued ? `Issued to: ${this.issuedTo} (${this.issueDate})` : "Available";
        
        return `
Title: ${this.title}
Author: ${this.author}
ISBN: ${this.isbn}
Year: ${this.year}
Status: ${status}
        `.trim();
    }
    
    /**
     * Search book by ISBN
     * @param {string} searchISBN - ISBN to search
     * @returns {boolean} - True if ISBN matches
     */
    matchISBN(searchISBN) {
        return this.isbn === searchISBN;
    }
}

// Library class to manage books
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    
    /**
     * Add a book to the library
     * @param {Book} book - Book object to add
     */
    addBook(book) {
        this.books.push(book);
    }
    
    /**
     * Get all available books (not issued)
     * @returns {array} - Array of available books
     */
    getAvailableBooks() {
        return this.books.filter(book => !book.isIssued);
    }
    
    /**
     * Get all issued books
     * @returns {array} - Array of issued books
     */
    getIssuedBooks() {
        return this.books.filter(book => book.isIssued);
    }
    
    /**
     * Search and issue a book by ISBN
     * @param {string} isbn - ISBN of the book
     * @param {string} memberName - Member name
     * @returns {boolean} - True if book was issued
     */
    issueBookByISBN(isbn, memberName) {
        const book = this.books.find(b => b.matchISBN(isbn));
        
        if (!book) {
            console.log(`✗ Book with ISBN ${isbn} not found in library`);
            return false;
        }
        
        return book.issueBook(memberName);
    }
    
    /**
     * Return a book by ISBN
     * @param {string} isbn - ISBN of the book
     * @returns {boolean} - True if book was returned
     */
    returnBookByISBN(isbn) {
        const book = this.books.find(b => b.matchISBN(isbn));
        
        if (!book) {
            console.log(`✗ Book with ISBN ${isbn} not found in library`);
            return false;
        }
        
        return book.returnBook();
    }
    
    /**
     * Display all books in the library
     */
    displayAllBooks() {
        console.log(`\n📚 ${this.name} - All Books\n`);
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.displayDetails()}\n`);
        });
    }
}

console.log("===== LIBRARY MANAGEMENT SYSTEM =====\n");

// Create a library instance
const library = new Library("City Public Library");

// Add books to the library
const books = [
    new Book("The Great Gatsby", "F. Scott Fitzgerald", "ISBN001", 1925),
    new Book("To Kill a Mockingbird", "Harper Lee", "ISBN002", 1960),
    new Book("1984", "George Orwell", "ISBN003", 1949),
    new Book("Pride and Prejudice", "Jane Austen", "ISBN004", 1813),
    new Book("The Catcher in the Rye", "J.D. Salinger", "ISBN005", 1951),
    new Book("Brave New World", "Aldous Huxley", "ISBN006", 1932),
    new Book("The Hobbit", "J.R.R. Tolkien", "ISBN007", 1937)
];

books.forEach(book => library.addBook(book));

// Display all books
library.displayAllBooks();

// Display available books
console.log("--- Available Books (Not Issued) ---");
const availableBooks = library.getAvailableBooks();
availableBooks.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title} by ${book.author}`);
});
console.log(`Total: ${availableBooks.length} books\n`);

// Issue books
console.log("--- Issuing Books ---");
library.issueBookByISBN("ISBN001", "Alice Smith");
library.issueBookByISBN("ISBN003", "Bob Johnson");
library.issueBookByISBN("ISBN005", "Charlie Brown");

// Display available books after issuing
console.log("\n--- Available Books After Issuing ---");
const updatedAvailable = library.getAvailableBooks();
updatedAvailable.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title}`);
});
console.log(`Total: ${updatedAvailable.length} books\n`);

// Display issued books
console.log("--- Issued Books ---");
const issuedBooks = library.getIssuedBooks();
issuedBooks.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title} (Issued to: ${book.issuedTo})`);
});
console.log(`Total: ${issuedBooks.length} books\n`);

// Return a book
console.log("--- Returning Books ---");
library.returnBookByISBN("ISBN001");
library.returnBookByISBN("ISBN003");

// Display final status
console.log("\n--- Final Library Status ---");
console.log(`Available Books: ${library.getAvailableBooks().length}`);
console.log(`Issued Books: ${library.getIssuedBooks().length}`);
console.log(`Total Books: ${library.books.length}`);
