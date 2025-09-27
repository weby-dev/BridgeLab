import java.util.Scanner;

public class BMICalculator {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double[][] teamData = new double[10][3];

        for (int i = 0; i < 10; i++) {
            System.out.println("Enter data for Person " + (i + 1) + ":");
            System.out.print("Weight (in kg): ");
            teamData[i][0] = scanner.nextDouble();

            System.out.print("Height (in cm): ");
            teamData[i][1] = scanner.nextDouble();

            System.out.println();
        }

        calculateBMI(teamData);

        String[] bmiStatus = determineBMIStatus(teamData);

        System.out.println("Team BMI Analysis Results:");
        System.out.println("=========================");
        System.out.printf("%-8s %-8s %-8s %-8s %-15s%n", "Person", "Weight", "Height", "BMI", "Status");
        System.out.println("--------------------------------------------------------");

        for (int i = 0; i < 10; i++) {
            System.out.printf("%-8s %-8.1f %-8.1f %-8.2f %-15s%n",
                    "P" + (i + 1),
                    teamData[i][0],
                    teamData[i][1],
                    teamData[i][2],
                    bmiStatus[i]);
        }

        scanner.close();
    }

    public static void calculateBMI(double[][] teamData) {
        for (int i = 0; i < teamData.length; i++) {
            double weight = teamData[i][0];
            double height = teamData[i][1] / 100.0;

            teamData[i][2] = weight / (height * height);
        }
    }

    public static String[] determineBMIStatus(double[][] teamData) {
        String[] status = new String[teamData.length];

        for (int i = 0; i < teamData.length; i++) {
            double bmi = teamData[i][2];

            if (bmi < 18.5) {
                status[i] = "Underweight";
            } else if (bmi >= 18.5 && bmi < 25) {
                status[i] = "Normal weight";
            } else if (bmi >= 25 && bmi < 30) {
                status[i] = "Overweight";
            } else {
                status[i] = "Obese";
            }
        }

        return status;
    }
}
