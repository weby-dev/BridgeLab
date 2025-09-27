import java.util.*;

public class studentGrades {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of students: ");
        int n = sc.nextInt();

        int[][] marks = new int[n][3];
        double[] percent = new double[n];
        char[] grade = new char[n];

        for (int i = 0; i < n; i++) {
            System.out.println("Enter marks for Physics, Chemistry, Maths of student " + (i + 1));
            for (int j = 0; j < 3; j++) {
                int m = sc.nextInt();
                if (m < 0) {
                    System.out.println("Invalid marks, try again.");
                    j--;
                    continue;
                }
                marks[i][j] = m;
            }

            percent[i] = (marks[i][0] + marks[i][1] + marks[i][2]) / 3.0;

            if (percent[i] >= 90)
                grade[i] = 'A';
            else if (percent[i] >= 75)
                grade[i] = 'B';
            else if (percent[i] >= 50)
                grade[i] = 'C';
            else
                grade[i] = 'F';
        }

        for (int i = 0; i < n; i++) {
            System.out.println("Student " + (i + 1) + ": %=" + percent[i] + ", Grade=" + grade[i]);
        }
    }
}