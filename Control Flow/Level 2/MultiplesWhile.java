import java.util.Scanner;

public class MultiplesWhile {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();

        if (num > 0 && num < 100) {
            int i = 100;
            while (i >= 1) {
                if (i % num == 0) {
                    System.out.println(i);
                }
                i--;
            }
        }
        sc.close();
    }
}