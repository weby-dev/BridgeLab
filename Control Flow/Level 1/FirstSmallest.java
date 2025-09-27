import java.util.Scanner;

public class FirstSmallest {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n1, n2, n3;
        System.out.print("Enter first number: ");
        n1 = sc.nextInt();
        System.out.print("Enter second number: ");
        n2 = sc.nextInt();
        System.out.print("Enter third number: ");
        n3 = sc.nextInt();
        boolean result = n1 < n2 && n1 < n3;
        System.out.println("Is the first number the smallest? " + result);
        sc.close();
    }
}