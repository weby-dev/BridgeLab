import java.util.Scanner;

public class Trigonometry {
    public static double[] calculateTrigonometricFunctions(double angle) {
        double rad = Math.toRadians(angle);
        return new double[] {
                Math.sin(rad),
                Math.cos(rad),
                Math.tan(rad)
        };
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter angle in degrees: ");
        double angle = sc.nextDouble();

        double[] result = calculateTrigonometricFunctions(angle);
        System.out.println("sin(" + angle + ") = " + result[0]);
        System.out.println("cos(" + angle + ") = " + result[1]);
        System.out.println("tan(" + angle + ") = " + result[2]);
    }
}
