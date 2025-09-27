public class LongestWord {
    public static void main(String[] args) {
        String str = "Java is a powerful language";
        String[] words = str.split(" ");
        String longest = "";
        for (String w : words) if (w.length() > longest.length()) longest = w;
        System.out.println("Longest Word: " + longest);
    }
}
