import java.util.*;

public class bmi2DArray {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of persons: ");
        int n = sc.nextInt();

        double[][] personData = new double[n][3]; // weight, height, bmi
        String[] weightStatus = new String[n];

        for (int i = 0; i < n; i++) {
            System.out.print("Enter weight (kg) of person " + (i + 1) + ": ");
            double w = sc.nextDouble();
            System.out.print("Enter height (m) of person " + (i + 1) + ": ");
            double h = sc.nextDouble();

            if (w <= 0 || h <= 0) {
                System.out.println("Invalid input, please enter again.");
                i--;
                continue;
            }

            double bmi = w / (h * h);

            personData[i][0] = w;
            personData[i][1] = h;
            personData[i][2] = bmi;

            if (bmi < 18.5)
                weightStatus[i] = "Underweight";
            else if (bmi < 25)
                weightStatus[i] = "Normal";
            else if (bmi < 30)
                weightStatus[i] = "Overweight";
            else
                weightStatus[i] = "Obese";
        }

        for (int i = 0; i < n; i++) {
            System.out.println("Person " + (i + 1) + ": H=" + personData[i][1] + ", W=" +
                    personData[i][0] +
                    ", BMI=" + personData[i][2] + ", Status=" + weightStatus[i]);
        }
    }
}