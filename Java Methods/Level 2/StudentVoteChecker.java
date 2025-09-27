import java.util.Scanner;

public class StudentVoteChecker {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] studentAges = new int[10];

        for (int i = 0; i < studentAges.length; i++) {
            System.out.print("Enter age for student " + (i + 1) + ": ");
            studentAges[i] = scanner.nextInt();
        }

        System.out.println("\nVoting Eligibility Results:");
        System.out.println("---------------------------");

        for (int i = 0; i < studentAges.length; i++) {
            boolean canVote = canStudentVote(studentAges[i]);
            System.out.println("Student " + (i + 1) + " (Age: " + studentAges[i] + "): " +
                    (canVote ? "Can vote" : "Cannot vote"));
        }

        scanner.close();
    }

    public static boolean canStudentVote(int age) {
        if (age < 0) {
            return false;
        }

        return age >= 18;
    }
}
