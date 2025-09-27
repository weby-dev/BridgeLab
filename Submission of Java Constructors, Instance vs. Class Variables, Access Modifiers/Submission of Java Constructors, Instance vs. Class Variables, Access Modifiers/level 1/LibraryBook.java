public class LibraryBook {
    String title;
    String author;
    double price;
    boolean available;

    // Constructor
    LibraryBook(String title, String author, double price, boolean available) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.available = available;
    }

    // Method to borrow book
    void borrowBook() {
        if (available) {
            available = false;
            System.out.println(title + " has been borrowed.");
        } else {
            System.out.println(title + " is currently not available.");
        }
    }

    void display() {
        System.out.println(title + " by " + author + " - $" + price + " | Available: " + available);
    }

    public static void main(String[] args) {
        LibraryBook lb1 = new LibraryBook("Hi", "Stuti", 250.0, true);

        lb1.display(); 
        lb1.borrowBook(); 
        lb1.borrowBook(); 
    }
}

