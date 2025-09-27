public class CarRental {
    String customerName;
    String carModel;
    int rentalDays;

    // Default constructor
    CarRental() {
        customerName = "Unknown";
        carModel = "Generic";
        rentalDays = 1;
    }

    // Parameterized constructor
    CarRental(String customerName, String carModel, int rentalDays) {
        this.customerName = customerName;
        this.carModel = carModel;
        this.rentalDays = rentalDays;
    }

    // Method to calculate total cost
    double calculateCost() {
        int ratePerDay = 1000;
        return rentalDays * ratePerDay;
    }

    void display() {
        System.out.println(customerName + " rented " + carModel + " for " + rentalDays +
                           " days. Total cost: ₹" + calculateCost());
    }

    public static void main(String[] args) {
        CarRental r1 = new CarRental();
        CarRental r2 = new CarRental("Stuti", "Creta", 5);

        r1.display();
        r2.display();
    }
}

