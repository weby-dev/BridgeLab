import java.util.Scanner;
class SumUntilZero {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double total = 0, val;
        while ((val = sc.nextDouble()) != 0) total += val;
        System.out.println("Total: " + total);
    }
}


