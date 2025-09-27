import java.util.Scanner;

class Problem6_Level2 {
    public static String getType(char ch) {
        if (!Character.isLetter(ch))
            return "Not a Letter";
        ch = Character.toLowerCase(ch);
        return "aeiou".indexOf(ch) != -1 ? "Vowel" : "Consonant";
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter text: ");
        String text = sc.nextLine();

        System.out.println("Char\tType");
        for (int i = 0; i < text.length(); i++) {
            System.out.println(text.charAt(i) + "\t" + getType(text.charAt(i)));
        }
    }
}
