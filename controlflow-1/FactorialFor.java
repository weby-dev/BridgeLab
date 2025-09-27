import java.util.Scanner;
class FactorialFor {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), fact = 1;
        if (n >= 0) {
            for (int i = 1; i <= n; i++) fact *= i;
            System.out.println("Factorial: " + fact);
        } else System.out.println("Not a natural number");
    }
}


