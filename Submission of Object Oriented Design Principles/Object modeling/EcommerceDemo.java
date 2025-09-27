import java.util.*;

class Product {
    String name;
    Product(String name) {
        this.name = name;
    }
}

class Order {
    List<Product> products = new ArrayList<>();
    void addProduct(Product p) {
        products.add(p);
    }
    void showOrder() {
        for(Product p : products) {
            System.out.println("Ordered: " + p.name);
        }
    }
}

class CustomerE {
    String name;
    CustomerE(String name) {
        this.name = name;
    }
    void placeOrder(Order o) {
        System.out.println(name + " placed an order");
        o.showOrder();
    }
}

public class EcommerceDemo {
    public static void main(String[] args) {
        CustomerE c = new CustomerE("Riya");
        Order o = new Order();
        o.addProduct(new Product("Laptop"));
        o.addProduct(new Product("Phone"));
        c.placeOrder(o);
    }
}
