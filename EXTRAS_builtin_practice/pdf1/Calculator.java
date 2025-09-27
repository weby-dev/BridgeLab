import java.util.*;

public class Calculator {
    static int add(int a, int b) { return a + b; }
    static int subtract(int a, int b) { return a - b; }
    static int multiply(int a, int b) { return a * b; }
    static double divide(int a, int b) { return (double) a / b; }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt(), b = sc.nextInt();
        char op = sc.next().charAt(0);
        switch (op) {
            case '+': System.out.println(add(a, b)); break;
            case '-': System.out.println(subtract(a, b)); break;
            case '*': System.out.println(multiply(a, b)); break;
            case '/': System.out.println(divide(a, b)); break;
            default: System.out.println("Invalid");
        }
        sc.close();
    }
}

