import java.util.Scanner;

public class QuadraticEquation {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Quadratic Equation: ax^2 + bx + c = 0");
        System.out.println("Enter the coefficients:");

        System.out.print("Enter a: ");
        double a = scanner.nextDouble();

        System.out.print("Enter b: ");
        double b = scanner.nextDouble();

        System.out.print("Enter c: ");
        double c = scanner.nextDouble();

        if (a == 0) {
            System.out.println("Error: 'a' cannot be zero for a quadratic equation.");
            scanner.close();
            return;
        }

        double[] roots = findRoots(a, b, c);

        System.out.println("\nResults for equation: " + a + "x^2 + " + b + "x + " + c + " = 0");
        System.out.println("------------------------------------------------");

        if (roots == null || roots.length == 0) {
            System.out.println("No real roots exist (complex roots).");
        } else if (roots.length == 1) {
            System.out.println("One real root: x = " + roots[0]);
        } else {
            System.out.println("Two real roots:");
            System.out.println("x1 = " + roots[0]);
            System.out.println("x2 = " + roots[1]);
        }

        scanner.close();
    }

    public static double[] findRoots(double a, double b, double c) {
        double delta = Math.pow(b, 2) - 4 * a * c;

        if (delta > 0) {
            double root1 = (-b + Math.sqrt(delta)) / (2 * a);
            double root2 = (-b - Math.sqrt(delta)) / (2 * a);
            return new double[] { root1, root2 };
        } else if (delta == 0) {
            double root = -b / (2 * a);
            return new double[] { root };
        } else {
            return new double[0];
        }
    }
}
