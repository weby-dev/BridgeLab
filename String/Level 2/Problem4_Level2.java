import java.util.Scanner;

class Problem4_Level2 {
    public static String[] customSplit(String text) {
        return text.split(" ");
    }

    public static int[] findShortestLongest(String[] words) {
        int shortest = 0, longest = 0;
        for (int i = 1; i < words.length; i++) {
            if (words[i].length() < words[shortest].length())
                shortest = i;
            if (words[i].length() > words[longest].length())
                longest = i;
        }
        return new int[] { shortest, longest };
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String text = sc.nextLine();

        String[] words = customSplit(text);
        int[] result = findShortestLongest(words);

        System.out.println("Shortest word: " + words[result[0]]);
        System.out.println("Longest word: " + words[result[1]]);
    }
}
