public class Vehicle {
    String ownerName;
    String vehicleType;
    static double registrationFee = 500.0;

    Vehicle(String ownerName, String vehicleType) {
        this.ownerName = ownerName;
        this.vehicleType = vehicleType;
    }

    void displayVehicleDetails() {
        System.out.println(ownerName + " owns a " + vehicleType + " | Registration Fee: $" + registrationFee);
    }

    static void updateRegistrationFee(double newFee) {
        registrationFee = newFee;
        System.out.println("Registration fee updated to: $" + registrationFee);
    }

    public static void main(String[] args) {
        Vehicle v1 = new Vehicle("Stuti", "Car");
        Vehicle v2 = new Vehicle("Sarthak", "Motorcycle");

        v1.displayVehicleDetails();
        v2.displayVehicleDetails();

        Vehicle.updateRegistrationFee(600.0);

        v1.displayVehicleDetails();
        v2.displayVehicleDetails();
    }
}
