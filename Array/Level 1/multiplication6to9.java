import java.util.*;

public class multiplication6to9 {

    public static void main(String[] args) {
        int[] results = new int[4];
        Scanner sc = new Scanner(System.in);

        for (int number = 6; number <= 9; number++) {
            System.out.println("Multiplication Table for " + number);
            for (int i = 1; i <= 10; i++) {
                int result = number * i;
                System.out.println(number + " * " + i + " = " + result);
            }
        }
    }
}