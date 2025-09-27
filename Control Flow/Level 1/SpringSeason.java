import java.util.Scanner;

public class SpringSeason {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int month, day;
        System.out.print("Enter month: ");
        month = sc.nextInt();
        System.out.print("Enter day: ");
        day = sc.nextInt();
        boolean result = (month == 3 && day >= 20) || (month > 3 && month < 6) ||
                (month == 6 && day <= 20);
        if (result) {
            System.out.println("Its a Spring Season");
        } else {
            System.out.println("Not a Spring Season");
        }
        sc.close();
    }
}