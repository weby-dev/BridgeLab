import java.util.Scanner;

class Problem2_Level3 {
    public static char[] uniqueChars(String text) {
        char[] arr = new char[text.length()];
        int size = 0;
        for (int i = 0; i < text.length(); i++) {
            char ch = text.charAt(i);
            boolean found = false;
            for (int j = 0; j < size; j++) {
                if (arr[j] == ch) {
                    found = true;
                    break;
                }
            }
            if (!found)
                arr[size++] = ch;
        }
        char[] result = new char[size];
        for (int i = 0; i < size; i++)
            result[i] = arr[i];
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter text: ");
        String text = sc.nextLine();

        char[] unique = uniqueChars(text);
        System.out.print("Unique characters: ");
        for (char c : unique)
            System.out.print(c + " ");
    }
}
