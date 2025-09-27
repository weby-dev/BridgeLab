import java.util.Scanner;

public class LargestCheck {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n1, n2, n3;
        System.out.print("Enter first number: ");
        n1 = sc.nextInt();
        System.out.print("Enter second number: ");
        n2 = sc.nextInt();
        System.out.print("Enter third number: ");
        n3 = sc.nextInt();
        System.out.println("Is the first number the largest? " + (n1 > n2 && n1 > n3));
        System.out.println("Is the second number the largest? " + (n2 > n1 && n2 > n3));
        System.out.println("Is the third number the largest? " + (n3 > n1 && n3 > n2));
        sc.close();
    }
}