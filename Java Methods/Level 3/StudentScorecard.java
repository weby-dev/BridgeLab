import java.util.Scanner;

public class StudentScorecard {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the number of students: ");
        int numStudents = scanner.nextInt();

        int[][] pcmScores = generatePCMScores(numStudents);

        double[][] results = calculateResults(pcmScores);

        displayScorecard(pcmScores, results);

        scanner.close();
    }

    public static int[][] generatePCMScores(int numStudents) {
        int[][] pcmScores = new int[numStudents][3];

        for (int i = 0; i < numStudents; i++) {
            pcmScores[i][0] = (int) (Math.random() * 90) + 10;
            pcmScores[i][1] = (int) (Math.random() * 90) + 10;
            pcmScores[i][2] = (int) (Math.random() * 90) + 10;
        }

        return pcmScores;
    }

    public static double[][] calculateResults(int[][] pcmScores) {
        double[][] results = new double[pcmScores.length][3];

        for (int i = 0; i < pcmScores.length; i++) {
            int total = pcmScores[i][0] + pcmScores[i][1] + pcmScores[i][2];
            double average = total / 3.0;
            double percentage = (total / 300.0) * 100;

            results[i][0] = Math.round(total * 100.0) / 100.0;
            results[i][1] = Math.round(average * 100.0) / 100.0;
            results[i][2] = Math.round(percentage * 100.0) / 100.0;
        }

        return results;
    }

    public static void displayScorecard(int[][] pcmScores, double[][] results) {
        System.out.println("\nStudent Scorecard");
        System.out.println("=================");
        System.out.println("Student\tPhysics\tChemistry\tMath\tTotal\tAverage\tPercentage");
        System.out.println("-------\t-------\t--------\t----\t-----\t-------\t----------");

        for (int i = 0; i < pcmScores.length; i++) {
            System.out.printf("S%d\t%d\t%d\t\t%d\t%.0f\t%.2f\t%.2f%%\n",
                    i + 1,
                    pcmScores[i][0],
                    pcmScores[i][1],
                    pcmScores[i][2],
                    results[i][0],
                    results[i][1],
                    results[i][2]);
        }
    }
}
