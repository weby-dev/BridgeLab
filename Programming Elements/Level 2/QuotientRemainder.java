import java.util.Scanner;

public class QuotientRemainder {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int number1, number2;
        System.out.print("Enter first number: ");
        number1 = sc.nextInt();
        System.out.print("Enter second number: ");
        number2 = sc.nextInt();
        int q = number1 / number2;
        int r = number1 % number2;
        System.out.println(
                "The Quotient is " + q + " and Reminder is " + r + " of two number " + number1 + " and " + number2);
        sc.close();
    }
}