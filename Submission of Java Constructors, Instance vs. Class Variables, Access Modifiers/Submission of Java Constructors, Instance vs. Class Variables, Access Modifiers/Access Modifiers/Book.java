public class Book {
    public String ISBN;
    protected String title;
    private String author;

    Book(String ISBN, String title, String author) {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void display() {
        System.out.println("ISBN: " + ISBN + ", Title: " + title + ", Author: " + author);
    }

    public static void main(String[] args) {
        EBook ebook = new EBook("123-456", "Java Programming", "John Doe", 2.5);
        ebook.display();
        System.out.println("File size: " + ebook.fileSize + " MB");
    }
}

class EBook extends Book {
    double fileSize; // in MB

    EBook(String ISBN, String title, String author, double fileSize) {
        super(ISBN, title, author);
        this.fileSize = fileSize;
    }

    void showBookInfo() {
        System.out.println("EBook ISBN: " + ISBN + ", Title: " + title);
    }
}

