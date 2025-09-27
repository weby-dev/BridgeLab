public class Book {
    String title;
    String author;
    double price;

    // Default constructor
    Book() {
        title = "Unknown";
        author = "Unknown";
        price = 0.0;
    }

    // Parameterized constructor
    Book(String title, String author, double price) {
        this.title = title;   // 'this' refers to instance variable
        this.author = author;
        this.price = price;
    }

    // Method to display book details
    void display() {
        System.out.println(title + " by " + author + " - $" + price);
    }

    // Main method
    public static void main(String[] args) {
        Book b1 = new Book();  // Using default constructor
        Book b2 = new Book("1984", "George Orwell", 350.0);  // Using parameterized constructor

        b1.display();  // Output: Unknown by Unknown - $0.0
        b2.display();  // Output: 1984 by George Orwell - $350.0
    }
}

