import java.util.Scanner;

public class SumUntilZero {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double total = 0.0;
        double num;
        System.out.print("Enter number: ");
        num = sc.nextDouble();
        while (num != 0) {
            total += num;
            System.out.print("Enter number: ");
            num = sc.nextDouble();
        }
        System.out.println("Total = " + total);
        sc.close();
    }
}