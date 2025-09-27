import java.util.Scanner;

class Problem6_Level1 {
    public static void generateException2(String text) {
        System.out.println(text.substring(5, 2)); // invalid indices
    }

    public static void handleException(String text) {
        try {
            System.out.println(text.substring(5, 2));
        } catch (IllegalArgumentException e) {
            System.out.println("Caught Exception: " + e);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter text: ");
        String text = sc.next();

        // generateException(text); // crash
        handleException(text);
    }
}
