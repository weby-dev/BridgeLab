import java.util.Scanner;
class SumUntilZeroOrNegative {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double total = 0;
        while (true) {
            double val = sc.nextDouble();
            if (val <= 0) break;
            total += val;
        }
        System.out.println("Total: " + total);
    }
}

