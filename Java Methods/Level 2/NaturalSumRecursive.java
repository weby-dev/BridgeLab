import java.util.Scanner;

public class NaturalSumRecursive {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a natural number: ");
        int n = scanner.nextInt();

        if (n <= 0) {
            System.out.println("Please enter a positive natural number.");
            scanner.close();
            return;
        }

        int recursiveSum = findSumRecursive(n);

        int formulaSum = findSumFormula(n);

        System.out.println("Sum of first " + n + " natural numbers:");
        System.out.println("Using recursion: " + recursiveSum);
        System.out.println("Using formula n*(n+1)/2: " + formulaSum);

        if (recursiveSum == formulaSum) {
            System.out.println("Both results are correct and equal!");
        } else {
            System.out.println("Results are different. There might be an error.");
        }

        scanner.close();
    }

    public static int findSumRecursive(int n) {
        if (n == 1) {
            return 1;
        }
        return n + findSumRecursive(n - 1);
    }

    public static int findSumFormula(int n) {
        return n * (n + 1) / 2;
    }
}
