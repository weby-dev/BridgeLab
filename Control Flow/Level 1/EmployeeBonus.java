import java.util.Scanner;

public class EmployeeBonus {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double salary;
        int years;
        System.out.print("Enter salary: ");
        salary = sc.nextDouble();
        System.out.print("Enter years of service: ");
        years = sc.nextInt();
        if (years > 5) {
            double bonus = 0.05 * salary;
            System.out.println("Bonus amount = " + bonus);
        } else {
            System.out.println("No bonus");
        }
        sc.close();
    }
}