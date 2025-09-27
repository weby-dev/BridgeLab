public class SubstringOccurrences {
    public static void main(String[] args) {
        String str = "abcabcabc";
        String sub = "abc";
        int count = 0, idx = 0;
        while ((idx = str.indexOf(sub, idx)) != -1) {
            count++;
            idx += sub.length();
        }
        System.out.println("Occurrences: " + count);
    }
}
