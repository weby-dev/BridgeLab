import java.util.Scanner;

class Problem4_Level3 {
    public static void frequency(String text) {
        int[] freq = new int[256];
        for (int i = 0; i < text.length(); i++)
            freq[text.charAt(i)]++;
        System.out.println("Char\tFreq");
        for (int i = 0; i < 256; i++) {
            if (freq[i] > 0)
                System.out.println((char) i + "\t" + freq[i]);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter text: ");
        String text = sc.nextLine();
        frequency(text);
    }
}
