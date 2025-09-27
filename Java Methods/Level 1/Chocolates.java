import java.util.Scanner;

public class Chocolates {
    public static int[] findRemainderAndQuotient(int chocolates, int children) {
        int each = chocolates / children;
        int remaining = chocolates % children;
        return new int[] { each, remaining };
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number of chocolates: ");
        int chocolates = sc.nextInt();
        System.out.print("Enter number of children: ");
        int children = sc.nextInt();

        int[] result = findRemainderAndQuotient(chocolates, children);
        System.out.println("Each child gets: " + result[0] + ", Remaining chocolates: " + result[1]);
    }
}
