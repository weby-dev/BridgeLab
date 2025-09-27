import java.util.Scanner;

public class NumberAnalyzer {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = new int[5];

        for (int i = 0; i < numbers.length; i++) {
            System.out.print("Enter number " + (i + 1) + ": ");
            numbers[i] = scanner.nextInt();
        }

        System.out.println("\nNumber Analysis Results:");
        System.out.println("----------------------");

        for (int i = 0; i < numbers.length; i++) {
            System.out.print("Number " + (i + 1) + " (" + numbers[i] + "): ");

            if (isPositive(numbers[i])) {
                System.out.print("Positive, ");
                if (isEven(numbers[i])) {
                    System.out.println("Even");
                } else {
                    System.out.println("Odd");
                }
            } else {
                System.out.println("Negative");
            }
        }

        System.out.println("\nFirst and Last Element Comparison:");
        System.out.println("---------------------------------");
        int comparison = compare(numbers[0], numbers[numbers.length - 1]);

        if (comparison == 1) {
            System.out.println("First element (" + numbers[0] + ") is greater than last element ("
                    + numbers[numbers.length - 1] + ")");
        } else if (comparison == 0) {
            System.out.println("First element (" + numbers[0] + ") is equal to last element ("
                    + numbers[numbers.length - 1] + ")");
        } else {
            System.out.println("First element (" + numbers[0] + ") is less than last element ("
                    + numbers[numbers.length - 1] + ")");
        }

        scanner.close();
    }

    public static boolean isPositive(int number) {
        return number > 0;
    }

    public static boolean isEven(int number) {
        return number % 2 == 0;
    }

    public static int compare(int number1, int number2) {
        if (number1 > number2) {
            return 1;
        } else if (number1 == number2) {
            return 0;
        } else {
            return -1;
        }
    }
}
