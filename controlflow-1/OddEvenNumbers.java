import java.util.Scanner;
class OddEvenNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) 
            System.out.println(i + (i % 2 == 0 ? " Even" : " Odd"));
    }
}


