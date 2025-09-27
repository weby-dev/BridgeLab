import java.util.Scanner;

class Problem5_Level3 {
    public static char[] uniqueChars(String text) {
        String result = "";
        for (int i = 0; i < text.length(); i++) {
            if (result.indexOf(text.charAt(i)) == -1)
                result += text.charAt(i);
        }
        return result.toCharArray();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter text: ");
        String text = sc.nextLine();

        char[] unique = uniqueChars(text);
        for (char c : unique) {
            int count = 0;
            for (int i = 0; i < text.length(); i++)
                if (text.charAt(i) == c)
                    count++;
            System.out.println(c + " -> " + count);
        }
    }
}
