import java.util.Scanner;

class Problem7_Level3 {
    public static boolean checkIterative(String text) {
        int i = 0, j = text.length() - 1;
        while (i < j)
            if (text.charAt(i++) != text.charAt(j--))
                return false;
        return true;
    }

    public static boolean checkRecursive(String text, int i, int j) {
        if (i >= j)
            return true;
        if (text.charAt(i) != text.charAt(j))
            return false;
        return checkRecursive(text, i + 1, j - 1);
    }

    public static boolean checkByReverse(String text) {
        String rev = "";
        for (int i = text.length() - 1; i >= 0; i--)
            rev += text.charAt(i);
        return text.equals(rev);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter text: ");
        String text = sc.nextLine();

        System.out.println("Iterative: " + checkIterative(text));
        System.out.println("Recursive: " + checkRecursive(text, 0, text.length() - 1));
        System.out.println("Reverse Compare: " + checkByReverse(text));
    }
}
