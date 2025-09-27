import java.util.Scanner;

public class PowerWhile {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number: ");
        int num = sc.nextInt();
        System.out.print("Enter power: ");
        int pow = sc.nextInt();

        int result = 1;
        int count = 0;
        while (count < pow) {
            result = result * num;
            count++;
        }
        System.out.println("Result = " + result);
        sc.close();
    }
}