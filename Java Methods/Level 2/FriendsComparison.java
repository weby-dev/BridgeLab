import java.util.Scanner;

public class FriendsComparison {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] ages = new int[3];
        double[] heights = new double[3];
        String[] names = { "Amar", "Akbar", "Anthony" };

        for (int i = 0; i < 3; i++) {
            System.out.print("Enter age for " + names[i] + ": ");
            ages[i] = scanner.nextInt();

            System.out.print("Enter height (in cm) for " + names[i] + ": ");
            heights[i] = scanner.nextDouble();
        }

        int youngestIndex = findYoungest(ages);
        int tallestIndex = findTallest(heights);

        System.out.println("\nResults:");
        System.out.println("--------");
        System.out.println("Youngest friend: " + names[youngestIndex] + " (Age: " + ages[youngestIndex] + ")");
        System.out.println("Tallest friend: " + names[tallestIndex] + " (Height: " + heights[tallestIndex] + " cm)");

        System.out.println("\nAll friends information:");
        System.out.println("------------------------");
        for (int i = 0; i < 3; i++) {
            System.out.println(names[i] + " - Age: " + ages[i] + ", Height: " + heights[i] + " cm");
        }

        scanner.close();
    }

    public static int findYoungest(int[] ages) {
        int youngestIndex = 0;
        for (int i = 1; i < ages.length; i++) {
            if (ages[i] < ages[youngestIndex]) {
                youngestIndex = i;
            }
        }
        return youngestIndex;
    }

    public static int findTallest(double[] heights) {
        int tallestIndex = 0;
        for (int i = 1; i < heights.length; i++) {
            if (heights[i] > heights[tallestIndex]) {
                tallestIndex = i;
            }
        }
        return tallestIndex;
    }
}
