import java.util.Scanner;

public class KmMilesInput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double mileRate = 1.6;
        System.out.print("Enter distance in km: ");
        double km = sc.nextDouble();
        double miles = km / mileRate;
        System.out.println("The total miles is " + miles + " mile for the given " + km + " km");
        sc.close();
    }
}