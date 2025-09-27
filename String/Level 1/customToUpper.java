import java.util.Scanner;

class Problem9_Level1 {
    public static String customToUpper(String text) {
        String result = "";
        for (int i = 0; i < text.length(); i++) {
            char ch = text.charAt(i);
            if (ch >= 'a' && ch <= 'z') {
                ch = (char) (ch - 32);
            }
            result += ch;
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter text: ");
        String text = sc.nextLine();

        String custom = customToUpper(text);
        String builtin = text.toUpperCase();

        System.out.println("Custom Uppercase: " + custom);
        System.out.println("Built-in Uppercase: " + builtin);
        System.out.println("Are they equal? " + custom.equals(builtin));
    }
}
