import java.util.Scanner;

class Problem2_Level1 {
    public static String customSubstring(String text, int start, int end) {
        String sub = "";
        for (int i = start; i < end; i++) {
            sub += text.charAt(i);
        }
        return sub;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String text = sc.next();
        System.out.print("Enter start index: ");
        int start = sc.nextInt();
        System.out.print("Enter end index: ");
        int end = sc.nextInt();

        String custom = customSubstring(text, start, end);
        String builtin = text.substring(start, end);

        System.out.println("Custom Substring: " + custom);
        System.out.println("Built-in Substring: " + builtin);
        System.out.println("Are they equal? " + custom.equals(builtin));
    }
}
