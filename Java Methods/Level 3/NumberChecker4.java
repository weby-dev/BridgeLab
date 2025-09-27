import java.util.Scanner;

public class NumberChecker4 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int number = scanner.nextInt();

        boolean isPrime = isPrimeNumber(number);
        System.out.println("Is Prime Number: " + isPrime);

        boolean isNeon = isNeonNumber(number);
        System.out.println("Is Neon Number: " + isNeon);

        boolean isSpy = isSpyNumber(number);
        System.out.println("Is Spy Number: " + isSpy);

        boolean isAutomorphic = isAutomorphicNumber(number);
        System.out.println("Is Automorphic Number: " + isAutomorphic);

        boolean isBuzz = isBuzzNumber(number);
        System.out.println("Is Buzz Number: " + isBuzz);

        scanner.close();
    }

    public static boolean isPrimeNumber(int number) {
        if (number <= 1) {
            return false;
        }
        if (number <= 3) {
            return true;
        }
        if (number % 2 == 0 || number % 3 == 0) {
            return false;
        }

        for (int i = 5; i * i <= number; i += 6) {
            if (number % i == 0 || number % (i + 2) == 0) {
                return false;
            }
        }
        return true;
    }

    public static boolean isNeonNumber(int number) {
        long square = (long) number * number;
        int sumOfDigits = 0;

        while (square > 0) {
            sumOfDigits += square % 10;
            square /= 10;
        }

        return sumOfDigits == number;
    }

    public static boolean isSpyNumber(int number) {
        int sum = 0;
        int product = 1;
        int temp = number;

        while (temp > 0) {
            int digit = temp % 10;
            sum += digit;
            product *= digit;
            temp /= 10;
        }

        return sum == product;
    }

    public static boolean isAutomorphicNumber(int number) {
        long square = (long) number * number;
        int temp = number;
        int count = 0;

        while (temp > 0) {
            count++;
            temp /= 10;
        }

        long lastDigits = square % (long) Math.pow(10, count);

        return lastDigits == number;
    }

    public static boolean isBuzzNumber(int number) {
        boolean divisibleBy7 = (number % 7 == 0);

        boolean endsWith7 = (number % 10 == 7);

        return divisibleBy7 || endsWith7;
    }
}
