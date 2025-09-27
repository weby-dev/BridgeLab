import java.util.Scanner;

public class CollinearPoints {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter coordinates for 3 points:");

        System.out.print("Enter x1: ");
        double x1 = scanner.nextDouble();
        System.out.print("Enter y1: ");
        double y1 = scanner.nextDouble();

        System.out.print("Enter x2: ");
        double x2 = scanner.nextDouble();
        System.out.print("Enter y2: ");
        double y2 = scanner.nextDouble();

        System.out.print("Enter x3: ");
        double x3 = scanner.nextDouble();
        System.out.print("Enter y3: ");
        double y3 = scanner.nextDouble();

        System.out.println("\nTesting with sample points A(2,4), B(4,6), C(6,8):");
        boolean sampleCollinearSlope = areCollinearBySlope(2, 4, 4, 6, 6, 8);
        boolean sampleCollinearArea = areCollinearByArea(2, 4, 4, 6, 6, 8);

        System.out.println("Using slope formula: " + (sampleCollinearSlope ? "Collinear" : "Not collinear"));
        System.out.println("Using area formula: " + (sampleCollinearArea ? "Collinear" : "Not collinear"));

        System.out.println("\nTesting with your input points:");
        boolean userCollinearSlope = areCollinearBySlope(x1, y1, x2, y2, x3, y3);
        boolean userCollinearArea = areCollinearByArea(x1, y1, x2, y2, x3, y3);

        System.out.println("Using slope formula: " + (userCollinearSlope ? "Collinear" : "Not collinear"));
        System.out.println("Using area formula: " + (userCollinearArea ? "Collinear" : "Not collinear"));

        scanner.close();
    }

    public static boolean areCollinearBySlope(double x1, double y1, double x2, double y2, double x3, double y3) {
        double slopeAB = (y2 - y1) / (x2 - x1);
        double slopeBC = (y3 - y2) / (x3 - x2);
        double slopeAC = (y3 - y1) / (x3 - x1);

        double tolerance = 1e-10;
        return Math.abs(slopeAB - slopeBC) < tolerance && Math.abs(slopeBC - slopeAC) < tolerance;
    }

    public static boolean areCollinearByArea(double x1, double y1, double x2, double y2, double x3, double y3) {
        double area = 0.5 * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));

        double tolerance = 1e-10;
        return Math.abs(area) < tolerance;
    }
}
