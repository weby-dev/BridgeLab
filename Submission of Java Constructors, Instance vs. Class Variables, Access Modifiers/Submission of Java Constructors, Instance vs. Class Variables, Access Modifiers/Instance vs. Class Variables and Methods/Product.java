public class Product {
    String productName;
    double price;
    static int totalProducts = 0;

    Product(String productName, double price) {
        this.productName = productName;
        this.price = price;
        totalProducts++;
    }

    void displayProductDetails() {
        System.out.println(productName + " - $" + price);
    }

    static void displayTotalProducts() {
        System.out.println("Total products created: " + totalProducts);
    }

    public static void main(String[] args) {
        Product p1 = new Product("Laptop", 800.0);
        Product p2 = new Product("Smartphone", 500.0);
        Product p3 = new Product("Headphones", 50.0);

        p1.displayProductDetails();
        p2.displayProductDetails();
        p3.displayProductDetails();

        Product.displayTotalProducts();
    }
}

