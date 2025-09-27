import java.util.Scanner;

public class PrimeCheck {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int n = sc.nextInt();

        int count = 0;

        if (n <= 1) {
            System.out.println(n + " is not a prime number");
        } else {
            for (int i = 2; i < n; i++) {
                if (n % i == 0) {
                    count++;
                }
            }

            if (count == 0) {
                System.out.println(n + " is a prime number");
            } else {
                System.out.println(n + " is not a prime number");
            }
        }
        sc.close();
    }
}