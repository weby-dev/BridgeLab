import java.util.Scanner;

class customToLower {
    public static String customToLower(String text) {
        String result = "";
        for (int i = 0; i < text.length(); i++) {
            char ch = text.charAt(i);
            if (ch >= 'A' && ch <= 'Z') {
                ch = (char) (ch + 32);
            }
            result += ch;
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter text: ");
        String text = sc.nextLine();

        String custom = customToLower(text);
        String builtin = text.toLowerCase();

        System.out.println("Custom Lowercase: " + custom);
        System.out.println("Built-in Lowercase: " + builtin);
        System.out.println("Are they equal? " + custom.equals(builtin));
    }
}
