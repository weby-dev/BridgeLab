import java.util.Scanner;

public class Grades {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int p = sc.nextInt();
        int c = sc.nextInt();
        int m = sc.nextInt();
        int avg = (p + c + m) / 3;
        if (avg >= 80)
            System.out.println("Average: " + avg + " Grade A Level 4");
        else if (avg >= 70)
            System.out.println("Average: " + avg + " Grade B Level 3");
        else if (avg >= 60)
            System.out.println("Average: " + avg + " Grade C Level 2");
        else if (avg >= 50)
            System.out.println("Average: " + avg + " Grade D Level 1");
        else if (avg >= 40)
            System.out.println("Average: " + avg + " Grade E Level 1");
        else
            System.out.println("Average: " + avg + " Grade R Remedial");
    }
}