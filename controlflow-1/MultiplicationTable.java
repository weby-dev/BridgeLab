import java.util.Scanner;
class MultiplicationTable {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        for (int i = 6; i <= 9; i++) 
            System.out.println(num + " * " + i + " = " + (num * i));
    }
}
