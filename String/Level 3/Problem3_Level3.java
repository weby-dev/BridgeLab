import java.util.Scanner;

class Problem3_Level3 {
    public static char findNonRepeating(String text) {
        int[] freq = new int[256];
        for (int i = 0; i < text.length(); i++)
            freq[text.charAt(i)]++;
        for (int i = 0; i < text.length(); i++)
            if (freq[text.charAt(i)] == 1)
                return text.charAt(i);
        return '-';
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter text: ");
        String text = sc.nextLine();

        char result = findNonRepeating(text);
        System.out.println("First non-repeating: " + (result == '-' ? "None" : result));
    }
}
