import java.util.Scanner;

public class EuclideanDistance {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter coordinates for 2 points:");

        System.out.print("Enter x1: ");
        double x1 = scanner.nextDouble();
        System.out.print("Enter y1: ");
        double y1 = scanner.nextDouble();

        System.out.print("Enter x2: ");
        double x2 = scanner.nextDouble();
        System.out.print("Enter y2: ");
        double y2 = scanner.nextDouble();

        double distance = findEuclideanDistance(x1, y1, x2, y2);
        System.out.println("\nEuclidean Distance: " + distance);

        double[] lineEquation = findLineEquation(x1, y1, x2, y2);
        double slope = lineEquation[0];
        double yIntercept = lineEquation[1];

        System.out.println("\nLine Equation:");
        System.out.println("Slope (m): " + slope);
        System.out.println("Y-intercept (b): " + yIntercept);
        System.out.println("Equation: y = " + slope + "x + " + yIntercept);

        scanner.close();
    }

    public static double findEuclideanDistance(double x1, double y1, double x2, double y2) {
        double dx = x2 - x1;
        double dy = y2 - y1;
        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    }

    public static double[] findLineEquation(double x1, double y1, double x2, double y2) {
        double slope = (y2 - y1) / (x2 - x1);

        double yIntercept = y1 - slope * x1;

        return new double[] { slope, yIntercept };
    }
}
