import java.util.Scanner;

public class RandomNumberAnalyzer {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the number of 4-digit random numbers to generate: ");
        int size = scanner.nextInt();

        int[] randomNumbers = generate4DigitRandomArray(size);

        System.out.println("\nGenerated 4-digit random numbers:");
        for (int i = 0; i < randomNumbers.length; i++) {
            System.out.print(randomNumbers[i]);
            if (i < randomNumbers.length - 1) {
                System.out.print(", ");
            }
        }
        System.out.println();

        double[] results = findAverageMinMax(randomNumbers);

        System.out.println("\nAnalysis Results:");
        System.out.println("-----------------");
        System.out.println("Average: " + results[0]);
        System.out.println("Minimum: " + (int) results[1]);
        System.out.println("Maximum: " + (int) results[2]);

        scanner.close();
    }

    public static int[] generate4DigitRandomArray(int size) {
        int[] numbers = new int[size];

        for (int i = 0; i < size; i++) {
            numbers[i] = (int) (Math.random() * 9000) + 1000;
        }

        return numbers;
    }

    public static double[] findAverageMinMax(int[] numbers) {
        if (numbers.length == 0) {
            return new double[] { 0, 0, 0 };
        }

        double sum = 0;
        int min = numbers[0];
        int max = numbers[0];

        for (int number : numbers) {
            sum += number;
            min = Math.min(min, number);
            max = Math.max(max, number);
        }

        double average = sum / numbers.length;

        return new double[] { average, min, max };
    }
}
