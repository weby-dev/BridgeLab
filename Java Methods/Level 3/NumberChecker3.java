import java.util.Scanner;

public class NumberChecker3 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int number = scanner.nextInt();

        int digitCount = findDigitCount(number);
        int[] digits = storeDigits(number);

        System.out.println("Number of digits: " + digitCount);
        System.out.print("Original digits: ");
        for (int digit : digits) {
            System.out.print(digit + " ");
        }
        System.out.println();

        int[] reversedDigits = reverseDigits(digits);
        System.out.print("Reversed digits: ");
        for (int digit : reversedDigits) {
            System.out.print(digit + " ");
        }
        System.out.println();

        boolean areEqual = compareArrays(digits, reversedDigits);
        System.out.println("Original and reversed arrays are equal: " + areEqual);

        boolean isPalindrome = isPalindrome(digits);
        System.out.println("Is Palindrome: " + isPalindrome);

        boolean isDuck = isDuckNumber(digits);
        System.out.println("Is Duck Number: " + isDuck);

        scanner.close();
    }

    public static int findDigitCount(int number) {
        if (number == 0)
            return 1;
        return (int) Math.log10(Math.abs(number)) + 1;
    }

    public static int[] storeDigits(int number) {
        int count = findDigitCount(number);
        int[] digits = new int[count];

        int temp = Math.abs(number);
        for (int i = count - 1; i >= 0; i--) {
            digits[i] = temp % 10;
            temp /= 10;
        }

        return digits;
    }

    public static int[] reverseDigits(int[] digits) {
        int[] reversed = new int[digits.length];
        for (int i = 0; i < digits.length; i++) {
            reversed[i] = digits[digits.length - 1 - i];
        }
        return reversed;
    }

    public static boolean compareArrays(int[] arr1, int[] arr2) {
        if (arr1.length != arr2.length) {
            return false;
        }

        for (int i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                return false;
            }
        }
        return true;
    }

    public static boolean isPalindrome(int[] digits) {
        int left = 0;
        int right = digits.length - 1;

        while (left < right) {
            if (digits[left] != digits[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    public static boolean isDuckNumber(int[] digits) {
        for (int digit : digits) {
            if (digit != 0) {
                return true;
            }
        }
        return false;
    }
}
