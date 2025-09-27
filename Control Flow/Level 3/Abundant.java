import java.util.Scanner;

public class Abundant {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), sum = 0;
        for (int i = 1; i < n; i++) {
            if (n % i == 0)
                sum += i;
        }
        if (sum > n)
            System.out.println("Abundant Number");
        else
            System.out.println("Not an Abundant Number");
    }
}