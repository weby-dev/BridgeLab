public class Circle {
    double radius;

    // Default constructor
    Circle() {
        this(1.0); 
    }

    // Parameterized constructor
    Circle(double radius) {
        this.radius = radius;
    }

    // Method to display radius
    void display() {
        System.out.println("Circle radius: " + radius);
    }

    // Main method
    public static void main(String[] args) {
        Circle c1 = new Circle();
        Circle c2 = new Circle(5.5);

        c1.display();
        c2.display();
    }
}

