import java.util.Scanner;
class CountdownFor {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int counter = sc.nextInt();
        for (int i = counter; i >= 1; i--) System.out.println(i);
        System.out.println("Lift off!");
    }
}

