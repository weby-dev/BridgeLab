import java.util.Scanner;
class CountdownWhile {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int counter = sc.nextInt();
        while (counter >= 1) System.out.println(counter--);
        System.out.println("Lift off!");
    }
}
