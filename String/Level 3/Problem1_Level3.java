import java.util.Scanner;

class Problem1_Level3 {
    public static String bmiStatus(double bmi) {
        if (bmi < 18.5)
            return "Underweight";
        else if (bmi < 24.9)
            return "Normal";
        else if (bmi < 29.9)
            return "Overweight";
        else
            return "Obese";
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double[][] hw = new double[10][2]; // weight, height
        for (int i = 0; i < 10; i++) {
            System.out.print("Enter weight (kg) of person " + (i + 1) + ": ");
            hw[i][0] = sc.nextDouble();
            System.out.print("Enter height (cm) of person " + (i + 1) + ": ");
            hw[i][1] = sc.nextDouble();
        }

        System.out.println("Weight\tHeight\tBMI\t\tStatus");
        for (int i = 0; i < 10; i++) {
            double h = hw[i][1] / 100; // convert cm to m
            double bmi = hw[i][0] / (h * h);
            System.out.printf("%.1f\t%.1f\t%.2f\t%s\n", hw[i][0], hw[i][1], bmi, bmiStatus(bmi));
        }
    }
}
