import java.util.Scanner;

public class EmployeeBonus {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double[][] employeeData = determineSalaryAndYears();

        double[][] newData = calculateNewSalaryAndBonus(employeeData);

        displayResults(employeeData, newData);

        scanner.close();
    }

    public static double[][] determineSalaryAndYears() {
        double[][] employeeData = new double[10][2];

        for (int i = 0; i < 10; i++) {
            employeeData[i][0] = (int) (Math.random() * 90000) + 10000;

            employeeData[i][1] = (int) (Math.random() * 15) + 1;
        }

        return employeeData;
    }

    public static double[][] calculateNewSalaryAndBonus(double[][] employeeData) {
        double[][] newData = new double[10][2];

        for (int i = 0; i < 10; i++) {
            double oldSalary = employeeData[i][0];
            double yearsOfService = employeeData[i][1];

            double bonusPercentage;
            if (yearsOfService > 5) {
                bonusPercentage = 0.05;
            } else {
                bonusPercentage = 0.02;
            }

            double bonus = oldSalary * bonusPercentage;
            double newSalary = oldSalary + bonus;

            newData[i][0] = newSalary;
            newData[i][1] = bonus;
        }

        return newData;
    }

    public static void displayResults(double[][] employeeData, double[][] newData) {
        System.out.println("Employee Bonus Report - Zara Company");
        System.out.println("=====================================");
        System.out.printf("%-8s %-12s %-12s %-12s %-12s%n", "Emp ID", "Old Salary", "Years", "New Salary", "Bonus");
        System.out.println("------------------------------------------------------------");

        double totalOldSalary = 0;
        double totalNewSalary = 0;
        double totalBonus = 0;

        for (int i = 0; i < 10; i++) {
            double oldSalary = employeeData[i][0];
            double years = employeeData[i][1];
            double newSalary = newData[i][0];
            double bonus = newData[i][1];

            System.out.printf("%-8s %-12.2f %-12.0f %-12.2f %-12.2f%n",
                    "E" + (i + 1), oldSalary, years, newSalary, bonus);

            totalOldSalary += oldSalary;
            totalNewSalary += newSalary;
            totalBonus += bonus;
        }

        System.out.println("------------------------------------------------------------");
        System.out.printf("%-8s %-12.2f %-12s %-12.2f %-12.2f%n",
                "TOTAL", totalOldSalary, "", totalNewSalary, totalBonus);

        System.out.println("\nSummary:");
        System.out.println("--------");
        System.out.println("Total Old Salary: " + totalOldSalary);
        System.out.println("Total New Salary: " + totalNewSalary);
        System.out.println("Total Bonus Amount: " + totalBonus);
    }
}
