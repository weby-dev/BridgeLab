import java.util.Scanner;

class customLength {
    public static int customLength(String text) {
        int count = 0;
        try {
            while (true) {
                text.charAt(count);
                count++;
            }
        } catch (StringIndexOutOfBoundsException e) {
            return count;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String text = sc.next();

        int custom = customLength(text);
        int builtin = text.length();

        System.out.println("Custom length: " + custom);
        System.out.println("Built-in length: " + builtin);
    }
}
